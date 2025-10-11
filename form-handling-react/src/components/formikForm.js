// src/components/formikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // **Formik integration**
import * as Yup from 'yup'; // **Yup installed/integrated**

// **Yup validation schema**
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be 3 characters or more')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters or more')
    .required('Password is required'),
});

function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    // Simulate API submission
    console.log('Formik Form Data Submitted:', values);

    setTimeout(() => {
      setStatus({ success: 'Registration successful! (Formik)' });
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Formik Registration Form</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} // **Formik validation logic**
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
            {status?.success && <p style={{ color: 'green' }}>{status.success}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;