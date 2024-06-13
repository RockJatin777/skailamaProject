import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

import engLogo from '../../Assets/Ellipse 2.png'

import './index.css'
import { useState } from "react";

const WidgetConfigurations = () => {
    const [section, setSection] = useState("General")

    const onClickGeneralBtn = () => {
        setSection("General")
    }

    const onClickDisplayBtn = () => {
        setSection("Display")
    }

    const onClickHomeIcon = () => {
        localStorage.setItem("tab", "/")
    }

    const onClickSampleProject = () => {
        localStorage.setItem("tab", "Projects")
    }
    return(
        <div className="wc-container">
            <Navbar />
            <div className="widget-container">
                <div className="icon-and-path-card">
                    <div className="path-card">
                        <Link to="/" className="nav-link">
                            <MdOutlineHome onClick={onClickHomeIcon} size={30} color="#7E22CE" />
                        </Link>
                        <p>/</p>
                        <Link to="/projects" className="nav-link">
                            <p onClick={onClickSampleProject}>Sample Project</p>
                        </Link>
                        <p>/</p>
                        <p className="widget-path">Widget Configurations</p>
                    </div>
                    <div className="icon-card">
                        <p>EN</p>
                        <img className="upload-image" alt="lang" src={engLogo}/>
                        <IoMdNotificationsOutline size={30}/>
                    </div>
                </div>
                <div className="widget-content-card">
                    <h1 className="widget-heading">Widget Configurations</h1>
                    <div className="btn-container">
                        <button type="button" className={section === "General" ? "widget-active-button" : "widget-btn"} onClick={onClickGeneralBtn}>General</button>
                        <button type="button" className={section === "Display" ? "widget-active-button" : "widget-btn"} onClick={onClickDisplayBtn}>Display</button>
                        <button type="button" className="widget-btn">Advanced</button>
                    </div>
                    <hr className="line" />
                    {section === "General" ? (
                        <div className="general-widget-container">
                        <label className="label" id="chatbotName">Chatbot Name</label>
                        <input type="text" className="input" for="chatbotName" />
                        <p className="input-desc">Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                        <label className="label" id="chatbotName">Welcome Message</label>
                        <input type="text" className="input" for="chatbotName" />
                        <p className="input-desc">Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                        <label className="label" id="chatbotName">Input Placeholder</label>
                        <input type="text" className="input" for="chatbotName" />
                        <p className="input-desc">Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                    </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WidgetConfigurations