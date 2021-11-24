import React from 'react'



export function CardHeader () {
    return (
        <div className="card-header">

        </div>
    )
}


export function CardBody () {
    return (
        <div className="card-body">

        </div>
    )
}


export function CardFooter () {
    return (
        <div className="card-footer">

        </div>
    )
}


export default function Card (props: any) : JSX.Element {


    return (
        <div className="card">
            { props.children }
        </div>
    )
}
