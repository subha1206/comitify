import React from 'react'
import './commitresult.styles.css'

const Commits = ({id, authorname, authorpicture,commitmessage,commitdate}) => {
    return(
       <div>
            <li id={id} className="flex items-center lh-copy pa3 ph0-l bb b--black-10 branchlist">
              <img className="w2 h2 w3-ns h3-ns br-100" src={authorpicture} alt=""/>
                <div className="pl3 flex-auto">
                    <span className="f6 db black-70"><strong>name: {authorname}</strong></span>
                    <span className="f6 db black-70"><strong>Message:</strong>{commitmessage}</span>
                </div>
                <div>
                    <p className="f6 blue hover-dark-gray-pointer">{commitdate}</p>
                </div>
            </li>
       </div> 
    )
}

export default Commits;