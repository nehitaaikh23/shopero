import React, { createContext, useEffect, useState } from 'react'
import { data } from 'react-router-dom';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
        let cart = {};
        
        for(let index = 0; index < 300+1 ; index++){
            cart[index] = 0
        }
        return cart;
    }

const ShopContextProvider = (props) => {

    const [all_product,setAll_product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const fetchInfo = () => {
        fetch(`${import.meta.env.VITE_API_URL}/allproducts`)
        .then((resp) => resp.json())
        .then((data)=> {setAll_product(data)})
        console.log("fetched",all_product)
    }
    

    useEffect(()=>{
        fetchInfo();

        if(localStorage.getItem('auth-token')){
            fetch(`${import.meta.env.VITE_API_URL}/getcart`,{
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "Content-Type": "application/json"
                },
                body: ''
            }).then((resp)=>resp.json()).then((data)=> setCartItems(data));
        }
    },[])
    

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch(`${import.meta.env.VITE_API_URL}/addtocart`,{
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem('auth-token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"itemId":itemId}),
            }).then((resp) => resp.json()).then((data) => console.log(data))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem("auth-token")){
            fetch(`${import.meta.env.VITE_API_URL}/removefromcart`,{
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"itemId":itemId}),
            }).then((resp) => resp.json()).then((data) => console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount.toLocaleString();
    }

    const getTotalCartItems = () => {
        let totalItems = 0;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItems += cartItems[item]
            }
        }
        return totalItems;
    }

    const contextValue = {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart,getTotalCartItems};
    

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;