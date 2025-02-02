import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
const Users = () => {
  const usersData = useLoaderData() || [];
  const [users, setUsers] = useState(usersData);
  console.log(usersData);
  const handleDeleteItem = (_id) => {
    console.log("Delete Id: ", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Delete one item successfully.");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl text-center mt-4">Total Users: {users.length}</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className=" lg:w-1/4 sm:w-2/4 mx-auto ">
          {users.map((user) => (
            <li className="p-3 flex justify-between " key={user._id}>
              {user.name}
              <Link to={`/update/${user._id}`}>
                <button className="l-2 border pxm-3 py-1 rounded-md flex">
                  Update
                </button>
              </Link>
              <button
                className="l-2 border pxm-3 py-1 rounded-md"
                onClick={() => handleDeleteItem(user._id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
