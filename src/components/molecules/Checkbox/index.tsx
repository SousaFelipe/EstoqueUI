import React, { useEffect, useState } from 'react'

import Text from '../../atoms/Text'

import TypeCheck from './types'

import './style.css'



export default function Checkbox (props: any) : JSX.Element {


    const [check, setCheck] = useState<TypeCheck>()


    useEffect(() => {

        setCheck({
            text: props.label.text || '',
            textSize: props.label.size || 'md',
            textColor: props.label.color || 'primary',
            selectColor: props.color || 'brand'
        })

    }, [
        props.label,
        props.color
    ])


    return (
        <label style={{ ...props.style }} className="container">
            <input type="checkbox" className={ check?.selectColor } />
            <span className="checkmark"></span>
            <Text color={ check?.textColor } size={ check?.textSize }> { check?.text } </Text>
        </label>
    )
}
