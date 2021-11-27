import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { useState } from 'react'

function Carousels() {

    const randomImg = [
        {
            "image": "./images/Rectangle.png"
        }, {
            "image": "./images/placeholder.png"
        }

        , {
            "image": "./images/placeholder1.png"
        }

    ]
    // imagel: 'https://picsum.photos/1620/612',


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        // <>
        //     <Container>
        //         <div className="carousels">
        //             {randomImg.map((item, index) => (
        //                 <div key={index} className="carousel">
        //                     <img src={item.image} alt="aa" />
        //                     <p>From students to senior citizens
        //                         this web portal of
        //                         "Products and Classifieds”
        //                         provides it all</p>
        //                 </div>
        //             ))}

        //         </div>
        //     </Container>
        // </>

        <Container>
            <div >
                <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src="./images/Rectangle.png"
                            alt="First slide"
                        />
                        <Carousel.Caption className="carousel-cap">
                            <p>From students to senior citizens</p>
                            <p>this web portal of</p>
                            <h1> "Products and Classifieds”</h1>
                            <p>provides it all</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src="./images/placeholder.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption className="carousel-cap">
                            <h3>From students to senior citizens</h3>
                            <p>this web portal of</p>
                            <h3> "Products and Classifieds”</h3>
                            <p>provides it all</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src="./images/placeholder1.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="carousel-cap">
                            <h3>From students to senior citizens</h3>
                            <p>this web portal of</p>
                            <h3> "Products and Classifieds”</h3>
                            <p>provides it all</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>

    )
}

export default Carousels
