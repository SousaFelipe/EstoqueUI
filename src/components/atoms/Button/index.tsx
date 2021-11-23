import React from 'react'

import './style.css'



export default function Button (props : any) : JSX.Element {
    return (
        <button { ...props }>{ props.children }</button>
    )
}
