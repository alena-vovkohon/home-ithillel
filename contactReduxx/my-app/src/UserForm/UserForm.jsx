import React from 'react'
import './UserForm.css'

import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

let registrationSchema = yup.object().shape({
    firstName: yup
    .string()
    .required()
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Must be only letters"),
    userName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
    .string()
    .required()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Phone number is not valid"
    )
    .min(12, "Must be exactly 12 digits")
    .max(12, "Must be exactly 12 digits"),
});

const UserForm = ({ createNewUser, cancelUser}) => {
    return (
      <Formik
        initialValues={{
          firstName: "",
          userName: "",
          phone: "",
          email: "",
        }}
      
        validationSchema={registrationSchema}
        validateOnBlur
        onSubmit={(e) => {
          createNewUser(e)
          console.log("Submit", e);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
              
          <Form className="UserForm">
            <input
              id='name'
              type='text'
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Jim Smit' />
            <div className="ErrorMessage">
              <ErrorMessage name={'name'} />
            </div>
            <input
              id='userName'
              type='text'
              name='userName'
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Jim' />
            <div className="ErrorMessage">
              <ErrorMessage name='userName' />
            </div>
                
            <input
              id='phone'
              type='tel'
              name='phone'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='380501112233' />
            <div className="ErrorMessage">
              <ErrorMessage name='phone' />
            </div>
         
            <input
              id='email'
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='jim@gmail.com' />
            <div className="ErrorMessage">
              <ErrorMessage name={'email'} />
            </div>
            <div className="Button">
              <button type={"submit"}>Add</button>
              <button onClick={cancelUser}>Cancel</button>
            </div>
          </Form> 
        )}  
      </Formik>    
  )
}

export default UserForm;