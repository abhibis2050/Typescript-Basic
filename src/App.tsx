import React from 'react';
import './App.css';
import Profile from './components/Profile';
import ProfileDefineComponent from './components/ProfileDefineComponent';
import ProfileWithType from './components/ProfilewithType';
import ProfileWithTypeDes from './components/ProfilewithType Destructuring';
import ProfileZero from './components/ProfileZero';

function App() {
  return (
    <div>
    {/* <Profile name="Abhisek" age={10}/> */}
    {/* <ProfileZero name="Abhisek" age={10} /> */}
    {/* <ProfileWithType name="Abhisek" age={10}/> */}
    {/* <ProfileWithTypeDes name="Abhisek" age={10} favSubject="coputer Science">
      coader
    </ProfileWithTypeDes> */}
    <ProfileDefineComponent  name="Abhisek" age={10} favSubject="coputer Science">
      coader
    </ProfileDefineComponent>
    </div>
  );
}

export default App;
