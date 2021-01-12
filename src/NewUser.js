import React from 'react'

class NewUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }

    getUserData = () => {
        fetch("https://randomuser.me/api/")
            .then(data => data.json())
            .then(result => {
                const user = result.results[0]
                this.setState({
                    name: user.name.first,
                    age: user.dob.age,
                    email: user.email
                })
            })
    }

    handleAddClick = () => {
        const {name, age, email} = this.state
        this.props.pushToUsersList({name, age, email})
        // this.props.pushToUsersList(this.state)
    }

    render() {
        return (
            <>
                <h4>User Details</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* Coming from the state object */}
                            <td>{this.state.name}</td>
                            <td>{this.state.age}</td>
                            <td>{this.state.email}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.handleAddClick}>Add To Cool Dudes</button>
                <button onClick={this.getUserData}>New User</button>
            </>
        )
    }
}

export default NewUser