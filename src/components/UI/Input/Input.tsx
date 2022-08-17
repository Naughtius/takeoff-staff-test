import { useField } from "formik";
import { FC } from "react";
// import css from "./Input.module.scss";
import { Form } from "react-bootstrap";
import { InputProps } from "./Input.props";

const Input: FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  name,
  className,
}) => {
  const [field] = useField({ name, type });

  return (
    <Form.Group className={className} controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} {...field} />
    </Form.Group>
  );
};

export default Input;
