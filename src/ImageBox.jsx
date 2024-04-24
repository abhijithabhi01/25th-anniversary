import React from 'react'
import './imagebox.css'
import Carousel from 'react-bootstrap/Carousel';
import cimg from'./images/cartoon.png'
function ImageBox() {
  return (
    <>
<div className='imageboxmain'>

<Carousel>
      <Carousel.Item>
       <img src={cimg} alt="" className='cimage'/>
      </Carousel.Item>

      <Carousel.Item>
       <img src={cimg} alt="" className='cimage'/>
      </Carousel.Item>
      <Carousel.Item>
       <img src={cimg} alt="" className='cimage'/>
      </Carousel.Item>


    </Carousel>

</div>

    </>
  )
}

export default ImageBox