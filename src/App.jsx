import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };
    console.log(user);
    /* *************** Fetch JSON Data *************** */
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user add Successfully.");
          form.reset();
        }
      });
  };
  /* ***************  *************** */

  return (
    <>
      <div>
        <h1 className="text-center mt-3">This is simple curd client site.</h1>
        <div className="w-6/12 mx-auto">
          <form
            action=""
            onSubmit={handleAddUser}
            className="flex flex-col gap-y-4  w-full justify-center h-svh items-center"
          >
            <input
              className="border w-full h-10 px-4"
              placeholder="Enter Your Name"
              type="text"
              name="name"
              required
            />

            <input
              className="border w-full h-10 px-4"
              placeholder="Enter Your Email Adders"
              type="email"
              name="email"
              required
            />
            <input
              type="submit"
              className="border w-full h-10 px-4"
              value="Add User"
            />
          </form>
        </div>
        <div className="mt-20 mx-auto"></div>
      </div>
    </>
  );
}

export default App;
