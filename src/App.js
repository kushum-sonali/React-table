// import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import list from './Data/data';
// import React ,{useState} from "react";
import Searching from "./components/Filter";
function Student(){
 
  return (
    <>
   <Searching/>
    <Table list={list}/>
    </>
  )
}
export default Student;