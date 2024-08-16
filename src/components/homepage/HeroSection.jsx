import React from 'react'

function HeroPage() {
  return (
    <div>
        <div className="h-[800px] relative box-border m-0 p-0 ">
          <img className="brightness-[0.70] w-full h-[800px] object-cover" src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/satay-aubergine-and-roasted-broccoli-53a1bb4c.jpg" alt="" />
            <div className="text-7xl font-font3 font-bold text-white-smoke absolute top-[250px] w-full flex justify-center">Elevate Your Taste Experience!</div>
            <div className="text-2xl font-font3 font-medium text-white-smoke absolute top-[440px] w-full flex justify-center">Discover the Irresistible Charm of</div>
            <div className="text-4xl font-font3 font-light text-white-smoke absolute top-[470px] w-full flex justify-center"> Satay Aubergine and Roasted Broccoli</div>
            <div className="  top-[610px] w-full absolute flex justify-center"> 
                <div className="w-[220px] h-[60px] bg-white-rgba-0.5 backdrop-blur-sm flex items-center justify-center rounded-xl border-2 border-white/70 transition duration-200 ease-in hover:bg-white-rgba-0.8 ">
                    <span className='  font-bold text-matterhorn font-font2 text-xl '>View Recipe</span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default HeroPage