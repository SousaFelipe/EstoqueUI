import React, { useEffect, useState } from 'react'

import Flex from '../Flex'

import TypeImage from './types'

import './style.css'



export default function Image (props: any) : JSX.Element {


    const [img, setImg] = useState<TypeImage>()


    useEffect(() => {

        setImg({
            justify: (props.fit !== 'height') ? 'stretch' : 'start',
            align: (props.fit !== 'height') ? 'start' : 'stretch'
        })

    }, [
        props.fit
    ])


    return (
        <Flex justify={ img?.justify } align={ img?.align }>

            <img
                src={ props.src }
                alt={ props.alt || props.src }
                width={ props.width || 'auto' }
                height={ props.height || 'auto' } />

        </Flex>
    )
}
