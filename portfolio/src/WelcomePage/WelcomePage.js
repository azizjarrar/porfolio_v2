import React from 'react'
import style from './welcomestyle.module.css'
import './style.scss'
import manuser from './images/simulation.png'
import skills from './images/innovation.png'
import contactme from './images/aboutme.png'
class WelcomePage extends React.Component{
render(){
    return(
        <div className={`${style.welcomepage}`}>
            <div className={style.aboutcontainer}><div className={style.aboutme}><div className={style.aboutme_image_h1_container}><div className={style.imagecontainer}><img src={manuser}/></div><div className={style.h1inmidle}><h1 className={style.h1aboutme}>about me</h1></div></div></div></div>
            <div className={style.myskillscontainer}><div className={style.myskills}><div className={style.aboutme_image_h1_container}><div className={style.imagecontainer}><img src={skills}/>   </div><div className={style.h1inmidle}><h1 className={style.h1myskills}>my skills</h1></div></div></div></div>
            <div className={style.contactmecontainer}><div className={style.contactme}><div className={style.aboutme_image_h1_container}><div className={style.imagecontainer}><img src={contactme}/>   </div><div className={style.h1inmidle}><h1 className={style.h1contactme}>contat me</h1></div></div></div></div>
        </div>
    )
}

}
export default WelcomePage