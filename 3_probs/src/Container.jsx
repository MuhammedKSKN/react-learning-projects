import React from 'react'
import Product from './Product'

function Container({ children }) {
    return (
        <div>
            <div>
                Container
            </div>
            {children}
        </div>
    )
}

export default Container