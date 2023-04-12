import React from 'react'

interface ProfileProps{
  name:String,
  age:number
}

const Profile = (props:ProfileProps) => {
  return (
    <div>
      <h3>Profile with interface</h3>
        <h4>Name: {props.name}</h4>
        <h4>Age: {props.age}</h4>
    </div>
    
  )
}

export default Profile