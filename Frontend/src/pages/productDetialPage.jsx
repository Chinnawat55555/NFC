import { useState } from "react";
import { Col, Carousel } from "rsuite";
import TopBar from './../components/TopBar';
import ProductDetail from "../components/ProductDetail";

const ProductDetialPage = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    return(
        <>
        <TopBar />
        <div className="flex flew-wrap">
            <Col className="w-2/3 my-10 ml-20">
                <Carousel
                    className="custom-slider m-1 mt-5 ml-3 rounded shadow-lg"
                    activeIndex={activeIndex}
                    onSelect={index => {
                        setActiveIndex(index);
                    }}
                    >
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
                </Carousel>
            </Col>
            <Col className="w-1/3 my-10 mx-5">
                <ProductDetail />
            </Col>
        </div>
        </>
    );
};

export default ProductDetialPage;