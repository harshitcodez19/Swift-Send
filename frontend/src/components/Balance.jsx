import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_APIURL } from "../constants/ApiUrl";
import { Link } from "react-router-dom";

const Balance = () => {
  const [balance, setBalance] = useState("");
  const jwtToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`${BASE_APIURL}/account/balance`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.log("Error while fetching the balance", error);
      }
    };
    if (jwtToken) {
      fetchBalance();
    }
  }, [jwtToken]);

  return jwtToken ? (
    <div className="font-bold text-2xl text-slate-800 px-1">
      Balance: {balance}
    </div>
  ) : (
    <div className="font-semibold text-2xl text-slate-800 px-1">
      No balance found, please{" "}
      <Link
        className="font-bold underline cursor-pointer hover:text-blue-600"
        to="/login"
      >
        Login
      </Link>
    </div>
  );
};

export default Balance;
