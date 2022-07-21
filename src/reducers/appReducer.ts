import parser from "utils/parser"

export type AppStateType = {
    documentName:string,
    markdownText:string,
    processedText:string,
    darkMode:boolean,
    showSideBar:boolean
}

export const initialState:AppStateType = {
    documentName:"Untitled Document.md",
    markdownText:"",
    processedText:"",
    darkMode:false,
    showSideBar:true
}



export type ChangeDocumentNameAction = {
    type:string,
    payload:string
}

export type ToggleAction = {
    type:'TOGGLE'
}

export type ChangeInputAction = {
    type:'CHANGE INPUT',
    payload:string
}

export type ToggleThemeAction = {
    type:'TOGGLE THEME',
    
}


export type AppActionType = ChangeDocumentNameAction | ToggleAction | ChangeInputAction | ToggleThemeAction


export  function reducer(state=initialState,action:AppActionType){
    switch(action.type){
        case "CHANGE DOCUMENT NAME" : {
            return {
                ...state,
                documentName : action.payload
            }
        }

        case "TOGGLE" : {
            return {
                ...state,
                showSideBar: !state.showSideBar
            }
        }

        case "CHANGE INPUT" : {
           
            return {
                ...state,
                markdownText:action.payload,
                processedText:parser(action.payload),
            }
        }

        case "TOGGLE THEME" : {
           
            return {
                ...state,
                darkMode:!state.darkMode
            }
        }


        default:{
            return state
        }
    }
}