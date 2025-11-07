import React, { Children, useState, type ReactNode } from 'react'
import { themeContext, type themeType } from '../context/useContext'

type props = {
    children: ReactNode,
}

const Provider = (props: props) => {
    const [theme, setTheme] = useState<themeType>('pink-theme')

  return (
    <themeContext.Provider value={{theme, setTheme}}>
        {props.children}
    </themeContext.Provider>
  )
}

export default Provider;
