import React, { useState, useEffect } from 'react'
import Site from './components/Site.jsx'
import Header from './components/Header.jsx'

import './App.css'

function App() {

  const [light, setLight] = useState(localStorage.getItem('light') || true)
  const [fontSmall, setFontSmall] = useState(localStorage.getItem('font') || false)

  const [display, setDisplay] = useState([true, true, true])

  const gohaRSSUrl = process.env.BACKEND_LINK_ONE
  const dtfRSSUrl = process.env.BACKEND_LINK_TWO
  const stopGameRSSUrl = process.env.BACKEND_LINK_THREE

  const fontL= {
    fontSize: '16px'
  }

  const fontS = {
    fontSize: '14px'
  }

  useEffect(() => {
    localStorage.setItem('light', light.toString());
  }, [light]);

  useEffect(() => {
    localStorage.setItem('font', fontSmall.toString());
  }, [fontSmall]);

  useEffect(() => {
    const storageLightData = JSON.parse(localStorage.getItem('light'))
    setLight(storageLightData)
    const storageFontData = JSON.parse(localStorage.getItem('font'))
    setFontSmall(storageFontData)
  }, [])

  const changeTheme = () => {
    setLight(prevTheme => !prevTheme);
  };

  function changeFont() {
    setFontSmall(prevFont => !prevFont)
  }

  function changeDisplay(index) {
    setDisplay(prevState => {
      const newArr = [...prevState]
      newArr[index] = !newArr[index]
      return newArr
    })
  }

  const icon = {
    width: 30,
    height: 30,
    cursor: 'pointer'
  }

  const logo = {
    width: 30,
    height: 30,
    borderRadius: '7px'
  }

  const body = document.body
  body.style.backgroundColor = light ? 'white' : '#2C3333'

    return (
      <>
      <Header light={light} fontSmall={fontSmall} icon={icon} changeFont={changeFont} changeTheme={changeTheme}/>
      <div className="menu">
        <h3 style={ {... ({cursor: 'pointer'}), ... (light ? {color: 'black'} : {color: 'white'})}} onClick={() => changeDisplay(0)}>{display[0] ? '✅ GoHa' : '❌ GoHa'}</h3>
        <h3 style={ {... ({cursor: 'pointer'}), ... (light ? {color: 'black'} : {color: 'white'})}} onClick={() => changeDisplay(1)}>{display[1] ? '✅ DTF' : '❌ DTF'}</h3>
        <h3 style={ {... ({cursor: 'pointer'}), ... (light ? {color: 'black'} : {color: 'white'})}} onClick={() => changeDisplay(2)}>{display[2] ? '✅ StopGame' : '❌ StopGame'}</h3>
      </div>
      <main>
        <Site sitename="goha" index={0} display={display} logo={logo} light={light} fontSmall={fontSmall} fontS={fontS} fontL={fontL} RSS={gohaRSSUrl} href="https://goha.ru" />
        <Site sitename="dtf" index={1} display={display} logo={logo} light={light} fontSmall={fontSmall} fontS={fontS} fontL={fontL} RSS={dtfRSSUrl} href="https://dtf.ru" />
        <Site sitename="stopgame" index={2} display={display} logo={logo} light={light} fontSmall={fontSmall} fontS={fontS} fontL={fontL} RSS={stopGameRSSUrl} href="https://stopgame.ru" />
      </main>
      </>
    )
  }

export default App
