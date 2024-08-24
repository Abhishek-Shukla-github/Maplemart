import { Row,Col } from 'react-bootstrap'
import products from '../products'
import {Product as ProductType} from '../types/HomeScreen'
import Product from '../components/Product'

const HomeScreen = () => {

  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            { products.map((product: ProductType) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product productInfo={product}/>
                </Col>
            ))
            }
        </Row>
    </>
  )
}

export default HomeScreen