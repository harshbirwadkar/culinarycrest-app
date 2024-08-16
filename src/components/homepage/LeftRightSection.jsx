import React from 'react'
import { Link } from 'react-router-dom'

function LeftRightSection() {
  return (
    <div>
      <div className="h-[700px] w-full bg-sorrell-brown flex flex-row justify-center items-center">
        <div className="w-2/4 h-[80%]  flex justify-center">
          <div className="flex flex-col my-14">
            <div className="text-4xl font-font1 py-12 font-bold text-white-smoke flex justify-center">Explore Culinary Delights</div>
            <div className="flex justify-center">
              <div className="text-balance text-center font-normal text-white-smoke font-font3 w-[75%] text-2xl">
                Discover a curated collection of our most beloved
                recipes, handpicked for their flavor, creativity,
                and appeal. From appetizers to desserts, our
                featured recipes promise to delight your taste
                buds and inspire your culinary adventures.
              </div>
            </div>
            <div className=" w-full  flex justify-center my-[65px]">
              
                <Link to='/recipeform' className="w-[320px] h-[55px] border-4  backdrop-blur-sm flex items-center justify-center rounded-2xl text-white-smoke  border-white/80 transition duration-200 ease-in hover:bg-white-rgba-0.8  hover:text-matterhorn">
                    <span className='  font-bold   font-font2 text-xl '>Share Recipe</span>
                </Link>
            </div>
          </div>
        </div>
        <div className="w-2/4 h-[80%] flex flex-row justify-center items-center mr-10">
          <img className='h-[500px] w-[200px] object-cover mx-5 rounded-3xl shadow-[4px_6px_25px_8px_rgba(0,0,0,0.25)]' src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <img className='h-[500px] w-[200px] object-cover mx-5 rounded-3xl shadow-[4px_6px_25px_8px_rgba(0,0,0,0.25)]' src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='h-[500px] w-[200px] object-cover mx-5 rounded-3xl shadow-[4px_6px_25px_8px_rgba(0,0,0,0.25)]' src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  )
}

export default LeftRightSection