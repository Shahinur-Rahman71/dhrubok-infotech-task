import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/form.css';
import {DashboardLayout} from '../components/Layout';
import { useDispatch } from "react-redux";
import { addInfoAsync } from "../store/info";

const FormPage = () => {
  const dispatch = useDispatch();
  const [inputField,setInputField] = useState({
    name: '',
    email: '',
    gender: '',
    phone: ''
  });

  const inputHandler = (e) => {
    setInputField({...inputField,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(addInfoAsync(inputField));
    alert('data submitted')
    setInputField({name: '',email: '', gender: '', phone: ''})
  }

  return (
    <DashboardLayout>
      <Form onSubmit={handleSubmit} className='body'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={inputHandler} type="text" name='name' value={inputField.name} placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={inputHandler} type="email" name='email' value={inputField.email} placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
          <Form.Select value={inputField.gender} name='gender' onChange={inputHandler}>
            <option value={''}>Select your gender</option>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
            <option value={'other'}>Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control onChange={inputHandler} type="number" name='phone' value={inputField.phone} placeholder="Enter your phone no." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </DashboardLayout>
  )
}

export default FormPage;