import axios from 'axios'
import { Row,Col } from 'react-bootstrap'
// import products from '../products'
import {Product as ProductType} from '../types/HomeScreen'
import Product from '../components/Product'
import { useEffect,useState } from 'react'


const HomeScreen = () => {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const {data}:{data:ProductType[]} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts();
    
  },[])

  return (
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
  )
}

export default HomeScreen