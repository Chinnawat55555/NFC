import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { Col } from 'rsuite';
import { productList } from './../components/mockData';
import ProductCard from "../components/ProductCard";

const ProductPage = () => {

    return (
        <div>
            <TopBar />
            <div  className="mt-2 flex-1">
                <Col>
                    <SideBar/>
                </Col>
                <Col className="grid grid-cols-4">
                    {productList.map((item)=>{
                        return(
                            <div key={item.id}>
                            <ProductCard
                                id={item.id}
                                name={item.name}
                                detial={item.detial}
                                image={item.image}
                                price={item.price}
                                discountPrice={item.discountPrice}
                            />
                            </div>
                        )
                    })}
                </Col>
            </div>
        </div>
    );
};

export default ProductPage;