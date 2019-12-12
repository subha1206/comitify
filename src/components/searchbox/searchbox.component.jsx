import React from 'react';

const SearchBar = () => {
   return(
       <div>
        <form className=" mw7 center pa4">
            <div>
                <input className="f6 f5-l input-reset ba pv3 fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2 br--left-ns" placeholder="Your Email Address" type="text" name="email-address" id="email-address"/>
                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2 br--right-ns" type="submit" value="Subscribe"/>
            </div>
        </form>
       </div>
   )
}

export default SearchBar;