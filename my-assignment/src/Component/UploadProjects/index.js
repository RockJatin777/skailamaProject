import Navbar from "../NavBar";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

import { MdOutlineHome } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

import engLogo from '../../Assets/Ellipse 2.png'
import projectImage from '../../Assets/Frame 1.png'
import cloudImage from '../../Assets/cloud_upload.png'


import './index.css'

const UploadProjects = () => {
    const onClickHomeIcon = () => {
        localStorage.setItem("tab", "/")
    }
    return(
    <div className="upload-project-container">
        <Navbar />
        <div className="upload-container">
        <div className="icon-and-path-card">
            <div className="path-card">
                <Link to="/" className="nav-link">
                    <MdOutlineHome onClick={onClickHomeIcon} size={30} color="#7E22CE" />
                </Link>
                <p>/</p>
                <Link to="/projects" className="nav-link">
                    <p>Sample Project</p>
                </Link>
                <p>/</p>
                <p className="upload-path">Uploads</p>
            </div>
            <div className="icon-card">
                <p>EN</p>
                <img className="upload-image" alt="lang" src={engLogo}/>
                <IoMdNotificationsOutline size={30}/>
            </div>
        </div>
        <div className="upload-content-card">
            <h1 className="upload-heading">Uploads</h1>
            <div className="content-card">
                <div className="individual-content-card">
                    <img className="upload-image" src={projectImage} alt="upload logo" />
                    <div>
                        <p>upload</p>
                        <p>Youtube Podcast</p>
                    </div>
                </div>
            </div>
            <div className="add-project-container">
                <img className="upload-image" src={cloudImage} alt="+" />
                <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                <p>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
                <Popup
                            modal
                            trigger={
                            <button type='button' className='add-project-button'>
                                Select File
                            </button>
                            }
                        >
                            {close => (
                            <>
                                <div className='popup-container'>
                                    <div className="popup-icon-crad">
                                        <img className="upload-image" src={projectImage} alt="YT" />
                                        <p>Upload From Youtube</p>
                                    </div>
                                    <p>Name:</p>
                                    <input type='text' placeholder='Type here'className='user-input'/>
                                    <p>Link</p>
                                    <input type='text' placeholder='Type here'className='user-input'/>
                                    <div className='btn-container'>
                                        <button
                                            type="button"
                                            className="trigger-button"
                                            onClick={() => close()}
                                            >
                                            Cancel
                                        </button>
                                        <button type="button" className="create-button">Upload</button>
                                    </div>
                                </div>
                            </>
                            )}
                        </Popup>
            </div>
        </div>
    </div>
    </div>
)
}

export default UploadProjects