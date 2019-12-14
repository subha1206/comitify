import React from 'react';
import './branchresult.styles.css'

const BranchView = ({name, id, click}) => {
    return(
      <div>     
        <li onClick={click} id={id} class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                <div class="pl3 flex-auto">
                    <span class="f6 db black-70"><strong>{name}</strong></span>
                </div>
                <div>
                    <h4 onClick={click} id={id} class="f6 link blue hover-dark-gray">Get Commits</h4>
                </div>
        </li>        
        {/* <li id={id} onClick={click} className="ph3 pv3 bb b--light-silver" ><strong id={id}>{name}</strong></li> */}
      </div>
   )
}

export default BranchView;