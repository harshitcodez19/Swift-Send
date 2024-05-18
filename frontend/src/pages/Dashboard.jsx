/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import InputBox from "../components/InputBox";
import UserList from "../components/UserList";
import axios from "axios";
import { BASE_APIURL } from "../constants/ApiUrl";

const Dashboard = () => {
  return (
    <div className="p-10 bg-slate-200 h-screen ">
      <div className="bg-slate-300 flex flex-col rounded-md p-5">
        <AppBar />
        <Balance />
        <UserList />
      </div>
    </div>
  );
};

export default Dashboard;
