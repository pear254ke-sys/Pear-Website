import "./carousel.css"
import React from 'react';
import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import {reviewData} from "../../utils/data.js"
function useWindowSize() {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
  }
function Reviews_Carousel(){
  const reviews=reviewData.map((review)=>{
return <Item name={review.name} heading={review.heading} text={review.text} image={review.image}/>
  })
    const width = useWindowSize();
    const percentage = width < 768 ? 80 : width < 1024 ? 45 : 25;
    return (<Carousel dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={3000} emulateTouch={true} showStatus={false} stopOnHover={false} centerMode={true}
        centerSlidePercentage={percentage} showIndicators={false} showThumbs={false}
    >
 {reviews}
</Carousel>)
}
function Item(props)
{
    return(
       
    <section className="review-card">
    <article className="image-container">
      <img src={props.image} alt="User Photo" className="profile-img"/>
    </article>
    <h3 className="heading">{props.name}</h3>
    <p className="review-head">{props.heading}</p>
    <p className="review-text">
   {props.text}
    </p>
  </section>
  
    )
}
export default Reviews_Carousel