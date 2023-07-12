import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import WellcomePage from './HRPortal/welcomePage/Wellcome';
import EmployeeProfile from './HRPortal/Employees/EmployeeProfile';
import AddTrainer from './HRPortal/addTrainer/AddTrainer';
import Input from './HRPortal/yearlyPlan/Input';
import AssignTrainings from './HRPortal/plannedTrainings/AssignTraining';
import TrainingInfo from './HRPortal/trainingRecords/Info';
import Trainings from './HRPortal/trainingRecords/Trainings';
import Main from './HRPortal/personalRec/Main';
import Trainers from './HRPortal/addTrainer/Trainers';
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
        <Route path="/hr/studentProfile" element={<EmployeeProfile name={"Admin"}/>} />
        <Route path="/" element={<Signin />} />
        {/* Training recs */}
        <Route path="/hr/applications" element={<Trainings />} />
        <Route path="/hr/studentinfo" element={<TrainingInfo name={"Admin"}/>} />
        {/* Training */}
        <Route path="/hr/feeReport" element={<AssignTrainings />} />
        {/* Do Working */}
        {/* personalRec */}
        <Route path="/hr/personalrec" element={<Main />} />
        {/* Yearly Plan */}
        <Route path="/hr/feeManage" element={<Input />} />
        {/* Month Plan */}
        {/* Trainer */}
        <Route path="/hr/addstudent" element={<AddTrainer />} />
        {/* Do Working */}
        <Route path="/hr/students" element={<Trainers />} />
        {/* ////////////////////////////stdent portal//////////////////////// */}
        <Route path='/student' element={<Wellcome name={'Student'}/>}/>
        <Route path="/student/employeeProfile" element={<EmployeeProfile name={"Student"}/>} />


      </Routes>
    </div>
  );
}

export default App;
