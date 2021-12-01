import React from 'react'

import NavItem from '../NavItem'
import NavTAG from './NavTAG'

import Menu from './menu'

import './style.css'



export default function Sidenav (props: any) : JSX.Element {


    function renderMenu () {
        const keys = Object.keys(Menu)

        return keys.map((value, index) => (
            <>
                <NavTAG key={`tag-${ index }`}>{ value }</NavTAG>
                <ul>
                    { renderItems() }
                </ul>
            </>
        ))
    }


    function renderItems () {
        const entries = Object.entries(Menu)[0]

        return entries.map((item : any) => (
            (Object.prototype.toString.call(item) === '[object Array]') ? (
                item.map((i : any) => (
                    <NavItem key={ i.key } item={ i } />
                ))
            ) : (
                <></>
            )
        ))
    }


    return (
        <div className="sidenav">

            <div className="user">

            </div>

            <nav>
                { renderMenu() }
            </nav>

        </div>
    )
}
