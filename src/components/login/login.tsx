import React from "react";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./login.scss";
import CustomButton from "../common/custom-button";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="wrapper-login">
      <form onSubmit={onSubmit} className="container-login">
        <h2>Авторизация</h2>
        <div className="container-input">
          <label>Логин:</label>
          <TextField
            fullWidth
            margin="dense"
            name="email"
            variant="outlined"
            error={!!errors.email}
            inputRef={register({
              required: "Поле не должно быть пустым",
              pattern: {
                value: /S+@S+.S+/,
                message:
                  "Введенное значение не соответствует формату электронной почты",
              },
            })}
            InputProps={{
              className: "textField_input",
            }}
            type="text"
          />
          {errors.email && (
            <span role="alert" className="error-submit">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="container-input">
          <label>Пароль:</label>
          <TextField
            fullWidth
            margin="dense"
            name="password"
            variant="outlined"
            error={!!errors.password}
            inputRef={register({
              required: "Поле не должно быть пустым",
            })}
            InputProps={{
              className: "textField_input",
            }}
            type="password"
          />
          {errors.password && (
            <span role="alert" className="error-submit">
              {errors.password.message}
            </span>
          )}
        </div>
        <CustomButton type="submit" text="Войти" className="btn-submit" />
      </form>
    </div>
  );
};

export default Login;
