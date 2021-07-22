import React from 'react';
import {  Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  return (
    <Form>
      <Row form>
        
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        
      </Row>
        
      <Button>Sign in</Button>
    </Form>
  );
}

export default Login;