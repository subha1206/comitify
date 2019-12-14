import React from 'react';
import BranchList from './components/branch_result/branchlist.component'
import SearchBar from './components/searchbox/searchbox.component';
import CommitList from './components/commit_result/commitlist.component'
import './App.css';
import 'tachyons'

// Photo by Lum3n.com from Pexels


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm:'',
      branches:[],
      isLoading: false,
      isbranchLoaded: false,
      iscommitsloaded:false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.getBranch = this.getBranch.bind(this)
  }
  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value});   
  }
  getBranch (e){
  e.preventDefault()
  fetch(`https://api.github.com/repos/${this.state.searchTerm}/branches`)
  .then(response => response.json())
  .then(branch => this.setState({branches:branch,isLoading:true}))
  .then(console.log())
  }
  getCommit = (event) => {
        console.log(event.target.id);
        fetch(`https://api.github.com/repos/${this.state.searchTerm}/commits?sha=${event.target.id}`)
        .then(response => response.json())
        .then(json => this.setState({commits:json, branches:this.state.branches, isLoading:false, iscommitsloaded:true}))
     }
  // componentDidMount() {
  //   if(!this.state.isLoading ){
  //   console.log(this.state.branches)
  //   }
  // }
    render(){
      if(this.state.isLoading){
      return(
        <React.Fragment >
        <div className="abc">
        <BranchList color={this.state.branches} click={this.getCommit}/>
        </div>
        </React.Fragment>
      )
    }if(this.state.iscommitsloaded){
      console.log(this.state.commits)
      return(
        <React.Fragment >
          <div className="abc">
            <BranchList color={this.state.branches} click={this.getCommit} />
            <CommitList commits={this.state.commits} />
          </div>
        </React.Fragment>
      )
    }
    else return(
      <div>
      <SearchBar onsubmit={this.getBranch} onchange={this.handleSearch}/>
      </div>
    )
  }
    
  }
  export default App;
  
