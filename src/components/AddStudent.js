import React, { useState } from "react";
import StudentService from "../services/StudentService";

const AddStudent = () => {
  const [student, setStudent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    address: {
      addressLine: "",
      city: "",
      state: "",
      zipCode: "",
    },
    dateOfBirth: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log("handleChange function");
    const value = e.target.value;
    console.log(value);
    setStudent({ ...student, [e.target.name]: value }); //get exist student  and set/ or target "name" value in the <input>
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        [name]: value,
      },
    }));
  };

  const saveStudent = (e) => {
    StudentService.saveStudent(student)
      .then((response) => {
        console.log("response is ", response);
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={saveStudent}>
        <div className="flex max-w-2xl mx-auto shadow border-b">
          <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
              <h1>Add New Student</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-noraml">
                First Name
              </label>
              <input
                name="firstName"
                value={student.firstName}
                onChange={(e) => handleChange(e)} //every time i enter text,  set a new state for input
                placeholder="Joe"
                type="text"
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-noraml">
                Last Name
              </label>
              <input
                onChange={(e) => handleChange(e)} //every time i enter text,  set a new state for input
                name="lastName"
                value={student.lastName}
                placeholder="Doe"
                type="text"
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-noraml">
                Email
              </label>
              <input
                onChange={(e) => handleChange(e)}
                name="email"
                value={student.email}
                placeholder="joedoe@gmail.com"
                type="text"
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-noraml">
                Date Of Birth
              </label>
              <input
                onChange={(e) => handleChange(e)}
                name="dateOfBirth"
                value={student.dateOfBirth}
                placeholder="mm/dd/yyyy"
                type="date"
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-noraml">
                password
              </label>
              <input
                onChange={(e) => handleChange(e)}
                name="password"
                value={student.password}
                placeholder="Password!1"
                type="password"
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-noraml">
                Address
              </label>
              <input
                name="addressLine"
                value={student.address.addressLine}
                onChange={(e) => handleAddressChange(e)}
                placeholder="123 Fake St. Apt 401K"
                type="text"
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-noraml">
                City
              </label>
              <input
                onChange={(e) => handleAddressChange(e)}
                name="city"
                value={student.address.city}
                placeholder="Westborough"
                type="text"
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-noraml">
                State
              </label>
              <input
                onChange={(e) => handleAddressChange(e)} //every time i enter text,  set a new state for input
                name="state"
                value={student.address.state}
                placeholder="MA"
                type="text"
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-noraml">
                Zip Code
              </label>
              <input
                onChange={(e) => handleAddressChange(e)} //every time i enter text,  set a new state for input
                name="zipCode"
                value={student.address.zipCode}
                placeholder="12345"
                type="text"
                className="h-10 w-96 border mt-2 px-2 py-2"
              ></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
              <button
                
                className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
              >
                Save
              </button>
              <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// return (
//   <div>
//     <h1>Registration Page</h1>
//     <form onSubmit={saveStudent}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={student.firstName}
//           onChange={handleUserChange}
//         />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="lastName"
//           value={student.lastName}
//           onChange={handleUserChange}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={student.email}
//           onChange={handleUserChange}
//         />
//       </label>
//       <br />
//       <h2>Address</h2>
//       <label>
//         Street:
//         <input
//           type="text"
//           name="street"
//           value={student.address.addressLine}
//           onChange={handleAddressChange}
//         />
//       </label>
//       <br />
//       <label>
//         City:
//         <input
//           type="text"
//           name="city"
//           value={student.address.city}
//           onChange={handleAddressChange}
//         />
//       </label>
//       <br />
//       <label>
//         State:
//         <input
//           type="text"
//           name="state"
//           value={student.address.state}
//           onChange={handleAddressChange}
//         />
//       </label>
//       <br />
//       <label>
//         Postal Code:
//         <input
//           type="text"
//           name="postalCode"
//           value={student.address.zipCode}
//           onChange={handleAddressChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Register</button>
//     </form>
//   </div>
// );
// }

export default AddStudent;
