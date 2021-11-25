import React from 'react'

import './style.css'



export function CardHeader (props: any) : JSX.Element  {
    return (
        <div className={`card-header ${ props.className }`}>
            { props.children }
        </div>
    )
}



export function CardBody (props: any) : JSX.Element  {
    return (
        <div className={`card-body ${ props.className }`}>
            { props.children }
        </div>
    )
}



export function CardFooter (props: any) : JSX.Element  {
    return (
        <div className={`card-footer ${ props.className }`}>
            { props.children }
        </div>
    )
}



export function Card (props : any) : JSX.Element {
    return (
        <div className={`card ${ props.className }`}>
            { props.children }
        </div>
    )
}
