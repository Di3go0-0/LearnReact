import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "../CustomInput/CustomInput";
import "./CustomForm.css";
import { FormValues, schema } from "../../Models";

const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur", // El mode onBlur valida los campos cuando el usuario sale del input
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        name="name"
        control={control}
        label="Name"
        type="text"
        error={errors.name}
      />
      <InputForm
        name="email"
        control={control}
        label="Email"
        type="email"
        error={errors.email}
      />
      <InputForm
        name="password"
        control={control}
        label="Password"
        type="password"
        error={errors.password}
      />
      <InputForm
        name="confirmPassword"
        control={control}
        label="Confim Password"
        type="password"
        error={errors.confirmPassword}
      />
      <button type="submit" className="Button-submit">
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
