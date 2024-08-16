import React from 'react'

function BentoboxSection() {
    return (
        <div>
            <div className="flex flex-col h-[850px]">
                <h2 className="flex w-full justify-center text-4xl font-font1 font-bold text-matterhorn my-16">Recipes of the month</h2>
                <div className="flex justify-center">
                    <div className="flex flex-row  h-[600px]  w-[75%]">
                        <div className="w-[45%]  flex justify-center">
                            <div className="w-[485px] h-[100%] bg-alabaster rounded-[35px] hover:brightness-90">
                                <div className="h-[80%] ">
                                    <img className=" object-cover h-full w-full rounded-t-[35px] " src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/herby-burgers-and-wedges-3010a629.jpg" alt="" />
                                </div>
                                <div className="my-8">
                                    <div className="text-2xl flex justify-center font-font3 font-bold text-matterhorn">Herby Burgers and Wedges</div>
                                    <div className="text-lg flex justify-center font-font3 font-medium text-matterhorn">with Chimichurri Tomato Salad</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[55%]  flex justify-center">
                            <div className="w-[96%] h-full ">
                                <div className="w-full h-2/4 flex flex-row">
                                    <div className="w-2/4 h-full flex justify-center items-center  ">
                                        <div className="w-[90%] h-[98%] bg-alabaster rounded-[35px] hover:brightness-90">
                                            <img className="h-[70%] w-full rounded-t-[35px] object-cover" src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/creamy-lemony-orzotto-5a5b32a4.jpg" alt="" />
                                            <div className="flex justify-center">
                                                <div className="text-2xl  font-font3 font-bold w-[95%] text-matterhorn pt-1.5">Creamy Lemony Orzotto</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/4 h-full flex justify-center items-center  ">
                                        <div className="w-[90%] h-[98%] bg-alabaster rounded-[35px] hover:brightness-90">
                                            <img className="h-[70%] w-full rounded-t-[35px] object-cover" src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/creamy-lemony-orzotto-5a5b32a4.jpg" alt="" />
                                            <div className="flex justify-center">
                                                <div className="text-2xl  font-font3 font-bold w-[95%] text-matterhorn pt-1.5">Creamy Lemony Orzotto</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" h-2/4 flex justify-center items-end">
                                    <div className=" w-[95%] h-[90%] rounded-[35px] bg-alabaster flex flex-row hover:brightness-90">
                                        <img  className="w-2/4 h-full rounded-l-[35px] object-cover" src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/cauliflower-rigatoni-cheese-b8fede05.jpg" alt="" />
                                        <div className="w-2/4 h-full grid content-between justify-items-center  ">
                                            <div className="text-2xl  font-font3 font-bold  text-matterhorn py-4 px-5">Cauliflower Rigatoni Cheese</div>
                                            <div className="text-lg  font-font3 font-medium text-matterhorn px-5 py-10">with Rocket Salad</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BentoboxSection