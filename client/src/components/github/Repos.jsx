import React from "react";
import GithubRepo from "./GithubRepo";



class Repos extends React.Component{
   constructor(){
      super();
      this.state={};
   }
   fetchData(){
      var apiToken = "9b6e73686a7cf06585e9acad5ec28140bdb0ea7f";
      var url = `https://api.github.com/users/${this.props.match.params['username']}/repos?access_token=${apiToken}`;
      fetch(url)
         .then(response => response.json())
         .then(
            repo => {
               this.setState({
                  repo: repo
               })
            }
         )
   }
   componentDidMount(){
      this.fetchData();
   }
   componentDidUpdate(prevProps, prevState){
      if(prevProps.username !== this.props.match.params['username']){
         this.fetchData();
      }
   }
   render(){
      if(!this.state.repo){
         return <div>LOADING repos...</div>
      }
      return(
         <div className="repo-page">
            <h3>{this.props.match.params['username']} repos include </h3>
            
            <ul>
               <table>
                  {this.state.repo.map((repoInfo, i) => <GithubRepo repo={repoInfo} key={i}/>)}
               </table>
            </ul>
         </div>
      )
   }
}

export default Repos;
