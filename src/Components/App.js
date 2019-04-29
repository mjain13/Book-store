import React, { Component } from 'react';

import Add from '../Components/Add';
import List from '../Components/List';

class App extends Component {
  render(){
    return (
      <div className={'container-fluid'}>
        <div className={'row border-bottom'}>
          <div className={'col-md-5 pt-5'}>
            <h3>Books</h3>
            <Add />            
          </div>
          <div
            className={'col-md-7 pt-5 border-left'}>
            <h3>{'Book List'}</h3>
            <List />
          </div>
        </div>
      </div>
      );
  }
}

export default App;
