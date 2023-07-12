import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import WellcomePage from './HRPortal/welcomePage/Wellcome';
import StudentProfile from './HRPortal/students/StudentProfile';
import AddStudent from './HRPortal/addStudent/AddStudent';
import ManageFee from './HRPortal/manageFees/ManageFee';
import FeeReport from './HRPortal/feeReport/FeeReport';
import StudentInfo from './HRPortal/applications/StudentInfo';
import Applications from './HRPortal/applications/Applications';
import Main from './HRPortal/personalRec/Main';
import Student from './HRPortal/addStudent/Student';
import Signin from './HRPortal/signin';
//////////////////////////student portal/////////////////
import Wellcome from './StudentPortal/welcomePage/Wellcome';

function App() {
  return (
    <div className={style.webParent}>
      <Routes>
        {/* --->HR Portal<--- */}
        {/* Employee Button Pages */}
        <Route path="/hr" element={<WellcomePage name={'Admin'}/>} />
        <Route path="/hr/studentProfile" element={<StudentProfile name={"Admin"}/>} />
        <Route path="/" element={<Signin />} />
        {/* Training recs */}
        <Route path="/hr/applications" element={<Applications />} />
        <Route path="/hr/studentinfo" element={<StudentInfo name={"Admin"}/>} />
        {/* Training */}
        <Route path="/hr/feeReport" element={<FeeReport />} />
        {/* Do Working */}
        {/* personalRec */} 
        <Route path="/hr/personalrec" element={<Main />} />
        {/* Yearly Plan */}
        <Route path="/hr/feeManage" element={<ManageFee />} />
        {/* Month Plan */}
        {/* Trainer */}
        <Route path="/hr/addstudent" element={<AddStudent />} />
        {/* Do Working */}
        <Route path="/hr/students" element={<Student />} />
        {/* ////////////////////////////stdent portal//////////////////////// */}
        <Route path='/student' element={<Wellcome name={'Student'}/>}/>
        <Route path="/student/studentProfile" element={<StudentProfile name={"Student"}/>} />


      </Routes>
    </div>
  );
}

export default App;
