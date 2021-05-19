import React, {Component} from 'react';
import {robots} from './robots';
import SearchBox from './SearchBox'
import CardList from './CardList';


class App extends Component {
  
  constructor(){
    super()
    this.state={
      robots: robots,
      searchField: ''
    }
    
  }

  onSearchChange = (event) =>{

    this.setState({searchField: event.target.value})
    console.log(event.target.value);

    
  }

  render (){
    const filteredRobot= this.state.robots.filter(robots=>
      {
        return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
      })

    return (
      <div className='tc'>
        <h1>Robot Friends</h1>
        <SearchBox SearchChange={this.onSearchChange}/>
        <CardList robots={filteredRobot}/>
      </div>
    )
  }
}

  


export default App;