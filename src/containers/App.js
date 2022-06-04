import React, { Component } from 'react';
import './App.css';
import Brand from '../components/Brand';
import SearchBox from '../components/SearchBox';
import Scrollable from '../components/Scrollable';
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
        fetch('https://dummyjson.com/users')
            .then(response =>  response.json())
            .then(users => {
                const sortedUsers = users.users.sort((a,b) => 
                    (a.firstName < b.firstName) ? -1 : 
                    (a.firstName > b.firstName) ? 1 : 0
                );
                this.setState({robots: sortedUsers.map(user => {
                    const { 
                        id, 
                        firstName, 
                        maidenName, 
                        lastName, 
                        email 
                    } = user;
                    return {
                        id: id,
                        name: 
                        `${firstName} ${maidenName} ${lastName}`,
                        email: email
                    }
                })})
            })
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
                        <Scrollable>
                            <CardGrid robots={filteredRobots} />
                        </Scrollable> : 
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