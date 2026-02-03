import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Step 1: Define validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  age: Yup.number()
    .min(18, "You must be at least 18")
    .max(120, "Invalid age")
    .required("Age is required"),
});

export default function FormExample() {
  // Step 2: Form initial values
  const initialValues = {
    name: "",
    email: "",
    age: "",
  };

  // Step 3: Submit handler
  const onSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert(`Hello ${values.name}, your email is ${values.email}`);
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Formik + Yup Form Example</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="age">Age:</label>
              <Field type="number" name="age" />
              <ErrorMessage
                name="age"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
