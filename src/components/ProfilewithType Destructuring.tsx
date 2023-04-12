import React from 'react'

type ProfileProps={
  name:String,
  age:number
  favSubject?:string
  children?:React.ReactNode
}

const ProfileWithTypeDes = ({name,age,favSubject,children}:ProfileProps) => {
  return (
    <div>
      <h3>Profile with type Destructuring</h3>
        <h4>Name : {name}</h4>
        <h4>Age : {age}</h4>
        <h4>Subject : {favSubject}</h4>
        <h4><span style={{color:"red"}}>Profession : {children}</span></h4>
    </div>
    
  )
}

export default ProfileWithTypeDes