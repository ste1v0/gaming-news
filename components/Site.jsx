import React, { useState, useEffect } from 'react'

import '../App.css'

export default function Site(props) {

  const [siteData, setSiteData] = useState([])

  let h1Name

    props.sitename === 'goha'
      ? h1Name = 'GoHa'
      : props.sitename === 'dtf'
        ? h1Name = 'DTF'
        : props.sitename === 'stopgame'
          ? h1Name = 'StopGame'
          : ''
        

  useEffect(() => {
    fetch(props.RSS)
      .then(res => res.json())
      .then(data => {
          let arr = []
          for (let i = 0; i < 13 && data.items[i]; i++) {
            arr.push(data.items[i])
          }
            setSiteData(arr)
      })
  }, [])
    return (
        <div> {props.display[props.index] &&
            <div style={props.light ? {backgroundColor: 'white'} : {backgroundColor: '#2C3333'}}  className="main--box">
            <div className="main--site-name">
              <img style={props.logo} src={props.sitename === 'goha' ? `goha.jpg` : `${props.sitename}.png`}/>
              <a href={props.href} target="_blank" rel="noreferrer"><h1 style={props.light ? {color: 'black'} : {color: 'white'}}>{h1Name}</h1></a>
            </div>
            {siteData.length > 0 &&
            ( 
              <div>
                {siteData.map((e, index) => (
                  <a key={index} href={e.link} target="_blank" rel="noreferrer">
                    <p style={{ ...(props.fontSmall ? props.fontS : props.fontL), ... (props.light ? {border: '1px solid #D6DCEA'} : {border: '1px solid #0E8388'}), ... (props.light ? {color: 'black'} : {color: 'white'})}}>{e.title}</p>
                  </a>
                ))}
              </div>
            )}
        </div>}
        </div>
    )
}