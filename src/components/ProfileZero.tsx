import React from 'react'



const ProfileZero = (props:{name:string,age:number}) => {
  return (
    <div> 
        <h3>Profile with normal props</h3>
        <h4>Name: {props.name}</h4>
        <h4>Age: {props.age}</h4>
    </div>
    
  )
}

export default ProfileZero