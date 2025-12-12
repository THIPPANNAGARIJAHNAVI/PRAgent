import React from "react";
import * as Yup from "yup";

// Validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h2>Login</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Login data:", values);
          setTimeout(() => {
            setSubmitting(false);
            alert("Logged in!");
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Email Field */}
            <div style={{ marginBottom: "15px" }}>
              <label>Email</label><br />
              <Field
                type="email"
                name="email"
                placeholder="Enter email"
                style={{ width: "100%", padding: "8px" }}
              />
              <div style={{ color: "red", fontSize: "0.8rem" }}>
                <ErrorMessage name="email" />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: "15px" }}>
              <label>Password</label><br />
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                style={{ width: "100%", padding: "8px" }}
              />
              <div style={{ color: "red", fontSize: "0.8rem" }}>
                <ErrorMessage name="password" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "10px",
                background: "blue",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
      
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
