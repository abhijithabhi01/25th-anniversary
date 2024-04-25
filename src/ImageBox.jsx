import React from 'react'
import './imagebox.css'
import Carousel from 'react-bootstrap/Carousel';
import cimg from'./images/cartoon.png'
import pic1 from'./images/pic1.jpg'
import pic2 from'./images/pic2.jpg'
import pic3 from'./images/pic3.jpg'

function ImageBox() {
  return (
    <>
<div className='imageboxmain'>

<Carousel>


      <Carousel.Item>
       <img src={pic1} alt="" className='cimage'/>
      </Carousel.Item>
      <Carousel.Item>
       <img src={pic2} alt="" className='cimage'/>
      </Carousel.Item>
      <Carousel.Item>
       <img src={pic3} alt="" className='cimage'/>
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