import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from "semantic-ui-react";


const MyCarousel =()=> {
    return (
    <Container className={"Carousel-head"}>
        <Carousel showThumbs={false}  autoPlay={true} infiniteLoop={true}>
            <div>
                <img src="assets/the-telecom-industry-featured.jpg" style={{borderRadius: '10px'}} alt={"the-telecom-industry-featured"}/>
            </div>
            {/* <div>
                <img src="assets/giphy.webp" style={{width:"400px", borderRadius: '10px'}} alt={"wonder woman"}/>
            </div> */}
            <div>
                <img src="assets/GXI-telecom.jpg"style={{borderRadius: '10px'}} alt={"GXI-telecom"}/>
            </div>
        </Carousel>
    </Container>
    );
};

export default MyCarousel;
