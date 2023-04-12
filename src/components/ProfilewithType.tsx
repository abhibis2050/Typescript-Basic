import React from 'react'

type ProfileProps={
  name:String,
  age:number
  favSubject?:string
}

const ProfileWithType = (props:ProfileProps) => {
  return (
    <div>
      <h3>Profile with type </h3>
        <h4>Name: {props.name}</h4>
        <h4>Age: {props.age}</h4>
        <h4>Age: {props.favSubject}</h4>
    </div>
    
  )
}

export default ProfileWithType