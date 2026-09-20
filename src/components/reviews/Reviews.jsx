import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { getReviewData } from "../../Data_File/dataAbstract.jsx";
import Title from "../title/Title.jsx";


import "./reviews.css";

function Reviews_Carousel() {
  const  {reviewData,homePageReviewsHeading}  = getReviewData();
 
  const [emblaRef] = useEmblaCarousel(
    { loop: true }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div>
      <Title title={homePageReviewsHeading} />
      

      <div className="embla" ref={emblaRef}>

        <div className="embla__container">
          {reviewData.map((review, index) => (
    
            <div className="embla__slide" key={index}>
              <Item 
                name={review.name} 
                heading={review.heading} 
                text={review.text} 
                image={review.image} 
                alt={review.alt} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <section className="review-card">
      <article className="image-container">
        <img src={props.image} alt={props.alt} className="profile-img"/>
      </article>
      <p className="heading">{props.name}</p>
      <p className="review-head">{props.heading}</p>
      <p className="review-text">{props.text}</p>
    </section>
  );
}

export default Reviews_Carousel;
