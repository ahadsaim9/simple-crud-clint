import { useLoaderData } from "react-router-dom";

const Update = () => {
  const userData = useLoaderData() || [];

  const handelUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updateUser = (name, email);

    fetch(`http://localhost:5000/users/${userData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="w-full h-svh flex flex-col  justify-center ">
      <h1 className="my-7 md:text-3xl text-center">{userData.name}</h1>
      <form
        onSubmit={handelUpdate}
        className="flex flex-col gap-4 md:w-2/6 mx-auto  "
        action=""
      >
        <input
          className="p-2 w-full border"
          type="text"
          name="name"
          defaultValue={userData?.name}
          placeholder="Enter Your Name"
        />
        <input
          defaultValue={userData?.email}
          className="p-2 w-full border"
          type="email"
          name="email"
          required
          placeholder="Enter Your Email"
        />
        <input
          className="p-2 w-full border hover:bg-green-700 duration-500 hover:text-white "
          type="submit"
          value="Update User Data"
        />
      </form>
    </div>
  );
};

export default Update;
