import React, { useState } from 'react'

import Navbar  from '../NavBar'

import Popup from 'reactjs-popup'
import LamaContext from '../../Context/lamaContext'

import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";

import './index.css'
import { Link } from 'react-router-dom';

const Projects = () => {
    const [data, setData] = useState("")
    const [errMsg, setMessg] = useState("")

    return(
    <LamaContext.Consumer>
        {value => {
            const {projectData, addProjectData} = value

            const onFillData = event => {
                setData(event.target.value)
            }

            const onBlurData = () => {
                if(data === ""){
                    setMessg("Project Name can't be empty")
                } else {
                    setMessg("")
                }
            }

            const onClickCreate = () => {
                if(data === ""){
                    setMessg("Project Name can't be empty")
                } else{
                    addProjectData(data)
                    setData("")
                    setMessg("")
                }
            }

            return(
                <div className='project-container'>
                <Navbar />
                <div className='icon-and-project-container'>
                    <div className='icon-container'>
                        <IoSettingsOutline size={30} />
                        <IoMdNotificationsOutline size={30}/>
                    </div>
                    <div className='header-container'>
                        <h1 className='saved-project-heading'>Projects</h1>
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
                                    <input type='text' placeholder='Type here' value={data} className='user-input' onChange={onFillData} onBlur={onBlurData} />
                                    <p className='err-msg'>{errMsg}</p>
                                    <div className='btn-container'>
                                        <button
                                            type="button"
                                            className="trigger-button"
                                            onClick={() => close()}
                                            >
                                            Cancel
                                        </button>
                                        <button type='button' className='create-button' onClick={onClickCreate}>Create</button>
                                    </div>
                                </div>
                            </>
                            )}
                        </Popup>
                    </div>
                    <Link to="/upload" className='nav-link'>
                        <div className='saved-project-container'>
                        {projectData.map(each => (
                            <div className='indivisual-container'>
                            <p className='poject-profile'>SP</p>
                            <div>
                                <p className='saved-project-title'>{each}</p>
                                <p className='saved-project-desc'>4 Episodes</p>
                                <p className='saved-project-desc'>last edited a week ago</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </Link>
                </div>
            </div>
            )
        }}
    </LamaContext.Consumer>
  )
}

export default Projects

