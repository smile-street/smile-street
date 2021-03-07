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
             <td>First Name:</td>
            <td>{user.firstName}</td>
    
            <td>{user.firstName}</td>
            z
           

           
            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(user.id)}
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
