import React from 'react'

function IngredientsCardSection(props) {
  const { name, quantity, img } = props.ingredient; 
  

  return (
    <div>
        <div className="flex flex-col justify-center items-center h-[200px] w-[190px]">
            <img className='w-[100px] h-[100px] rounded-full' src={img} alt="" />
            <div className=" font-medium text-xl font-font3">{name}</div>
            <div className=" font-bold text-xl font-font3">{quantity}</div>
        </div>
    </div>
  )
}

export default IngredientsCardSection