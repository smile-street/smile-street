import React from "react";

const UserTable = props => (
  <table>
    <thead>
     
    </thead>
    <tbody>
    <tr>
       
        <td>LastName</td>
        <td>Email</td>
        <td>Contact Number</td>
      </tr>
    
    
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            
            <td>{user.firstName}</td>
    
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.contactNumber}</td>
            <td>{user.password}</td>
            
           

           
            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>











              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>








        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
