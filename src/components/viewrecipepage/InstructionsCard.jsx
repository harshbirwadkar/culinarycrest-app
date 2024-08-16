import React from 'react'

function InstructionsCard(props) {
  const {instruction , img , step} = props
  return (
    <div>
        <div className='flex justify-center items-center'>
        <div className="w-[360px] h-[470px] flex flex-col items-center rounded-[35px] bg-alabaster shadow-[4px_4px_30px_2px_rgba(0,0,0,0.25)] transition ease-in-out delay-150 duration-500  hover:shadow-[4px_4px_30px_10px_rgba(0,0,0,0.25)]">
            <img className='w-full h-[200px] rounded-t-[35px] object-cover' src={img} alt="" />
            <div className="flex flex-col justify-center w-[322px]">
                <div className=" font-font1 font-bold text-matterhorn text-xl my-3">STEP {step}</div>
                <div className="text-sm font-medium font-font3 text-matterhorn">{instruction}</div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default InstructionsCard