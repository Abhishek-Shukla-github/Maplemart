import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Product as ProductType} from "../types/HomeScreen"
import Rating from './Rating';

type propType = {
  productInfo: ProductType
}

const Product = ({ productInfo} : propType) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${productInfo._id}`}>
        <Card.Img src={productInfo.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${productInfo._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{productInfo.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
            <Rating value={productInfo.rating} text={`${productInfo.numReviews} reviews`}/>
        </Card.Text>

        <Card.Text as='h3'>${productInfo.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
