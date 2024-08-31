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
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const [productInfoState, setProductInfoState] = useState<ProductType | null>(null)

  useEffect(() => {
    const fetchProductInfo = async () => {
      const {data}:{data:ProductType} = await axios.get(`/api/products/${productId}`)
      setProductInfoState(data)
    }

    fetchProductInfo()
  },[])

  if (!productInfoState) {
    // Render a loading state or nothing while the data is being fetched
    return <div>Loading...</div>;
  }

  // const product: ProductType = products.find(p => p._id === productId)!; 

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
        <>
          <Row>
            <Col md={6}>
              <Image src={productInfoState?.image} alt={productInfoState.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{productInfoState.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={productInfoState.rating}
                    text={`${productInfoState.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${productInfoState.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {productInfoState.description}
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
                        <strong>${productInfoState.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {productInfoState.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      className='btn-block'
                      type='button'
                      disabled={productInfoState.countInStock === 0}
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
    </>
  );
};

export default ProductScreen;
