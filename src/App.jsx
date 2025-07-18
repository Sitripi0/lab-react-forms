import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setgraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);


  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newStudent = {

      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };

    setStudents ([...students,newStudent]);
    
    setFullName("");
    setImage ("");
    setPhone("");
    setEmail("");
    setProgram("");
    setgraduationYear("");
    setGraduated("");
    
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={setFullName} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={setImage} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={setPhone} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={setEmail} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={setProgram}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={setgraduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked= {graduated} onChange={setGraduated} />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
