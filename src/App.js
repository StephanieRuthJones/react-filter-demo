import React from 'react';
import './App.css';

import FilterForm from './components/FilterForm'
import VisibleDogs from './components/VisibleDogs'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dogData: [],
      filteredDogs: []
    }
  }

  componentDidMount() {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then(response => response.json())
      .then(data => this.setState({ dogData: data }))
  }

//filterDogs function
  filterDogs = (dogFilter) => {
    const filteredDogs = this.state.dogData.filter(dog => {
      const dogName = dog.name.toLowerCase()
      return dogName.includes(
        dogFilter.toLowerCase()
      )
    })

    this.setState({
      filteredDogs
    })
  }


  render() {
    const visibleDogs = this.state.filteredDogs.map(dog => {
      return <VisibleDogs name={dog.name} purpose={dog.bred_for} />
    })

    return (
      <div className="App">
        <FilterForm filterDogs={ this.filterDogs } />
        { visibleDogs }
      </div>
    );
  }
}

export default App;
