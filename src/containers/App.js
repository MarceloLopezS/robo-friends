import React, { Component } from 'react';
import './App.css';
import Brand from '../components/Brand';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import CardGrid from '../components/CardGrid';
import ContactInfo from '../components/ContactInfo';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (inputEvent) => {
        this.setState({
            searchField: inputEvent.target.value,
        })
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(
            robot => robot.name.toLowerCase().includes(
                searchField.toLowerCase()
            )
        );
        return (
            <React.Fragment>
                <header>
                    <Brand />
                    <SearchBox 
                        searchChange={this.onSearchChange}
                        searchField={searchField}
                    />
                </header>
                <main>
                    {
                        robots.length > 0 ?
                        <CardGrid robots={filteredRobots} /> : 
                        <Loader />
                    }
                </main>
                <footer>
                    <ContactInfo />
                </footer>
            </React.Fragment>
        )
    }
}

export default App