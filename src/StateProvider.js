import React, { createContext, useContext, useReducer } from "react";

//preparing data layer
export const StateContext = createContext();

//higher order component
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
    );

//hook which allowsus to pull info from data layer
export const useStateValue = () => useContext(StateContext);
