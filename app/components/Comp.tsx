"use client"
import './Comp.css'
import { useState } from 'react';
export default function Component() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const children = [
    //   <Component/>,
    //   <Component/>,
    //   <Component/>,
    // ];
    // const handleLeftClick = () => {
    //   if (currentIndex === 0) {
    //     setCurrentIndex(children.length - 1);
    //   } else {
    //     setCurrentIndex((prevIndex) => prevIndex - 1);
    //   }
    // };
    // const handleRightClick = () => {
    //   if (currentIndex === children.length - 1) {
    //     setCurrentIndex(0);
    //   } else {
    //     setCurrentIndex((prevIndex) => prevIndex + 1);
    //   }
    // };  
    return (

        <>
            <div className='m'>
                {/* <button className="carousel-left-button" onClick={handleLeftClick}>
                left
                </button>
                    <button className="carousel-right-button" onClick={handleRightClick}>
                    right
                    </button> */}
                <div className="main">
                    <div className="stack">
                        <div className="back">

                        </div>
                        <div className="backinner">

                        </div>
                        <div className="front">

                            <p>
                                11111
                            </p>
                            {/* {children[currentIndex]} */}
                        </div>

                    </div>
                    <div className="photo">
                        {/* <img src='icon.png/'/> */}
                    </div>
                </div>


            </div>
        </>
    )
}