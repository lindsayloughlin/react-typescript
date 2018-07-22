import * as React from 'react';
import './App.css';

import Clock from './component/Clock/Clock'
import Hello from './component/Hello/Hello'
import ListView from './component/ListView/ListView'
import MeatMenu from './component/MeatMenu/MeatMenu'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">        
        <Hello name={'hello'} enthusiasmLevel={1} />
        <Clock date={new Date()} />
        <MeatMenu />

        </header>
        <ListView name={"test list view"} />
      </div>
    );
  }
}

export default App;
