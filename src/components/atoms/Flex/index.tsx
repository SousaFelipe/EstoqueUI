import React, { useEffect, useState } from 'react'

import { TypeFlex } from './types'

import './style.css'



export default function Flex (props : any) : JSX.Element {


    const [flex, setFlex] = useState<TypeFlex>()


    useEffect(() => {

        setFlex({
            direction: props.direction || 'row',
            justify: props.justify || 'start',
            align: props.align || 'start'
        })

    }, [props.className])


    return (
        <div className={`flex-${ flex?.direction } justify-${ flex?.justify } align-${ flex?.align } ${ props.className }`}>
            { props.children }
        </div>
    )
}
