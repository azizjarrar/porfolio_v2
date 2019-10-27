import React from 'react'
import style from './welcomestyle.module.css'
import './style.scss'
import manuser from './images/simulation.png'
import skills from './images/innovation.png'
import contactme from './images/aboutme.png'

class WelcomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            out:false
        }
        this.gotoaboutme = this.gotoaboutme.bind(this)
        this.gotomyskills = this.gotomyskills.bind(this)
        this.gotocontactme = this.gotocontactme.bind(this)
    }
    componentDidMount(){
        this.setState({out:false})
    
    }
    gotoaboutme() {
        this.setState({out:true})
        setTimeout(()=>{
            this.props.history.push('/Aboutme')
        },1000)
    }
    gotomyskills() {
        this.setState({out:true})
        setTimeout(()=>{
        this.props.history.push('/Contactme')
        },1000)
    }
    gotocontactme() {
        this.setState({out:true})
        setTimeout(()=>{
        this.props.history.push('/Myskills')
        },1000)
    }
    render() {
        return (
            <div className={`${style.welcomepage}`}>
                <div className={style.aboutcontainer}>
                    <div className={!this.state.out? style.aboutme:style.aboutmeOUT}>
                        <div onClick={this.gotoaboutme} className={style.aboutme_image_h1_container}>
                            <div className={style.imagecontainer}>
                                <img src={manuser} />
                            </div><div className={style.h1inmidle}>
                                <h1 className={!this.state.out?style.h1aboutme:style.h1aboutmeOUT}>about me</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.myskillscontainer}>
                    <div className={!this.state.out?style.myskills:style.myskillsOUT}>
                        <div onClick={this.gotomyskills} className={style.aboutme_image_h1_container}>
                            <div className={style.imagecontainer}>
                                <img src={skills} />
                            </div><div className={style.h1inmidle}>
                                <h1 className={!this.state.out?style.h1myskills:style.h1myskillsOUT}>my skills</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.contactmecontainer}>
                    <div className={!this.state.out?style.contactme:style.contactmeOUT}>
                        <div onClick={this.gotocontactme} className={style.aboutme_image_h1_container}>
                            <div className={style.imagecontainer}>
                                <img src={contactme} />
                            </div><div className={style.h1inmidle}>
                                <h1 className={!this.state.out?style.h1contactme:style.h1contactmeOUT}>contat me</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default WelcomePage