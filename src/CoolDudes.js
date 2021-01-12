import React from 'react'

function CoolDudes(props) {
    return (
        <>
            <h2>Cool Dudes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user,index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default CoolDudes