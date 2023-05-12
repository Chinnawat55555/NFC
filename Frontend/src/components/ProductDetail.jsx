import { Button } from "rsuite";
import { useParams } from "react-router-dom";
import { productList } from "./mockData";


const ProductDetail = () => {
    const {id} = useParams();

    const [productListDetial] = productList.filter((item) => {return item.id == id}); 

    console.log(productListDetial);
    return(
        <>
        <h1>Name: {productListDetial.name}</h1>
        <h2 className='inline-block'>Price:&nbsp;</h2>
        {!productListDetial.discountPrice && <h2 className='inline-block'>฿{productListDetial.price}</h2>}
        {productListDetial.discountPrice && <h2 className='inline-block line-through text-red-500'>฿{productListDetial.price}</h2>} 
        {productListDetial.discountPrice && <h2 className='inline-block'>&nbsp;฿{productListDetial.discountPrice}</h2>}
        <h2>Remain Amount: 20</h2>
        <h2>{productListDetial.detial}</h2>
        <Button className="bg-green-300 text-white mx-2">Add to Cart</Button>
        <Button className="bg-red-300 text-white">Add to Favorite</Button>
        </>
    );
};

export default ProductDetail;