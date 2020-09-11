import React, { createContext, userContext, useReducer} from "react"

//Prepares the dataLayer
export const StateContext = createContext();

//wraps out app and provide the data layer to every component in our app
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from data layer
export const useStateValue =() => useContext(StateContext);