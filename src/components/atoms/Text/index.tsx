import React, { useEffect, useState } from 'react'

import TypeText from './types'

import './style.css'



export default function Text (props: any) : JSX.Element {


    const [text, setText] = useState<TypeText>()


    useEffect(() => {

        setText({
            color: props.color || 'default',
            size: props.size || 'md',
            align: props.align || 'start'
        })

    }, [
        props.color,
        props.size,
        props.align
    ])


    return (
        <span
            style={{ ...props.style }}
            className={`text ${ text?.color } ${ text?.size } ${ text?.align } ${ props.className || '' }`}>

            { props.children }

        </span>
    )
}
