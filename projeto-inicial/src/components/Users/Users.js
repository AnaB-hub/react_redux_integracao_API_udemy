import React, { Component } from 'react';

class Users extends Component {
  render() {

    let list = [
      {
        id: '1',
        name: 'Ana',
        email: 'ana@gmail.com'
      },
      {
        id: '2',
        name: 'Jão',
        email: 'jao@gmail.com'
      }
    ]

    return (
      <div>
        <table>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
          {list.map((item) => {
            return <tr key={item.id}>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.email}
                </td>
              </tr>
          })}
        </table>
      </div>
    );
  }
}

export default Users;
