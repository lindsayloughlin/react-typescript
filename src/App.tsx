import * as React from 'react';
import './App.css';
import './ReactSelect.css'

import Clock from './component/Clock/Clock'
import Hello from './component/Hello/Hello'
import ListView from './component/ListView/ListView'

import MeatButton from './component/MeatButton/MeatButton'
import MeatMenu from './component/MeatMenu/MeatMenu'
import MeatSelector from './component/MeatSelector/MeatSelector'
import MeatVector from './component/MeatVector/MeatVector'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">        
        <Hello name={'hello'} enthusiasmLevel={1} />
        <Clock date={new Date()} />
        <MeatMenu />


        </header>        
        <MeatVector name={'somename'}/>        
        <ListView name={"test list view"} />
        <MeatSelector state={'notstate'}/>
        <MeatButton />
      </div>
    );
  }
}

export default App;
