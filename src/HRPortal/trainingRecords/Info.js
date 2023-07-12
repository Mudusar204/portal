import style from './Info.module.css'
import ProfileUser from '../../components/profileUser/ProfileUser'
import SideBar from '../../components/sidebar/SideBar'
import clock from '../../assets/images/viewtrainings/Clock.svg'
import star from '../../assets/images/viewtrainings/Star.svg'
import mos from '../../assets/images/viewtrainings/mos.svg'
import copy from '../../assets/images/employeeProfile/CopyP.svg'
import calender from '../../assets/images/employeeProfile/Calendar.svg'
import office from '../../assets/images/employeeProfile/Office.svg'
import cnic from '../../assets/images/employeeProfile/UserCard.svg'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'

function Info(props) {
    const [alert, setalert] = useState(false)
    const alertManager = () => {
        setalert(!alert)
    }
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
    const [offcanvas, setOffcanvas] = useState(false)
    return (
        <>

            <div className={style.parent}>
                <div className={style.sidebar}>
                    <Navbar func={() => {
                        setOffcanvas(!offcanvas)
                    }} />
                    <HROffcanvas status={offcanvas} />
                    <SideBar panelName={props.name}/>
                </div>
                <ProfileUser path='/hr/profile' />
                <div className={style.subparent}>
                    <p className={style.headingtxt}>Student Information</p>
                    <div className={style.cardParent}>
                        <div className={style.card1headers}>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <p>Info</p>
                            </div>
                        </div>
                        <div className={style.cardbody}>
                            <div className={style.sec1} >
                                <div>
                                    <img src={calender} alt="" />
                                    <div>
                                        <p className={style.card1para}>Student Code</p>
                                        <p>0</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={calender} alt="" />
                                    <div>
                                        <p className={style.card1para}>Student Name</p>
                                        <p className={style.card1para2}>malik sb</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={clock} alt="" />
                                    <div>
                                        <p className={style.card1para}>CNIC</p>
                                        <p className={style.card1para2}>33110-0000021-0</p>
                                    </div>
                                </div>
                               

                            </div>
                            <div className={style.sec2} >
                                <div>
                                    <img src={office} alt="" />
                                    <div>
                                        <p className={style.card1para}>Father Name</p>
                                        <p className={style.card1para2}>John Doe</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={star} alt="" />
                                    <div>
                                        <p className={style.card1para}>Phone</p>
                                        <p className={style.card1para2}>03154316991</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={star} alt="" />
                                    <div>
                                        <p className={style.card1para}>Class</p>
                                        <p>9th</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <div className={style.cardsBtn}>
                            <div className={style.cardbtn1}><p className={style.btntxt}>Images</p> <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            /><button onClick={uploadBtnH}>Upload</button></div>
                            <div className={style.cardbtn2}><p className={style.btntxt}>Training Material</p><button>Download</button></div>

                        </div> */}
                    </div>
                    {/* <div className={style.bottomside}>
                        <p className={style.bheading}>Employess who are getting trained</p>
                        <button onClick={() => {
                            navigate('/hr/trainedemployees')
                        }} className={style.bottombtn}>Click Here</button>

                    </div> */}
                </div>
            </div>
            {
                alert ?
                    <div class={style.alertparent}>
                        <div class={style.alert}>
                            <p class={style.msg}>Evaluation Criteria</p>
                            <p class={style.msg2}>Hi this is your song</p>
                            <div className={style.alertbtns}>
                                <button onClick={alertManager} className={style.btn1}>Cencel</button>

                            </div>
                        </div>
                    </div> : null
            }
        </>
    )
}

export default Info
