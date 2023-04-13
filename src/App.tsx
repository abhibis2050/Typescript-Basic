import React, { createContext, useReducer } from "react";
import "./App.css";
import Profile from "./components/Profile";
import ProfileDefineComponent from "./components/ProfileDefineComponent";
import ProfileWithType from "./components/ProfilewithType";
import ProfileWithTypeDes from "./components/ProfilewithType Destructuring";
import ProfileZero from "./components/ProfileZero";
import Todo from "./components/Todo";

import { reducer, initialState, actionType } from "./components/reducer";
import User from "./components/User";

type ctxtype={
  state:typeof initialState,
  dispatch: React.Dispatch<actionType>
}

export const UserContext = createContext({} as ctxtype)



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* <Profile name="Abhisek" age={10}/> */}
      {/* <ProfileZero name="Abhisek" age={10} /> */}
      {/* <ProfileWithType name="Abhisek" age={10}/> */}
      {/* <ProfileWithTypeDes name="Abhisek" age={10} favSubject="coputer Science">
      coader
    </ProfileWithTypeDes> */}
      {/* <ProfileDefineComponent  name="Abhisek" age={10} favSubject="coputer Science">
      coader
    </ProfileDefineComponent> */}

      {/* <Todo/> */}

      {/* <reducer />  */}

    <UserContext.Provider value={{state,dispatch}}>
    <User/>
    </UserContext.Provider>
       
      
    </div>
  );
}

export default App;
