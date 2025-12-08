import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Step 1: Define Zod schema
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, "You must be at least 18")
    .max(120, "Invalid age"),
});

const FormExample = () => {
  // Step 2: Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
    },
  });

  // Step 3: Submit handler
  const onSubmit = (values) => {
    console.log("Form submitted:", values);
    alert(`Hello ${values.name}, your email is ${values.email}`);
    reset();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>React Hook Form + Zod Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input type="text" {...register("name")} />
          {errors.name && <div style={{ color: "red" }}>{errors.name.message}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input type="email" {...register("email")} />
          {errors.email && <div style={{ color: "red" }}>{errors.email.message}</div>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="age">Age:</label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && <div style={{ color: "red" }}>{errors.age.message}</div>}
        </div>

        <button type="submit">Submit</button>
  
    </div>
  );
};

export default FormExample;
