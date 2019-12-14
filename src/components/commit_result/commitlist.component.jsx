import React from 'react';
import Commits from './commitresult.component';

const CommitList = ({commits}) => {
    const branches = commits.map(({commit:{message, author:{name,date}, tree:{sha}}, author:{avatar_url}}) => {
        return(
            <Commits
             commitdate={date}
             commitmessage={message} 
             authorname={name}
             commithash={sha}
             id={sha}
             authorpicture={avatar_url}
            />
        )
    })
   return(
    <div>
        <h1 className="f2">Commits:</h1>
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
           {branches}
        </ul>
    </div>
   ) 
}

export default CommitList;