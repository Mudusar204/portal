import style from './AssignTrainings.module.css'
import SideBar from '../../components/sidebar/SideBar'
import search from '../../assets/images/employees/Search.svg'
import add from '../../assets/images/employees/Application Add.svg'
import avatar from '../../assets/images/employees/Avatar.png'
import ProfileUser from '../../components/profileUser/ProfileUser'
import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import HROffcanvas from '../../components/offcanvas/HROffcanvas'
function AssignTrainings() {
    const [offcanvas, setOffcanvas] = useState(false)
    let sampleData = {
        img: avatar,
        code: '3310',
        name: 'Tanner Finsha',
        cnic: '33101-1543434-2',
        phonen: '0306-56302121',
        email: 'Emetowinner@gmail.com',
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
    return (
        <div className={style.parent}>
            <div className={style.sidebar}>
                <Navbar func={() => {
                    setOffcanvas(!offcanvas)
                }} />
                <SideBar panelName={"Admin"}/>
                <HROffcanvas status={offcanvas} />
            </div>
            <ProfileUser path='/hr/profile' />
            <div className={style.subparent}>
                <div className={style.searchbar}>
                    <div className={style.sec1}>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search Student by name' />
                    </div>
                </div>
                <div className={style.tableParent2}>
                    <table className={style.table}>
                        <tr className={style.headers}>
                            <td>month voice fees submission</td>
                            <td>class voice fees report</td>
                            <td>student voice fees report</td>
                            <td>List of fees summited</td>
                        </tr>
                        {
                            data.map((employee, i) => {
                                return (
                                    <tr className={style.tablebody} key={i}>
                                        <td>
                                            <p>{employee.code}</p>
                                        </td>
                                        <td className={style.textStyle1}><img src={employee.img} alt="" /> {employee.name}</td>
                                        <td className={style.textStyle2}>{employee.cnic}</td>
                                        <td className={style.textStyle2}>{employee.phonen}</td>
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

export default AssignTrainings
