import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { useState } from 'react'

function Carousels() {

    const randomImg = {
        imagel: 'https://picsum.photos/1620/612',
        images: 'https://picsum.photos/1620/610',

    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <>
            <Container>
                <div className="carousel">
                    <img src="./images/Rectangle.png" alt="aa" />
                </div>
            </Container>
        </>

        // <Container>
        //     <div >
        //         <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
        //             <Carousel.Item>
        //                 <img
        //                     className="d-block w-100"
        //                     src="./images/Rectangle.png"
        //                     alt="First slide"
        //                 />
        //                 <Carousel.Caption>
        //                     <h3>From students to senior citizens</h3>
        //                     <p>this web portal of</p>
        //                     <h3> "Products and Classifieds”</h3>
        //                     <p>provides it all</p>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //             <Carousel.Item>
        //                 <img
        //                     className="d-block w-100"
        //                     src="./images/placeholder.png"
        //                     alt="Second slide"
        //                 />

        //                 <Carousel.Caption>
        //                     <h3>From students to senior citizens</h3>
        //                     <p>From students to senior citizens
        //                         this web portal of
        //                         "Products and Classifieds”
        //                         provides it all</p>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //             <Carousel.Item>
        //                 <img
        //                     className="d-block w-100"
        //                     src="./images/placeholder1.png"
        //                     alt="Third slide"
        //                 />

        //                 <Carousel.Caption>
        //                     <h3>Third slide label</h3>
        //                     <p>
        //                         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //                     </p>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //         </Carousel>
        //     </div>
        // </Container>

    )
}

export default Carousels
