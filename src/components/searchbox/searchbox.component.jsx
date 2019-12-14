import React from 'react';

const SearchBar = ({onsubmit, onchange}) => {
   return(
       <div>
            <section class="ph3 ph5-ns pv5">
                <article class=" center br2 ba b--light-blue bg-lightest-blue">
                    <div class="dt-ns dt--fixed-ns w-100">
                        <div class="pa3 pa4-ns dtc-ns v-mid">
                            <div>
                                <h2 class="fw4 blue mt0 mb3">Commitify </h2>
                                <p class="black-70 measure lh-copy mv0">
                                This Simple React application will help you to find latest branch and commits of an organization.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        <form 
        className=" mw8 center pa4"
        onSubmit={onsubmit}
        >
            <div>
                <input 
                className="f6 f5-l input-reset ba pv3 fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2 br--left-ns" 
                placeholder="Your Email Address" 
                type="text" 
                name="email-address" 
                id="email-address"
                onChange={onchange}

                />
                <input 
                className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2 br--right-ns" 
                type="submit" 
                value="Subscribe"/>
            </div>
        </form>

       </div>
   )
}


export default SearchBar;