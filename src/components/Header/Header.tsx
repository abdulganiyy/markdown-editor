import React from 'react'
import './Header.scss'
import {FaRegFile} from 'react-icons/fa'
import {FiSave} from 'react-icons/fi'
import {RiDeleteBinLine} from 'react-icons/ri'
import { Appcontext } from 'contexts/appContext'

const Header = () => {
    const context = React.useContext(Appcontext)

    const toggleSideBar = () =>{

    
            context?.dispatchAppActions({type:'TOGGLE'})
        
    }
  return (
    <div className='header'>
        <div className='menubox'>
            <div className='menu' onClick={toggleSideBar}>
                <div className='top'></div>
                <div className='middle'></div>
                <div className='bottom'></div>
            </div>
        </div>
        <div className='header-content'>
            <div className='header-content-left'>
                <span className='appname heading'>MARKDOWN</span>
                <span><FaRegFile /></span>
                <div className='document-name'>
                    <p>Document Name</p>
                    <p><input className='name-input' onChange={(e) => context?.dispatchAppActions({type:"CHANGE DOCUMENT NAME",payload:e.target.value})} type={'text'} placeholder={"Untitled Document.md"} value={context?.app.documentName} /></p>
                </div>
            </div>
            <div>
                <span className='delete'><RiDeleteBinLine /></span>
                <span className='save-changes'>
                <FiSave /> <span>Save Changes</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header