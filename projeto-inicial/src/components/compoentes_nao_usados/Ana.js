import React, { Component } from 'react';

import User from './Usuario';
import PhotoUser from '../assents/user.png';

class Ana extends Component {
  render() {
    return (
      <div>
        Sou um componente chamado Ana
        <User name="Ana B" photo={ PhotoUser } />
        <User name="Ana"  />
        <User name="Ana G" photo={ PhotoUser } />
      </div>
    );
  }
}

export default Ana;
