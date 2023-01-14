import { Button, Container, Image, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { clearcart, deletefromcart } from "../reduxtoolkits/slice/cart-slice";


function Cart() {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);
  const TotalPrice = cart.reduce((acc, prodect) => {
    acc += prodect.price * prodect.quantity;
    return acc
  },0)
  return (
    <Container>
      <h1 className="py-5">Welcome To Cart</h1>
      <Button variant="primary" className="mb-3" onClick={() => dispatch(clearcart())}>Clear Cart</Button>
      <h3>TotalPrice: {TotalPrice.toFixed(2)}$</h3>
         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>action</th>
        </tr>
      </thead>
        <tbody>
          {cart.map((prodect) => (
        <tr key={prodect.id}>
          <td>{prodect.id}</td>
          <td>{prodect.title}</td>
          <td><Image src={prodect.images} alt={prodect.titel} style={{width:"90px",height:"90px"}} /></td>
          <td>{prodect.price}$</td>
          <td>{prodect.quantity}</td>
          <td>
            <Button variant="danger" onClick={() => dispatch(deletefromcart(prodect))}>Delete</Button>
          </td>
        </tr>
          )
          
          )}
      </tbody>
    </Table>
   </Container>
  )
}

export default Cart