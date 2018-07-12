import React from 'react';
import auth from '../hoc/auth';

const MovieQuote = props => {
    return(
        <div>
            <h1 className="text-center">
                Movie Quote
            </h1>
            <h4>
                "To be, or not to be?"
            </h4>
        </div>
    )
}

export default auth(MovieQuote);