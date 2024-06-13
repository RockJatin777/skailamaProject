import React from 'react'

import Navbar  from '../NavBar'

import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";

import Popup from 'reactjs-popup'

import './index.css'
import homeImage from '../../Assets/Group 16home.png'


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='create-new-project-container'>
            <div className='icon-container'>
                <IoSettingsOutline size={30} />
                <IoMdNotificationsOutline size={30}/>
            </div>
            <div className='create-project-container'>
                <h1 className='home-heading'>Create a New Project</h1>
                <img className='home-image' src={homeImage} alt="New Project" />
                <p className='home-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                <Popup
                    modal
                    trigger={
                    <button type='button' className='home-button'>
                        <FaCirclePlus className='btn-icon' />
                        Create New Project
                    </button>
                    }
                >
                    {close => (
                    <>
                        <div className='popup-container'>
                            <p className='popup-heading'>Create Project</p>
                            <p>Enter Project Name:</p>
                            <input type='text' placeholder='Type here' className='user-input' />
                            <div className='btn-container'>
                                <button
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                                >
                                Cancel
                                </button>
                                <button type='button' className='create-button'>Create</button>
                            </div>
                        </div>
                    </>
                    )}
                </Popup>
            </div>
        </div>
    </div>
  )
}

export default Home
