import React from 'react';
import './branchresult.styles.css'

const BranchView = ({name, id, click}) => {
    return(
      <div>     
        <li onClick={click} id={id} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                <div className="pl3 flex-auto">
                    <span className="f6 db black-70"><strong>{name}</strong></span>
                </div>
                <div>
                    <h4 onClick={click} id={id} className="f6 link blue hover-dark-gray get-commit">Get Commits</h4>
                </div>
        </li>        
      </div>
   )
}

export default BranchView;