import {Card, Button, Form } from 'react-bootstrap'

const Signup = () => {
  return (
   <Card className='m-5 p-5'>
    <Form>
        <h2>Create an Acount</h2>
        <Form.Group>
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.COntrol type="email"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password"/>
        </Form.Group>
        <Form.Group>
             <Form.Label>Repeat Password</Form.Label>
             <Form.Control type="password"/>
            </Form.Group>
            <Form.Group>
             <Form.Check type="checkbox" Label= "I agree to all statements in Terms of service"/>

        </Form.Group>
        <Button varient="primary" type="submit">Sign Up</Button>
        <p>Already Have an Account? <a href="#">Login here</a></p>
    </Form>
   </Card>
  )
}

export default Signup
