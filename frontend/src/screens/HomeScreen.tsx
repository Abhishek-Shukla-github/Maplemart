import { Row,Col } from 'react-bootstrap'
import {Product as ProductType} from '../types/HomeScreen'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
  const {data, isLoading, error} = useGetProductsQuery({keyword:"",pageNumber: 0})

  return (
    <>
      {isLoading ? <Loader /> : error ? <Message><h2>Please Try Again</h2></Message> : 
        <>
          <h1>Latest Products</h1>
          <Row>
              { data.products?.map((product: ProductType) => (
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