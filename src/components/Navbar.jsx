import React, { useState, useEffect } from "react"
import '../App.css'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Navbar() {
  const TOP_OFFSET = 120;
  const [showBackground, setShowBackground] = useState(false)


  const location = useLocation();
  const currentPath = location.pathname;

  const pathsToShowMatterhorn = [
    /^\/viewrecipe(\/.*)?$/,  // Matches /viewrecipe and /viewrecipe/:id
    "/recipeform",
    "/about"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const shouldUseMatterhornText = pathsToShowMatterhorn.some(path =>
    typeof path === 'string' ? path === currentPath : path.test(currentPath)
  );

  const getTextClass = () => {
    if (showBackground || shouldUseMatterhornText) {
      return 'transition duration-300 ease-in text-matterhorn';
    }
    return 'transition duration-300 ease-in text-white-smoke';
  };

  return (
    <div>
      {/* <div className=" test-gradient flex flex-row justify-between p-12 fixed top-0 left-0 right-0 z-10 h-[136px] "> */}
      <div className={`lg:min-w-[1080px] xl:min-w-[1280px] box-border overflow-hidden flex flex-row flex-wrap justify-between w-full p-12 fixed top-0 left-0 right-0 z-40 h-[136px] ${showBackground ? 'test-gradient backdrop-blur-sm ' : ''}  `}>
        <h1 className={`font-font2 text-4xl font-bold  ${getTextClass()} cursor-pointer`}><Link to="/">CulinaryCrest</Link></h1>
        <div className="flex items-center">
          <ul className={`flex flex-row space-x-14 text-xl	font-bold font-font2  ${getTextClass()}`}>
            <li className='cursor-pointer sm:hidden xl:block' >
              <Link to="/">Home</Link>
            </li>
            <li className='cursor-pointer' >
              <Link to="/about">About</Link>
            </li>
            <li className='cursor-pointer' >
              <Link to="/#allrecipe-section">All Recipes</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar