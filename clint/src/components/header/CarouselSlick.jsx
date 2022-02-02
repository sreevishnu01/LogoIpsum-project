import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Slider from "react-slick";

function CarouselSlick() {
    const settings = {
        className: "carousel",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "160px",
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        customPaging: i => {
            return (
                <span>&nbsp; </span>
            )
        }
    };
    return <div>
        <Container fluid className='p-0'>
            <Slider {...settings}>
                <Card className="border-none text-white">
                    <Card.Img src="./images/Rectangle.png" alt="Card image" className='carousel_img' />
                    <Card.ImgOverlay className="carousel-cap">
                        <p>From students to senior citizens</p>
                        <p>this web portal of</p>
                        <h1> "Products and Classifieds”</h1>
                        <p>provides it all</p>
                    </Card.ImgOverlay>
                </Card>
                <Card className="border-none text-white">
                    <Card.Img src="./images/placeholder.png" alt="Card image" className='carousel_img' />
                    <Card.ImgOverlay className="carousel-cap">
                        <p>From students to senior citizens</p>
                        <p>this web portal of</p>
                        <h1> "Products and Classifieds”</h1>
                        <p>provides it all</p>
                    </Card.ImgOverlay>
                </Card>
                <Card className="border-none text-white">
                    <Card.Img src="./images/placeholder1.png" alt="Card image" className='carousel_img' />
                    <Card.ImgOverlay className="carousel-cap">
                        <p>From students to senior citizens</p>
                        <p>this web portal of</p>
                        <h1> "Products and Classifieds”</h1>
                        <p>provides it all</p>
                    </Card.ImgOverlay>
                </Card>
            </Slider>
        </Container>

    </div>;
}

export default CarouselSlick;
