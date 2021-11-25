import React, { useState, useEffect } from 'react'

import './style.css'



export function CardHeader (props: any) : JSX.Element  {


    const [className, setClassName] = useState<string>()


    useEffect(() => {

        setClassName(`card-header ${ props.className || '' }`)

    }, [])


    return (
        <div className={ className }>
            { props.children }
        </div>
    )
}



export function CardBody (props: any) : JSX.Element  {


    const [className, setClassName] = useState<string>()


    useEffect(() => {

        setClassName(`card-body ${ props.className || '' }`)

    }, [])


    return (
        <div className={ className }>
            { props.children }
        </div>
    )
}



export function CardFooter (props: any) : JSX.Element  {


    const [className, setClassName] = useState<string>()


    useEffect(() => {

        setClassName(`card-footer ${ props.className || '' }`)

    }, [])


    return (
        <div className={ className }>
            { props.children }
        </div>
    )
}



export function Card (props : any) : JSX.Element {


    const [className, setClassName] = useState<string>()


    useEffect(() => {

        setClassName(`card ${ props.className || '' }`)

    }, [])


    return (
        <div className={ className }>
            { props.children }
        </div>
    )
}
