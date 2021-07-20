import React from "react";
import { useForm } from "react-hook-form";
import LoginForm from "../components/LoginForm";


export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <LoginForm></LoginForm>
  );
}