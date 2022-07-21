import React from 'react'
import './SideBar.scss'
import {Appcontext} from 'contexts/appContext'
import {FaRegMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'



const SideBar = () => {
    const appContext = React.useContext(Appcontext)

  return (
    <div className={`sidebar ${appContext?.app.showSideBar === true ? 'show' : ''}`}>
        <div>
        <p className='sidebar-title'>MY DOCUMENTS</p>
        <button className='open-new'>+New Document</button>
        </div>

        <div>
         <span className={`theme-icon ${appContext?.app.darkMode === true ? 'white' : ''}`} ><FaRegMoon /></span>   
         <span onClick={()=> appContext?.dispatchAppActions({type:'TOGGLE THEME'})} className={`theme-toggler`}><span className={`switch  ${appContext?.app.darkMode === true ? 'dark-mode' : ''}`}></span></span>
         <span className={`theme-icon ${appContext?.app.darkMode === false ? 'white' : ''}`}><FiSun /></span>
        </div>
       
    </div>
  )
} 

export default SideBar