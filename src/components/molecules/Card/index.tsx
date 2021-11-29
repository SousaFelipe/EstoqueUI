import React from 'react'

import './style.css'



export function CardHeader (props: any) : JSX.Element  {

    return (
        <div style={{ ...props.style }}
            className={`card-header ${ props.className || '' }`}>
            { props.children }
        </div>
    )
}



export function CardBody (props: any) : JSX.Element  {

    return (
        <div style={{ ...props.style }}
            className={`card-body ${ props.className || '' }`}>
            { props.children }
        </div>
    )
}



export function CardFooter (props: any) : JSX.Element  {

    return (
        <div style={{ ...props.style }}
            className={`card-footer ${ props.className || '' }`}>
            { props.children }
        </div>
    )
}



export function Card (props : any) : JSX.Element {

    return (
        <div style={{ ...props.style }}
            className={`card ${ props.className || '' }`}>
            { props.children }
        </div>
    )
}
