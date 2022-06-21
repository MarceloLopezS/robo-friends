import React, { Component } from 'react';
import './App.css';
import Brand from '../components/brand/Brand';
import SearchBox from '../components/searchbox/SearchBox';
import Scrollable from '../components/scrollable/Scrollable';
import Loader from '../components/loader/Loader';
import CardGrid from '../components/cardGrid/CardGrid';
import ContactInfo from '../components/contactInfo/ContactInfo';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount() {
        const fetchUsers = async () => {
            try{
                const response = await fetch('https://dummyjson.com/users');
                const result = await response.json();
                const sortedUsers = result.users.sort((a,b) => 
                    (a.firstName < b.firstName) ? -1 : 
                    (a.firstName > b.firstName) ? 1 : 0
                );
                this.setState({robots: sortedUsers.map(user => {
                    const { 
                        id, 
                        firstName, 
                        maidenName, 
                        lastName, 
                        gender,
                        age,
                        email 
                    } = user;
                    return {
                        id: id,
                        name: 
                        `${firstName} ${maidenName} ${lastName}`,
                        age: age,
                        gender: gender,
                        email: email
                    }
                })})
            } catch (err) {
                console.log(`Oops ${err}`);
            }
        }

        fetchUsers()
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