import React from 'react'

function P({children,...props} ) {
    return <p {...props} >{children}</p>
}
export default P
