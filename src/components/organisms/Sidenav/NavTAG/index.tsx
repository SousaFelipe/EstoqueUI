import React from 'react'

import Text from '../../../atoms/Text'

import './style.css'



export default function NavTAG (props: any) : JSX.Element {
    return (
        <Text color="muted" size="sm" className="tag">
            { props.children }
        </Text>
    )
}
