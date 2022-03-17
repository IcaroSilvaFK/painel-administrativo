import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup
    .string()
    .min(4, "O campo deve conter no minimo 4 caracteres")
    .required("O campo é obrogatorio"),
  description: yup
    .string()
    .min(4, "O campo deve conter no minimo 4 caracteres")
    .required("O campo  é obrigatorio"),
});
