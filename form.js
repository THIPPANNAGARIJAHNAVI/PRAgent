import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormExample = () => {
  // Step 1: Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    age: Yup.number()
      .min(18, "You must be at least 18")
      .max(120, "Invalid age")
      .required("Age is required"),
  });

  // Step 2: Initial Form Values
  const initialValues = {
    name: "",
    email: "",
    age: "",
  };

  // Step 3: Submit Handler
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
            {/* Name Field */}
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            {/* Age Field */}
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="age">Age:</label>
              <Field type="number" name="age" />
              <ErrorMessage
                name="age"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormExample;
