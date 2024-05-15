import React from 'react'
import '../Styles/Display.css'
import { useState } from 'react'
import Axios from 'axios'
const Display = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[mno,setMno]=useState(0);
  const[dob,setDob]=useState(0);
  const[databaseList,setDatabaseList]=useState([]);
  const[newEmail,setNewEmail]=useState("")
  
  const addToCreate=()=>{
    Axios.post('http://localhost:3007/create',{
      name:name,
      email:email,
      mno:mno,
      dob:dob}) 
      .then(()=>{
         setDatabaseList([
        ...databaseList,
        {
          name: name,
         email:email,
          mno: mno,
         dob:dob,
        },
      ]);
      })
  }
  const getDatabase = () => {
    Axios.get("http://localhost:3007/databases").then((response) => {
      setDatabaseList(response.data);
    });
  };

const updateEmail=(id)=>{
  Axios.put("http://localhost:3007/update",{email:newEmail,id:id}).then((response)=>{
      setDatabaseList(databaseList.map((val)=>{
        return val.id==id ? {id:val.id,name:val.name,email:newEmail,mno:val.mno,dob:val.dob} : val
  }))
  })
}
const deleteUser = (id) => {
  Axios.delete(`http://localhost:3007/delete/${id}`).then((response) => {
    setDatabaseList(
      databaseList.filter((val) => {
        return val.id != id;
      })
    );
  });
};
  return (
    <div className='display'>
      <div className='information'>
        
      <label>Name:</label>
      <input type='text' onChange={(event)=>{setName(event.target.value)}}></input>
      <label>Email:</label>
      <input type='email' onChange={(event)=>{setEmail(event.target.value)}}></input>
      
      <label>Mobile number:</label>
      <input type='tel' onChange={(event)=>{setMno(event.target.value)}}></input>
      <label>DOB:</label>
      <input type='date' onChange={(event)=>{setDob(event.target.value)}}></input>
      <button className='database' onClick={addToCreate}>Add database</button>
      
      <hr/>
      <div className='databases'>
      <button onClick={getDatabase}>Show database</button>
      
      {databaseList.map((val,key)=>{
        return <div className='list'>
         <div>
                <h3>Name: {val.name}</h3>
                <h3>Email: {val.email}</h3>
                <h3>Phone: {val.mno}</h3>
                <h3>DOB: {val.dob}</h3>          
          </div>
          <div>
          
                  <input type='text' placeholder='Update Email' 
                  onChange={(event)=>{setNewEmail(event.target.value)}}/>
                  
                  <button onClick={()=>{updateEmail(val.id)}}>Update</button>
                  <button onClick={()=>{deleteUser(val.id)}}>Delete</button>
                </div>
        </div>
      })}
      </div>
    </div>
    </div>
  )
}
export default Display