import "./carousel.css"
import React from 'react';
import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import { getCurrentTextData,getStaticData } from "../../Data_File/dataAbstract"
import Title from "../title/Title.jsx";
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
  const {reviewData}=getStaticData()
  const homePageReviewsHeading=getCurrentTextData("pageText","homePageReviewsHeading")
  const reviews=reviewData.map((review)=>{
return <Item name={review.name} heading={review.heading} text={review.text} image={review.image} alt={review.alt}/>
  })
    const width = useWindowSize();
    const percentage = width < 768 ? 100 : width < 1024 ? 45 : 30;
    return (<div>
       <Title title={homePageReviewsHeading} />
      <Carousel dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={3000} emulateTouch={true} showStatus={false} stopOnHover={false} centerMode={true}
      centerSlidePercentage={percentage} showIndicators={false} showThumbs={false}
  >
{reviews}
</Carousel></div>)
}
function Item(props)
{
    return(
       
    <section className="review-card">
    <article className="image-container">
      <img src={props.image} alt={props.alt} className="profile-img"/>
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