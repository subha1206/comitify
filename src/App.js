import React from 'react';
import SearchBox from './components/searchbox/searchbox.component'
import BranchView from './components/branch_result/branchresult.component'
import './App.css';
import 'tachyons'


function App() {
  return (
    <div className="App">
      <SearchBox />
      <BranchView />
    </div>
  );
}

export default App;
