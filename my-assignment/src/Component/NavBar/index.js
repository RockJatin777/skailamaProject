/* eslint-disable jsx-a11y/alt-text */
import {Link} from 'react-router-dom'

import React, { Component } from 'react'

import logo from '../../Assets/directrighthomeicon.png';

import { IoSettingsOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { GiFlatPlatform } from "react-icons/gi";
import { VscActivateBreakpoints } from "react-icons/vsc";

import './index.css'

class Navbar extends Component {
  state = {
    tab: localStorage.getItem("tab"),
  }

  onTabHome = () => {
    this.setState({tab: "/"});
    localStorage.setItem("tab", "/");
  }

  onTabProjects = () => {
    this.setState({tab: "Projects"});
    localStorage.setItem("tab", "Projects");
  }

  onTabWidget = () => {
    this.setState({tab: "widget-configurations"});
    localStorage.setItem("tab", "widget-configurations");
  }

  onTabSetting = () => {
    this.setState({tab: "setting"});
    localStorage.setItem("tab", "setting");
  }

  render(){
    const {tab} = this.state
  return(
    <nav className='navbar'>
          <ul className='nav-container'>
            <Link to="/" className='nav-link'>
              <li className='nav-items' onClick={this.onTabHome}>
                <img className='logo' src={logo} alt='Logo'/>
                <p className='logo-name'>LAMA.</p>
              </li>
            </Link>
            <li className='nav-desc'>Pdcast upload flow</li>
            <Link to="/projects" className='nav-link'>
              <li onClick={this.onTabProjects} className={tab === "Projects" ? "active-navitem" : "inactive-navitem"}>
                <GrProjects />
                <p>Projects</p>
              </li>
            </Link>
            <Link to="/widget-configurations" className='nav-link'>
              <li onClick={this.onTabWidget} className={tab === "widget-configurations" ? "active-navitem" : "inactive-navitem"}>
                <HiOutlineSquare3Stack3D  size={25}/>
                <p>Widget Configurations</p>
                </li>
            </Link>
            <li className={tab === "ChoosePlatform" ? "active-navitem" : "inactive-navitem"}>
              <GiFlatPlatform size={25} />
              <p>Choose Platform</p>
            </li>
            <li className={tab === "Activate" ? "active-navitem" : "inactive-navitem"}>
              <VscActivateBreakpoints size={25} />
              <p>Activate</p>
            </li>
        </ul>
        <ul className='nav-container'>
          <hr />
          <Link to="/setting" className='nav-link'>
            <li onClick={this.onTabSetting} className={tab === "setting" ? "active-navitem" : "nav-items"}>
              <IoSettingsOutline/>
              <p>Setting</p>
            </li>
          </Link>
        </ul>
    </nav>
  )
}
}

export default Navbar
