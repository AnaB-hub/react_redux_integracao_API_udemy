import React, { Component } from 'react';

class List extends Component {
  render() {

    let list = [
      {
        name: 'Ana',
        email: 'ana@gmail.com'
      },
      {
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
            return <tr>
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

export default List;
