import React, { useState } from "react";
// import './Table.css';

const Table = (props) => {
  const [name,update]=useState('')
  const [age,updatea]=useState('')
  const [phone,updateb]=useState('')
  const [email,updatec]=useState('')
  console.log(props.list)
  const List = props.list.map((list) => {  
    console.log(list.items);
    return (
      <>
        <tr>
          <td>{list.name}</td>
          <td>{list.age}</td>
          <td>{list.phone}</td>
          <td>{list.email}</td>
          
          
        </tr>
      </>
    );
  });
  return (
    <>
      <table className="table">
        <tr>
          <th>name</th>
          <th>Age</th>
          <th>Ph no.</th>
          <th>Email</th>
          
        </tr>

        {List}
      </table>
      <h2>Add contact</h2>
        <input type="text" placeholder="Enter your name" onChange={(e)=>update(e.target.value)}/>
        <input type="number" placeholder="Enter your age" onChange={(e)=>updatea(e.target.value)}/>
        <input type="number" placeholder="Enter your phone number" onChange={(e)=>updateb(e.target.value)}/>
        <input type="email" placeholder="Enter your email" onChange={(e)=>updatec(e.target.value)}/>
        <button type="submit" onClick={()=>{props.list.push({name,age,phone,email});
        update('');
        updatea('');
        updateb('');
        updatec('');}} >add</button>
        {/* <button type="submit" onClick={()=>{props.list.push({age});update('')}}>add</button> */}
        
    </>
  );
};
export default Table;

