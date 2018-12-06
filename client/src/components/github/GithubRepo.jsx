import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

class GithubRepo extends React.Component{
   constructor(){
      super();
      this.state={};
   }

   static propTypes = {
      repo: PropTypes.object.isRequired
   }

   render(){
      return(
         <tr>
            <td>
               <a href={this.props.repo.url}>
                  <p>{this.props.repo.full_name}</p>
               </a>
            </td>
            <td>
               <Button variant="contained" color="primary" component={Link} to="/open-collective">
                  Donate Ether
               </Button>
            </td>
         </tr>
      )
   }
}



export default GithubRepo;
