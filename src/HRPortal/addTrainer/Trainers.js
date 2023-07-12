import style from './Trainers.module.css'
import SideBar from '../../components/sidebar/SideBar'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import avatar from '../../assets/images/employees/Avatar.png'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import { useState } from 'react'
function Trainers() {
    const [offcanvas, setOffcanvas] = useState(false)
    let sampleData = {
        code: '3310',
        name: 'Asmer Naeem',
        img: avatar,
        cnic: '3310297413939',
        phone: '03154316991',
        email: 'Emetowinner@gmail.com',
        class: 'IT'
    }
    let data = [
        sampleData,
        sampleData,
        sampleData,
        sampleData,
        sampleData,
        sampleData,
        sampleData,
        sampleData,
    ]
    let next = 'Next page >>'
    const navigate = useNavigate()
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <HROffcanvas status={offcanvas} />
                <SideBar panelName={"Admin"}/>
            </div>

            <ProfileUser path='/hr/profile' />
            <div className={style.subparent}>
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <p>Search by</p>
                        <select>
                            <option>Month</option>
                            <option>January</option>
                            <option>Fabraury</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        <select>
                            <option>Status</option>
                            <option>Submit</option>
                            <option>Not-Submit</option>
                        </select>
                        <select>
                            <option>Class</option>
                            <option>9th</option>
                            <option>10th</option>
                            <option>11th</option>
                            <option>12th</option>
                        </select>
                    </div>
                    <div onClick={() => {
                        navigate('/hr/addstudent')
                    }} className={style.sec2} >
                        <img src={add} alt="" />
                        <p>Add Student</p>
                    </div>
                </div>
                <div className={style.tableParent2}>
                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>Student Code</td>
                            <td>Student Name</td>
                            <td style={{ whiteSpace: 'nowrap' }}>CNIC / B-Form</td>
                            <td> <p style={{ marginLeft: 10 }}></p>Email</td>
                            <td>Phone #</td>
                            <td>Class</td>
                            <td>Action</td>
                            <td>Documents</td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td>
                                            <p>{i}</p>
                                        </td>
                                        <td><img src={employee.img} alt="" /> {employee.name}</td>
                                        <td>{employee.cnic}</td>
                                        <td><p style={{ marginLeft: 20 }}>{employee.email}</p></td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.class}</td>
                                        <td >
                                            <p onClick={() => {
                                                navigate('/hr/studentProfile')
                                            }} className={style.view}>View</p>
                                        </td>
                                        <td >
                                            <p className={style.download}>Download</p>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </table>
                </div>
                <div className={style.next}>
                    <button>
                        {next}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Trainers
