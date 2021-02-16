import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/Input";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import React from "react";
import Link from "next/link";
import Pageright from "./components/pageright";
import * as constant from "../contants/contant";



export default function Signup() {
  const [values, setValues] = React.useState({
    amount: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
            />
            <TextField
              style={{ marginBottom: "20px" }}
              label="Email address"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "20px" }}
              select
              label="I would describe my user type as"
              variant="outlined"
            >
              {constant.USERTYPE.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControl
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                style={{ marginBottom: "20px" }}
                label="Password"
                type={values.showPassword ? "text" : "password"}
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
              />
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
