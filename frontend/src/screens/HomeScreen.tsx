import { Row,Col } from 'react-bootstrap'
import {Product as ProductType} from '../types/HomeScreen'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'

const HomeScreen = () => {
  const {data: products, isLoading, error} = useGetProductsQuery()

  return (
    <>
      {isLoading ? <h2>Loading......</h2> : error ? <h2>Please Try Again</h2> : 
        <>
          <h1>Latest Products</h1>
          <Row>
              { products?.map((product: ProductType) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product productInfo={product}/>
                  </Col>
              ))
              }
          </Row>
        </>
      }
    </>
  )
}

export default HomeScreen