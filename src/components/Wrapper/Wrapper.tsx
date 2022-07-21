import React from 'react'
import SideBar from 'components/SideBar/SideBar'
import Header from 'components/Header/Header'
import {Appcontext} from 'contexts/appContext'
import {FiEye,FiEyeOff} from 'react-icons/fi'
import './Wrapper.scss'
import parser from 'html-react-parser'

const Wrapper = () => {
    const appContext = React.useContext(Appcontext)
    const [preview, setPreview] = React.useState<boolean>(false)
    let markdown = `${appContext?.app.processedText}`
    const markdownTextContainer = React.useRef<HTMLDivElement>(null)

    //React.useEffect(()=>{
       // console.log(markdownTextContainer.current?.innerText)
       // markdownTextContainer.current?.insertAdjacentHTML('afterbegin',markdown) 

   // },[markdown])

    const onChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => { 

        appContext?.dispatchAppActions({
            type:'CHANGE INPUT',
            payload:e.target.value
        })
    }

  return (
    <div className={`wrapper ${appContext?.app.showSideBar === true ? 'show' : ''}`} >
     <Header />
     <SideBar />
     <div className={`main`}>
       <div className={`markdown-container ${appContext?.app.darkMode?'dark':''} ${preview === true?'hide':''}`}>
        <div className={`main-heading ${appContext?.app.darkMode?'dark-heading':''}`}><span>MARKDOWN</span><span onClick={()=>setPreview(true)} className='preview-icon'><FiEye /></span></div>
        <textarea className={`${appContext?.app.darkMode?'dark':''}`} onChange={onChangeHandler} />
       </div>
       <div className='preview'>
       <div className={`main-heading ${appContext?.app.darkMode?'dark-heading':''}`}><span>PREVIEW</span>{preview?<span onClick={()=>setPreview(false)} ><FiEyeOff /></span>:<span onClick={()=>setPreview(true)} ><FiEye /></span>}</div>
        <div ref={markdownTextContainer}  className={`preview-content ${appContext?.app.darkMode?'dark':''}`}>
            {parser(markdown)}
        </div>

       </div>
     </div>
    </div>
  )
}

export default Wrapper