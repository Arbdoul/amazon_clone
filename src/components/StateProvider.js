import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./Reducer";

// Prepares the data layer
export const StateContext = createContext();

// wrap our app and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//pull information from the data layer
//after this step is to consume the context value which is useState value
export const useStateValue = () => useContext(StateContext);
