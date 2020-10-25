import React from 'react'

import "./users-table.styles.scss";

const UsersTable = ({allRegisteredUsers}) => (

    <div className="users-table">
        {!allRegisteredUsers 
        ? <h3 className="no-users">Looks empty here, please Sign Up</h3> 
        : <table className="table" >
            <tr>
                <th>Name</th>
                <th>Last Name</th> 
                <th>Email</th>
                <th>Address</th>
            </tr>
        
            {!allRegisteredUsers 
            ? <div>No Users Sorry</div> 
            : allRegisteredUsers.map((u, index) => (
                <tr key={index}>
                <td>{u.name}</td>
                <td>{u.lastName}</td>
                <td>{u.email}</td>
                <td>{u.location}</td>
            </tr> 
            ))}     
        </table> 
    }
      
    </div>
    )


export default UsersTable;