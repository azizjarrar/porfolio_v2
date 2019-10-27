import React from 'react'
import style from './welcomestyle.module.css'
import './style.scss'
import manuser from './images/simulation.png'
import skills from './images/innovation.png'
import contactme from './images/aboutme.png'
import Aboutme from './../aboutme/aboutme'
import Contactme from './../contactme/contactme'
import Myskills from './../myskills/myskills'
class WelcomePage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Route:'home',
        }
        this.gotoswitcher=this.gotoswitcher.bind(this)
    }
    //this.props.history.
    gotoswitcher(events){
        const {name} =events.target;
        this.setState({Route:name})
    }
    render() {
            switch(this.state.Route){
                case 'home':        return (
                    <div className={`${style.welcomepage}`}>
                        <div className={style.aboutcontainer}><div className={style.aboutme}><div name="aboutme" onClick={this.gotoswitcher} className={style.aboutme_image_h1_container}><div className={style.imagecontainer}><img src={manuser} /></div><div className={style.h1inmidle}><h1 className={style.h1aboutme}>about me</h1></div></div></div></div>
                        <div className={style.myskillscontainer}><div className={style.myskills}><div name="myskills" onClick={this.gotoswitcher} className={style.aboutme_image_h1_container}><div className={style.imagecontainer}><img src={skills} />   </div><div className={style.h1inmidle}><h1 className={style.h1myskills}>my skills</h1></div></div></div></div>
                        <div className={style.contactmecontainer}><div className={style.contactme}><div name="contactme" onClick={this.gotoswitcher}  className={style.aboutme_image_h1_container}><div className={style.imagecontainer}><img src={contactme} />   </div><div className={style.h1inmidle}><h1 className={style.h1contactme}>contat me</h1></div></div></div></div>
                        {/***************************************************************************************** */}
                    </div>
                )
                break;
                case 'aboutme':
                    return(<Aboutme></Aboutme>)
                    break;
                case 'myskills':
                        return(<Contactme></Contactme>)
                    break;
                default : 
                return(<Myskills></Myskills>)
                break;
            }

    }

}
export default WelcomePage