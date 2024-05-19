/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";
import axios from "axios";
import { BASE_APIURL } from "../constants/ApiUrl";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate("");
  const transferMoney = async () => {
    try {
      const response = await axios.post(
        `${BASE_APIURL}/account/transfer`,
        {
          to: id,
          amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      toast.success("Payment Completed Succesfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setAmount(0);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error transferring money:", error);
    }
  };
  return (
    <div className="flex bg-slate-300 justify-center h-screen">
      <div className="flex flex-col justify-center">
        <div className="p-3 text-center h-max w-96 rounded-md bg-slate-200 shadow-md">
          <Heading label={"Transfer Money"} />
          <div className="flex flex-row justify-start align-middle mt-10 space-x-2 px-2 mb-2">
            <div className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <div className="text-slate-800 font-semibold text-xl">{name}</div>
          </div>
          <InputBox
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            label={"Amount (in Rs)"}
            placeholder={"Enter amount"}
          />
          <button
            onClick={transferMoney}
            className="bg-green-500 w-full rounded-md mx-auto mt-2 py-1 border text-slate-200 font-bold mb-2"
          >
            Send Money
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
