// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import mobileImgUrl from '../assets/img.mp4'
const Vedio = () => {
    const vedioRef = useRef(null)
    const enter = () => {
        vedioRef.current.play()
    }
    const leave = () => {
        vedioRef.current.pause()
    }
    return (
        <>
            <div>

                <video ref={vedioRef} src={mobileImgUrl} onMouseEnter={enter} onMouseLeave={leave}></video>

            </div>
        </>


    );
};

export default Vedio;
