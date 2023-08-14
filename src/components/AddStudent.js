import React, { useState } from "react";
import StudentService from "../services/StudentService";

const AddStudent = () => {

  const [student, setStudent] = useState({
    
    firstName: "",
    lastName: "",
    email: "",
    address: 
      {
        addressLine: "",
        city: "",
        state: "",
        zipCode: "",
      },
    dateOfBirth: "",
    password: "",
  });


  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   const copyOfStudent = { ...student };
    
  //   if (name.includes(".")) {
  //     const keys = name.split(".");
  //     let currentLevel = copyOfStudent;
  //     for (let i = 0; i < keys.length - 1; i++) {
  //       currentLevel = currentLevel[keys[i]];
  //     }
  //     currentLevel[keys[keys.length - 1]] = value;
  //   } else {
  //     copyOfStudent[name] = value;
  //   }
    
  //   setStudent(copyOfStudent);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Form submitted with data:", student);
  //   // You can add your registration logic here
  // };

  const handleChange = (e) => {
    console.log("handleChange function");
    const value = e.target.value;
    console.log(value);
    setStudent({ ...student, [e.target.name]: value }); //get exist student  and set/ or target "name" value in the <input>
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
              onChange={(e) => handleChange(e)} //every time i enter text,  set a new state for input
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
              onChange={(e) => handleChange(e)} //every time i enter text,  set a new state for input
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
              onChange={(e) => handleChange(e)} //every time i enter text,  set a new state for input
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
              name="student.address.addressLine"
              value={student.address.addressLine}
              onChange={(e) => handleChange(e)} //every time i enter text,  set a new state for input
              placeholder="123 Fake St. Apt 401K"
              type="text"
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>
          {/* <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-noraml">
              City
            </label>
            <input
              onChange={(e) => handleChange(e)} //every time i enter text,  set a new state for input
              name="address.city"
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
              onChange={(e) => handleChange(e)} //every time i enter text,  set a new state for input
              name="address.state"
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
              onChange={(e) => handleChange(e)} //every time i enter text,  set a new state for input
              name="address.zipCode"
              value={student.address.zipCode}
              placeholder="12345"
              type="text"
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div> */}

          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              onClick={saveStudent}
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
    </div>
  );
};

export default AddStudent;
