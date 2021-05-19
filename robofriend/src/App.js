import React, { useState, useEffect} from 'react';
import {robots} from './robots';
import SearchBox from './SearchBox';
import CardList from './CardList';


function App() {
  
  //constructor(){
    // super()
    // this.state={
    //   robots: robots,
    //   searchField: ''
    // }
    
  const [robot,setRobot]= useState(robots)
  const [searchField,setsearchField]= useState('')

  const onSearchChange = (event) =>{

    setsearchField({searchField: event.target.value});
    console.log(event.target.value);

    
  }

    const filteredRobot= robot.filter(robot=>
      {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })

    return (
      <div className='tc'>
        <h1>Robot Friends</h1>
        <SearchBox SearchChange={onSearchChange}/>
        <CardList robots={filteredRobot}/>
      </div>
    )
  
}


  


export default App;