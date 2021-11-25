import React, { useEffect, useState } from 'react'

import { TypeFlex } from './types'

import './style.css'



export default function Flex (props : any) : JSX.Element {


    const [flex, setFlex] = useState<TypeFlex>()
    const [className, setClassName] = useState<string>('')


    useEffect(() => {

        setFlex({
            direction: props.direction || 'row',
            justify: props.justify || 'start',
            align: props.align || 'start'
        })

        setClassName(
            `flex-${ flex?.direction } justify-${ flex?.justify } align-${ flex?.align } ${ props.className }`
        )

    }, [flex, className])


    return (
        <div className={ className }>
            { props.children }
        </div>
    )
}
