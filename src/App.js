import React from 'react'
import NewUser from './NewUser.js'
import CoolDudes from './CoolDudes.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [
                {
                    name: "Glen",
                    age: "28",
                    email: "glen@email.com"
                }, 
                {
                    name: "Paul",
                    age: "19",
                    email: "paul@email.com"
                }, 
                {
                    name: "Luke",
                    age: "30",
                    email: "luke@email.com"
                }, 
            ]
        }
    }

    pushToUsersList = (newUserData) => {
        const newUsers = this.state.users
        newUsers.push(newUserData)
        this.setState({users: newUsers})
    }

    render() {
        return (
           <div>
               <CoolDudes users={this.state.users} />
               <NewUser pushToUsersList={this.pushToUsersList} />
           </div>
       )
    }
}

export default App