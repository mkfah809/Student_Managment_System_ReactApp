import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddStudent from "./components/AddStudent";
import Navbar from "./components/Navbar";

import StudentList from "./components/StudentList";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index Component={<StudentList />}></Route>
          <Route path="/" element={<StudentList />}></Route>
          <Route path="/view/students" element={<StudentList />}></Route>
          <Route path="/add/students" element={<AddStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
