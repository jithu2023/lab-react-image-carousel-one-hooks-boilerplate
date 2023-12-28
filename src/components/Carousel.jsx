import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
    const[state, setState] = useState(0)

    const prev = () => {
        setState(state !== 0 ? state - 1 : 2);
    }  

    const next = () => {
        setState(state !== images.length - 1 ? state + 1 : 0);
    }
    return(
        <>
        <div className="box">
        <h1>{images[state].title}</h1>
        <h2>{images[state].subtitle}</h2>
        <div className="container">
        <ArrowBackIosIcon className="left" fontSize='large' onClick={prev}/>

        <div><img src={images[state].img} /></div>
        <ArrowForwardIosIcon className="left" fontSize='large' onClick={next}/>
        </div>
        </div>
        </>
    )

}

export default Carousel;