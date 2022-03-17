import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";

interface IInputProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
}

export const Input: FC<IInputProps> = ({ name, label, placeholder, type }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <label htmlFor={name}>{label}</label>
          <input type={type} id={name} placeholder={placeholder} {...field} />
        </>
      )}
    />
  );
};
