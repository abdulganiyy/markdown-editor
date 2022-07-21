import React from "react";
import {reducer,AppStateType,initialState,AppActionType} from "reducers/appReducer"

export type AppContextType = {
    app:AppStateType,
    dispatchAppActions:React.Dispatch<AppActionType>
}

export type AppContextProviderPropsType = {
children:React.ReactNode
}

export const Appcontext = React.createContext<AppContextType | null>(null)

export const AppContextProvider = ({children}:AppContextProviderPropsType) =>{
    const [app, dispatchAppActions] = React.useReducer(reducer,initialState)

     return (
        <Appcontext.Provider value={{app,dispatchAppActions}}>
        {children} 
        </Appcontext.Provider>
        )
}