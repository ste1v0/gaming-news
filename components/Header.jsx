import React, { useState, useEffect } from 'react'

import '../App.css'

export default function Header(props) {
    return (
        <>
            <header style={props.light ? {color: 'black'} : {color: 'white'}}>
                <div className="header--features">
                    <div onClick={props.changeFont} style={{cursor: 'pointer'}}>
                        {props.fontSmall ? `Aa` : `Aa`}
                    </div>
                    <div onClick={props.changeTheme} style={{cursor: 'pointer'}}>
                        {props.light ? `🌙` : `☀️`}
                    </div>
                </div>
            </header>
        </>
    )
}

