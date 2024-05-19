/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_APIURL } from "../constants/ApiUrl";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

/* eslint-disable react/no-unknown-property */
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState([]);
  const jwtToken = localStorage.getItem("token");
  useEffect(() => {
    const handler = setTimeout(() => {
      axios
        .get(`${BASE_APIURL}/users/bulkuser?filter=` + filter)
        .then((response) => {
          setUsers(response.data.user);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    }, 2000);
    return () => {
      clearTimeout(handler);
    };
  }, [filter]);
  return (
    <>
      <div className="font-bold mt-4 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      {jwtToken ? (
        <div>
          {users.map((user) => (
            <User user={user} />
          ))}
        </div>
      ) : null}
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-slate-50 px-2 py-1 rounded-md mb-1">
      <div className="flex ">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={(e) => {
            navigate("/transfer?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}

export default UserList;
