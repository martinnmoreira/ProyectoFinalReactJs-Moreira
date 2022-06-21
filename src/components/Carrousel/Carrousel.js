import Carousel from 'react-bootstrap/Carousel'

export default function Carrousel (){
    return(
        <Carousel className='styleCarousel'>
            <Carousel.Item>
                <img
                className="d-block w-100 slideImages"
                src="img/logo.png"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slideImages"
                src="img/mochila_formal.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slideImages"
                src="img/lapicera_parker_jotter_inox.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}