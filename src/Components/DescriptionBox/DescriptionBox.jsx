import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = (props) => {

    const {product} = props;

  return (
    <div className='description-box'>
        <div className="description-box-navigator">
            <div className="description-box-nav-box">Description</div>
            <div className="description-box-nav-box fade">Reviews (122)</div>
        </div>
        <div className="description-box-description">
            <p>Cotton canvas chacket silk mixing classic quirky work wear primary colour cropped. 
              Flattering high rise easy care flared fit - cut straight leg that flares at the ankle comfy tight. 
              Sophisticated kymono-style neckline satin finish manly cloth check black and red precious. 
              Side pockets flattering fit check trim to the undercollar interior lining vintage-inspired look three-quarter length sleeves. Pocket detail to sides jacquard fabric fully lined notch lapel three-button cuffs contrast stitching classic colar.</p>
              <p>Cotton canvas chacket silk mixing classic quirky work wear primary colour cropped. 
              Flattering high rise easy care flared fit - cut straight leg that flares at the ankle comfy tight. 
              Sophisticated kymono-style neckline satin finish manly cloth check black and red precious. 
              Side pockets flattering fit check trim to the undercollar interior lining vintage-inspired look three-quarter length sleeves. Pocket detail to sides jacquard fabric fully lined notch lapel three-button cuffs contrast stitching classic colar.</p>
        </div>
    </div>
  )
}

export default DescriptionBox