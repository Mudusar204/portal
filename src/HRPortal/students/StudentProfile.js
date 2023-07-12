import SideBar from '../../components/sidebar/SideBar'
import user from '../../assets/images/hrprofile/user.svg'
import selectImg from '../../assets/images/hrprofile/selectImg.svg'
import mail from '../../assets/images/hrprofile/mail.svg'
import Phone from '../../assets/images/studentProfile/Phone.svg'
import copyp from '../../assets/images/studentProfile/CopyP.svg'
import Location from '../../assets/images/studentProfile/Location.svg'
import Office from '../../assets/images/studentProfile/Office.svg'
import UserCard from '../../assets/images/studentProfile/UserCard.svg'
import Calendar from '../../assets/images/studentProfile/Calendar.svg'
import man from '../../assets/images/hrprofile/man.svg'
import { useRef, useState } from 'react'
import style from './hrprofile.module.css'
import style2 from './StudentProfile.module.css'
import ProfileUser from '../../components/profileUser/ProfileUser'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'


function EmployeeProfile(props) {
    const [offcanvas, setOffcanvas] = useState(false)
    const [data, setdata] = useState([{month:'January',status:"mpaid"}, {month:'January',status:"paid"},{month:'January',status:"paid"}])
    const fileInputRef = useRef(null);

    const uploadBtnH = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        // Process the selected file(s) or perform any desired actions
        for (let i = 0; i < files.length; i++) {
            console.log(files[i]);
            // Perform further actions with the file(s) such as uploading, validating, etc.
        }
    }
    const navigate = useNavigate()
    return (
        <div className={style.parent}>
            <div className={`${style.sidebar}`}>
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <SideBar panelName={props.name}/>
                <HROffcanvas status={offcanvas} />
            </div>
            <div className={style.profile}>
                <ProfileUser path='/hr/profile' />
                <p>Student Profile</p>
                <div className={style.hrInfo}>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <p>Taskeen Chaudary</p>
                        <p>Front End Developer</p>
                    </div>
                    <div>
                        <img src={user} alt="" />
                    </div>
                    <div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <img onClick={uploadBtnH} src={selectImg} alt="" />
                    </div>
                </div>
                <div className={style2.cardParent}>
                    <div className={style2.card1}>
                        <div className={style2.card1headers}>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <p>Info</p>
                            </div>
                        </div>
                        <div className={style2.card1body}>
                            <div>


                                <div>
                                    <img src={man} alt="" />
                                    <div>
                                        <p className={style2.card1para}>Students Code</p>
                                        <p className={style2.card1para2}>E002</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <img src={mail} alt="" />
                                    <div>
                                        <p className={style2.card1para}>Email</p>
                                        <p className={style2.card1para2}>Albertrobin23@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={Phone} alt="" />
                                    <div>
                                        <p className={style2.card1para}>Phone</p>
                                        <p className={style2.card1para2}>03044512698</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={Office} alt="" />
                                    <div>
                                        <p className={style2.card1para}>Class</p>
                                        <p className={style2.card1para2}>IT</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={Office} alt="" />
                                    <div>
                                        <p className={style2.card1para}>CNIC</p>
                                        <p className={style2.card1para2}>Employee</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div>
                                    <img src={man} alt="" />
                                    <div>
                                        <p className={style2.card1para}>Father Name</p>
                                        <p className={style2.card1para2}>Malik Mudusar</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={Calendar} alt="" />
                                    <div>
                                        <p className={style2.card1para}>Date Of Birth</p>
                                        <p className={style2.card1para2}>31-08-2000</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={UserCard} alt="" />
                                    <div>
                                        <p className={style2.card1para}>CNIC</p>
                                        <p className={style2.card1para2}>33100-7483748-2</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={copyp} alt="" />
                                    <div>
                                        <p className={style2.card1para}>Qualification</p>
                                        <p className={style2.card1para2}>Bachelor’s Degree</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={Location} alt="" />
                                    <div>
                                        <p className={style2.card1para}>Address</p>
                                        <p className={style2.card1para2}>Faisalabad</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className={style2.card2}>
                        <table className={style2.table}>
                            <tr>
                                <th className={style2.tableheader}>
                                    <td>Serial #</td>
                                    <td className={style.month}>Month</td>
                                    <td>Status</td>
                                </th>
                            </tr>
                            {
                                data.map((training, i) => {
                                    return (
                                        <tr key={i}>
                                            <th className={style2.tablebody}>
                                                <td className={style2.index}>{i + 1}</td>
                                                <td className={style2.training}>{training.month}</td>
                                                <td  className={training.status==='paid'?style2.clicker:style2.clicker2}>{training.status==='paid'? "No Submitted":"Submitted"} </td>
                                            </th>
                                        </tr>
                                    )
                                })
                            }

                        </table>
                        <div className={style2.btns}>
                            <button>Print</button>
                            <button>Download Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeProfile
