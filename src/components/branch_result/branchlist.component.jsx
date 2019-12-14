import React from "react"
import BranchView from './branchresult.component'


const BranchList = ({color, click}) => {
    const branches = color.map(({name, commit:{sha}}) => {
        return(
            <BranchView 
             name={name}
             id={sha}
             click={click}
            />
        )
    })
   return(
    <div>
        <h1 className="f2">Branches:</h1>
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
           {branches}
        </ul>
    </div>
   ) 
}

export default BranchList;