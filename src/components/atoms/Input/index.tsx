import React from 'react'

import './style.css'



export default function Input (props : any) : JSX.Element {


    function shouldBeHaveLabel () {
        return <></>
    }


    return (
        <div className={ `input-container ${ (props.color || 'default') }` }>

            { shouldBeHaveLabel() }

            <input
                type={ (props.type || 'text') }
                className={ props.className }
                placeholder={ (props.placeholder || '') }
                onChange={ props.onChange } />

        </div>
    )
}
