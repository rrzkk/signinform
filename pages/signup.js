import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import React from "react";
import Link from "next/link";

import Pageright from "./components/pageright";
import * as constant from "../contants/contant";

export default function Signup() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    userType: "",
    password: "",
    showPassword: false,
    nameTest: false,
    emailTest: false,
    passwordTest: false
  });


  const handleUsername = (event) => {
    setValues({ ...values, name: event.target.value, nameTest:true });
  };
  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value,emailTest:true });
  };
  const handleUserType = (event) => {
    setValues({ ...values, userType: event.target.value });
  };
  const handlePassword = (event) => {
    setValues({ ...values, password: event.target.value,passwordTest:true });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let emailFormat = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  let emailError = (!emailFormat.test(values.email))&&values.emailTest;
  let nameError=(values.name.length<4||values.name.length>20)&&values.nameTest;
  let passworError=(values.password.length<8||values.password.length>20)&&values.passwordTest;
  return (
    <div className="container">
      <div className="pageleft">
        <div className="inputform">
          <h2>Let's set up your account</h2>
          <p>
            Already have an account?
            <Link href="/login">
              <a> log in</a>
            </Link>
          </p>
          <form>
            <TextField
              style={{ marginBottom: "20px" }}
              label="Your name"
              variant="outlined"
              value={values.name}
              onChange={handleUsername}
              helperText={nameError ? "Name cannot be too short or too long" : ""}
              error={nameError}
            />
            <TextField
              style={{ marginBottom: "20px" }}
              label="Email address"
              value={values.email}
              variant="outlined"
              onChange={handleEmail}
              name="email"
              helperText={emailError ? "Please enter a valid email address" : ""}
              error={emailError}
            />
            <TextField
              style={{ marginBottom: "20px" }}
              select
              label="I would describe my user type as"
              variant="outlined"
              value={values.userType}
              onChange={handleUserType}
            >
              {constant.USERTYPE.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                
                label="Password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handlePassword}
                error={passworError}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
              <p className="notice">Miminum 8 characters</p>
            </FormControl>
          </form>
          <p>
            By clicking the "Next" button, you agree to creating a free account,
            and to
            <a> Terms of Service </a>
            and
            <a> Privacy Policy</a>.
          </p>
        </div>
      </div>
      <Pageright />
    </div>
  );
}
