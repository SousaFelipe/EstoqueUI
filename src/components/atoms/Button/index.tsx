import React, { useEffect, useState } from 'react'

import TypeButton from './types'

import './style.css'



export default function Button (props : any) : JSX.Element {


    const [button, setButton] = useState<TypeButton>()


    useEffect(() => {

        setButton({
            color: props.color || 'default',
            size: props.size || 'md',
            block: props.block ? 'block' : ''
        })

    }, [
        props.color,
        props.size,
        props.block
    ])


    return (
        <button
            className={`${ button?.color } ${ button?.size } ${ button?.block } ${ props.className }`}
            onClick={ props.onClick }>

            { props.children }

        </button>
    )
}
