import React from 'react'

import TypeInput from './types'

import './style.css'



export default function Input (props: any) : JSX.Element {


    const [input, setInput] = React.useState<TypeInput>()


    React.useEffect(() => {

        setInput({
            type: props.type || 'text',
            color: props.color || 'default',
            size: props.size || 'md'
        })

    }, [
        props.type,
        props.color,
        props.size
    ])


    return (
        <input style={{ ...props.style }}
            type={ input?.type }
            className={`${ input?.color } ${ input?.size }`}
            placeholder={ (props.placeholder || '') }
            onChange={ props.onChange } />
    )
}
