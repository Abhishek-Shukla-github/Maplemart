import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear: number = new Date().getFullYear();
  
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <p>Maplemart &copy; {currentYear}</p>
                        <Link to={'https://abshukla.com'} target='_blank'><p>Built by Abhishek Shukla</p></Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer