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
    this.state ={
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
  componentDidMount() {
    if(!this.state.isLoading ){
    console.log(this.state.branches)
    }
  }
    render(){
      if(this.state.isLoading){
      console.log(this.state.iscommitsloaded);
      console.log(this.state.isLoading)
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
  
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       searchTerm:'',
//       branches : [],
//       commits : [],
//       color: 'blue'
//     }
//     this.handleSearch = this.handleSearch.bind(this)
//     this.getCommit = this.getCommit.bind(this)
//   }

//   handleSearch = (e) => {
//       this.setState({searchTerm: e.target.value});
//       console.log(this.state.searchTerm);    
//    }
//    getBranch = (e) => {
//     e.preventDefault()
//     fetch(`https://api.github.com/repos/${this.state.searchTerm}/branches`)
//     .then(response => response.json())
//     .then(branch => this.setState({branches:branch, searchTerm:this.state.searchTerm}))
//     .then(console.log(this.state.branches))
//   }

//  getCommit = (event) => {
//     console.log(event.target.id);
//     fetch(`https://api.github.com/repos/${this.state.searchTerm}/commits?sha=${event.target.id}`)
//     .then(response => response.json())
//     .then(json => this.setState({commits:json, branches:this.state.branches}))
//     .then(console.log(this.state.branches))
//  }

//   render(){
//     const {branches, searchTerm} = this.state
//     const hello = this.state.commits
//     console.log(searchTerm)  
//   return (
//     <div className="App">
//       <SearchBox onFromSubmit={this.getBranch} onChange={this.handleSearch}/>
//       <div>             
//        <article className="pa3 pa5-ns">
//         <h1 className="f3 bold center mw6">Branches</h1>
//         <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
//         {this.state.branches !==null 
//          ?  branches.map((user, i) =>  <li onClick={this.getCommit} className="ph3 pv3 bb b--light-silver" key={i} id={user.commit.sha}><strong>{user.name}</strong><br/></li>) 
//          : <div><h1>Hello World</h1></div>} 
//         </ul>
//       </article>
//       </div>
//       <Commits color={hello} />
//     </div>
//   )
//   }

// constructor(props){
//   super(props);
//   this.state ={
//     searchTerm:'',
//     branches:[],
//     isLoading: true
//   }
//   this.handleSearch = this.handleSearch.bind(this)
//   this.getBranch = this.getBranch.bind(this)
// }
// handleSearch = (e) => {
//   this.setState({searchTerm: e.target.value});
//   console.log(this.state.searchTerm);    
// }
// getBranch (e){
// e.preventDefault()
// fetch(`https://api.github.com/repos/${this.state.searchTerm}/branches`)
// .then(response => response.json())
// .then(branch => this.setState({branches:branch, isLoading:false}))
// .then(console.log(this.state.branches))
// }
// componentDidMount() {
//   if(!this.state.isLoading ){
//   console.log(this.state.branches)
//   }
// }
//   render(){
//     if(!this.state.isLoading){
//     console.log(this.state.branches[0].commit.sha);
//     return(
//       <React.Fragment>
//       <BranchList color={this.state.branches} />
//       </React.Fragment>
//     )
//   }
//   return(
//     <SearchBar onsubmit={this.getBranch} onchange={this.handleSearch}/>
//   )
// }
// }

// export default App;
