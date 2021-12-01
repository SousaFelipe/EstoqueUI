import React from 'react'

import './style.css'



export default function NavItem (props: any) : JSX.Element {


    const [item, setItem] = React.useState<any>()
    const [active, setActive] = React.useState<string>('')


    React.useEffect(() => {

        setItem(props.item)

        setActive(
            document.location.href.includes(props.item.route)
                ? 'active'
                : ''
        )

    }, [
        props.item
    ])


    return (
        <li key={ item?.key } className={`nav-item ${ active }`}>
            <span className="material-icons-round">{ item?.icon }</span>
            { item?.title }
        </li>
    )
}
