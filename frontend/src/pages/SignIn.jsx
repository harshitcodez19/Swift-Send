import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { BASE_APIURL } from "../constants/ApiUrl";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginRequest = async () => {
    try {
      const response = await axios.post(`${BASE_APIURL}/users/login`, {
        userName,
        password,
      });
      console.log("Login Request ka Response", response);
      localStorage.setItem("token",response.data.token)
      setUsername("")
      setPassword("")
      navigate("/dashboard");
    } catch (error) {
      console.log("Error!! unable to login");
    }
  };
  return (
    <div className="flex bg-slate-200 h-screen justify-center">
      <div className=" flex flex-col justify-center">
        <div className="p-3 text-center h-max w-96 rounded-lg bg-slate-300 shadow-md">
          <Heading label={"Sign In"}></Heading>
          <SubHeading label={"Enter your credentials to login "}></SubHeading>
          <InputBox
            label={"Email"}
            placeholder={"Enter your Email"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></InputBox>
          <InputBox
            label={"Password"}
            placeholder={"Enter your password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></InputBox>
          <Button onClick={loginRequest} label={"Sign In"} />
          <BottomWarning
            label={"Don't have an account?, "}
            buttonText={" Sign Up"}
            to={"/signup"}
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
