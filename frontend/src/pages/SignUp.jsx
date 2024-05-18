/* eslint-disable no-unused-vars */
import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import axios from "axios";
import { BASE_APIURL } from "../constants/ApiUrl";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const singUpRequest = async() =>{
    const response = await axios.post(`${BASE_APIURL}/users/signup`,{
      userName,firstName,lastName,password
    })
    localStorage.setItem("token",response.data.token)
  }

  return (
    <div className="flex bg-slate-200 h-screen justify-center">
      <div className="flex flex-col justify-center">
        <div className="p-3 text-center h-max w-96 rounded-lg bg-slate-300 shadow-md">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create your account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"First Name"}
            placeholder={"Enter your Firstname"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label={"Last Name"}
            placeholder={"Enter your LastName"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label={"Email"}
            placeholder={"Enter your Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder={"Enter your password"}
          />
          <Button onClick={singUpRequest} label={"Sign Up"} />
          <BottomWarning
            label={"Already have an account,"}
            buttonText={"Login"}
            to={"/login"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
