import React from 'react'
import style from './welcomestyle.module.css'
import aziz from './images/aziz.png'
class WelcomePage extends React.Component{
render(){
    return(
        <div className={style.welcomepage}>
            <div className={style.aboutcontainer}><div className={style.aboutme}></div></div>
            <div className={style.myskillscontainer}><div className={style.myskills}></div></div>
            <div className={style.contactmecontainer}><div className={style.contactme}></div></div>
        </div>
    )
}

}
export default WelcomePage