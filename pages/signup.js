import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import React, { useEffect } from "react";
import Link from "next/link";

import Pageright from "./components/pageright";
import * as constant from "../contants/contant";

import { connect } from 'react-redux';
import {addUser} from '../redux/ActionCreators'


const mapStateToProps = state => {
  return {
    name: state.signup.name,
    email: state.signup.email,
    userType: state.signup.userType,
    password: state.signup.password
  }
}

const mapDispatchToProps = dispatch => ({
  addUser:(user)=>dispatch(addUser(user))
})

function Signup(props) {
  const [values, setValues] = React.useState({
    name: props.name,
    email: props.email,
    userType: props.userType,
    password: props.password,
    showPassword: false,
    showEmail:true,
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
  const handleClickShowEmail=()=>{
    setValues({ ...values, showEmail: !values.showEmail });
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let emailFormat = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  let emailError = (!emailFormat.test(values.email))&&values.emailTest;
  let nameError=(values.name.length<4||values.name.length>20)&&values.nameTest;
  let passworError=(values.password.length<8||values.password.length>20)&&values.passwordTest;
  let readyToSubmit=values.emailTest&&values.nameTest&&values.passwordTest&&!emailError && !nameError && !passworError;
  
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
            
             <FormControl variant="outlined" style={{ marginBottom: "20px" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Email address
              </InputLabel>
              <OutlinedInput
                label="Email address"
                value={values.email}
                type={values.showEmail ? "text" : "password"}
                onChange={handleEmail}
                name="email"
                error={emailError}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowEmail}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showEmail ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
              {emailError&&<FormHelperText error={emailError}>PLease enter a valid email</FormHelperText>}
            </FormControl>
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
              <FormHelperText error={passworError}>Miminum 8 characters</FormHelperText>
            </FormControl>
            <Button style={readyToSubmit?constant.PRIMARYBUTTON:constant.DISABLEBUTTON} 
            disabled={!readyToSubmit}
            onClick={()=>props.addUser([values.name,values.email,values.userType,values.password])}>Next</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
