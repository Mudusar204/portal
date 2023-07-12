import SideBar from '../../components/sidebar/SideBar'
import style from './AddTrainer.module.css'
import edit from '../../assets/images/addEmployee/edit.svg'
import profile from '../../assets/images/addEmployee/prof.svg'
import ProfileUser from '../../components/profileUser/ProfileUser'
import copyP from '../../assets/images/employeeProfile/CopyP.svg'
import Office from '../../assets/images/employeeProfile/Office.svg'
import msg from '../../assets/images/hrprofile/mail.svg'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
import Navbar from '../../components/navbar/Navbar'
import { useRef, useState } from 'react'

function AddTrainer() {
    const [offcanvas, setOffcanvas] = useState(false)
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

    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <HROffcanvas status={offcanvas} />
                <SideBar panelName={"Admin"}/>
            </div>
            <div className={style.form}>
                <ProfileUser path='/hr/profile' />
                <div className={style.headers}>
                    <div className={style.spans}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={style.para}>
                        Add Student
                    </div>

                </div>
                <div className={style.profile}>
                    <img src={profile} alt="" />
                    <div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <img onClick={uploadBtnH} src={edit} alt="" />
                    </div>
                </div>
                <div className={style.sec1}>
                    <div>
                        <input type="text" placeholder='Name here' />
                        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={profile} alt="" />
                    </div>
                    <div>
                        <input type="text" placeholder='CNIC here' />
                        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={profile} alt="" />
                    </div>
                    <div>
                        <input type="text" placeholder='Phone Number' />
                        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={msg} alt="" />
                    </div>
                    <div>
                        <input type="text" placeholder='Class' />
                        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={Office} alt="" />
                    </div>
                
                    <div className={style.btns}>
                        <button>Submit</button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTrainer
