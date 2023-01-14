import "./prodect.css"
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { fetchProdects } from "../reduxtoolkits/slice/prodect-slice";
import { addcart } from "../reduxtoolkits/slice/cart-slice";
function Prodects() {
// start Redux
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProdects())
  }, [])
  // End Redux
  return (
    <Container className="py-5" >
      <Row className="py-5">
        {products.map((prodect) => (
          <Col key={prodect.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={prodect.images} />
                <Card.Body>
                <Card.Title>{prodect.title}</Card.Title>
                  <Card.Text>
                  {prodect.description.slice(0,90)}
                  </Card.Text>
                  <Card.Text>
                  {prodect.price}$
                  </Card.Text>
              <Button variant="primary" onClick={()=>dispatch(addcart(prodect))}>Add To Cart</Button>
              </Card.Body>
            </Card>        
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Prodects