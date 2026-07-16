import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { getCurrentTextData, getStaticData } from "../../Data_File/dataAbstract";
import Title from "../title/Title.jsx";

// Import your custom styling to handle layout and item sizing
import "./carousel.css";

function Reviews_Carousel() {
  const { reviewData } = getStaticData();
  const homePageReviewsHeading = getCurrentTextData("pageText", "homePageReviewsHeading");

  // Initialize Embla with loop configuration and the Autoplay plugin
  const [emblaRef] = useEmblaCarousel(
    { loop: true }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div>
      <Title title={homePageReviewsHeading} />
      
      {/* Embla Viewport */}
      <div className="embla" ref={emblaRef}>
        {/* Embla Container */}
        <div className="embla__container">
          {reviewData.map((review, index) => (
            /* Embla Slide Wrapper */
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
