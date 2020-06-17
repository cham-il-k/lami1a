import React  from 'react'
export function asyncFunction ({ dispatch }) {
    return next => action => {
        console.log(action);
        next(action);
    };
}

