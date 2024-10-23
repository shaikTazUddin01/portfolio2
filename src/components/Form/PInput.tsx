import { Input } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  required?: boolean;
  name: string;
  label: string;
  type?: string;
  defaultvalue?: any;
  variant?: "bordered" | "flat" | "faded" | "underlined";
}

const PInput = ({
  name,
  label,
  type = "text",
  variant = "bordered",
  required = false,
  defaultvalue,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // console.log(errors);

  return (
    <Input
      label={label}
      type={type}
      variant={variant}
      {...register(name)}
      defaultValue={defaultvalue}
      errorMessage={errors[name]?.message as string | undefined}
      isInvalid={!!errors[name]}
      isRequired={required}
    />
  );
};

export default PInput;
