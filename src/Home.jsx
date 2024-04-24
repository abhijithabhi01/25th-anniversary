import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Marquee from './Marquee';
import ImageBox from './ImageBox';


function Home() {

  return (
    <>
<Marquee/>
<ImageBox/>


    </>
  )
}

export default Home