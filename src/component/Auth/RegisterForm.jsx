import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../State/Authentication/Action";
const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};
export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(registerUser({ userData: values, navigate }));
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          {/* Email */}
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>
          {/* Password */}
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>
          {/* Full name */}
          <Field
            as={TextField}
            name="fullName"
            label="Fullname"
            fullWidth
            variant="outlined"
            margin="normal"
          ></Field>
          {/* Form control */}
          <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
            <InputLabel id="slRole">Role</InputLabel>
            <Field
              as={Select}
              margin="normal"
              labelId="slRole"
              id="slRole"
              label="Role"
              name="role"
            >
              <MenuItem value={"ROLE_CUSTOMER"}>CUSTOMER</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
                RESTAURANT OWNER
              </MenuItem>
            </Field>
          </FormControl>
          {/* Register button */}
          <Button
            sx={{ mt: 2, padding: 1 }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Register
          </Button>
        </Form>
      </Formik>
      {/* Login */}
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Have already an account?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
};
