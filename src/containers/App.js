import React, { Component } from "react";
import CardParent from "../components/CardParent";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            search: ""
        };
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.search.toLowerCase()));
        if(filteredRobots.length === 0) {
            return(
                <div className='tc'>
                    <h1>Loading...</h1>
                    <p>please wait!</p>
                </div>
            );
        } else {
            return(
                <div className='tc'>
                    <h1 className='f2'>Super Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardParent robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;