import React from 'react'

import './style.css'



export default function Text (props : any) : JSX.Element {


    return (
        <span className={ `text ${ props.color || 'default' } ${ props.size || 'md' } ${ props.align || 'start' }` }>
            { props.children }
        </span>
    )
}
