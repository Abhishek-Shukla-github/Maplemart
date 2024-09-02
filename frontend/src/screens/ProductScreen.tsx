import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
  } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Product as ProductType } from '../types/HomeScreen';
import { useGetProductDetailQuery } from '../slices/productsApiSlice';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const {data, isLoading, error} = useGetProductDetailQuery(productId) 

  const productDetails = data as ProductType
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {isLoading ? <h2>Loading </h2> : error ? <h2>Try Again....</h2> : 
        <>
          <Row>
            <Col md={6}>
              <Image src={productDetails?.image} alt={productDetails.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{productDetails.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={productDetails.rating}
                    text={`${productDetails.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${productDetails.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {productDetails.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${productDetails.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {productDetails.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      className='btn-block'
                      type='button'
                      disabled={productDetails.countInStock === 0}
                    //   onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className='review'>
            <Col md={6}>
              <h2>Reviews</h2>
            </Col>
          </Row>
        </>
      }
    </>
  );
};

export default ProductScreen;
