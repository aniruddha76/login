import React from 'react';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import './login.css'

const Login = () => {
  return (
    <div className='cont' class="opacity-50">
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" maxlength="8" placeholder="Password" required />
                      <Form.Text className="text-muted">
                        8 characters, You better remember.
                      </Form.Text>
                    </Form.Group>
                    <div class="text-center">
                    <Button variant="primary" type="submit">Login</Button>
                    </div>
                    <div class="text-center">
                      <p><br />Not a member? <a href="#!">Register</a></p>
                    </div>

                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;