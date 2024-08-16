import React from 'react'

function AboutSection() {
    return (
        <div>
            <div className="w-full relative mt-[136px] flex justify-center items-center">
                <div className="w-[96%] h-full bg-alabaster flex justify-center items-center flex-col pb-[130px] rounded-t-[25px]">
                    <div className="px-[65px] py-[55px]">
                        <h2 className='text-[55px] text-matterhorn font-font3 font-bold'>About Us</h2>
                    </div>
                    <div className="w-[70%] text-balance text-center leading-tight font-normal text-matterhorn font-font3  text-[28px]">
                        Welcome to CulinaryCrest – your ultimate destination for discovering, sharing, and savoring the world of recipes! At CulinaryCrest, we believe that cooking is not just about following instructions but about creating experiences, memories, and connections through food.
                    </div>
                    <h2 className='  text-[40px] font-font1 font-semibold text-matterhorn pt-[70px] pb-[38px]'>Discover a World of Recipes</h2>
                    <div className="w-[70%] text-balance text-center leading-tight font-normal text-matterhorn font-font3  text-[28px]">
                        CulinaryCrest is home to a diverse collection of recipes from around the globe. Whether you are looking for a quick weekday dinner, an elaborate feast for a special occasion, or a new twist on a classic dish, you'll find it here. Our user-friendly search and filter options make it easy to find exactly what you're craving.
                    </div>
                    <h2 className='text-[40px] font-font1 font-semibold text-matterhorn pt-[70px] pb-[38px]'>Share Your Culinary Creations</h2>
                    <div className="w-[70%] text-balance text-center leading-tight font-normal text-matterhorn font-font3  text-[28px]">
                        Have a family recipe that everyone raves about? Or perhaps you've just invented a dish that's too good not to share? CulinaryCrest provides you with a platform to upload your own recipes, complete with detailed instructions, required utensils, ingredients, and nutritional values. Join our community of food enthusiasts and inspire others with your culinary creations.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection