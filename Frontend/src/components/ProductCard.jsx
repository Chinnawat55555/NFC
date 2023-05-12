import PropTypes from 'prop-types';
import { Panel } from "rsuite";
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const {name,image,detial,id,price,discountPrice} = props;
    return(
        <Link to={`/productDetialPage/${id}`} >
            <div>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }} className="m-2 hover:bg-gray-500 hover:text-white text-black">
                    <img src={image} height="240"/>
                        <Panel className='text-center'>
                            <h1>{name}</h1>
                            <p>
                                {detial}
                            </p>
                            {!discountPrice && <h2 className='inline-block'>฿{price}</h2>}
                            {discountPrice && <h2 className='inline-block line-through text-red-500'>฿{price}</h2>} 
                            {discountPrice && <h2 className='inline-block'>&nbsp;฿{discountPrice}</h2>}
                        </Panel>
                </Panel>
            </div>
        </Link>
    );
};

ProductCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    detial: PropTypes.string,
    price: PropTypes.number,
    discountPrice: PropTypes.number,
};

export default ProductCard;