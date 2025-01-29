import React, { useState } from 'react'
import { ThemeProvider } from '../Context/theme'

function TheemeProvider() {
  const [themeMode,setThemeMode]=useState('Light') 
  const lighttheme = ()=>{
    setThemeMode("Light")
  }
  const darktheme = ()=>{
    setThemeMode("dark")
  }
  return (
    <ThemeProvider value={{theme,darktheme,lighttheme}}>
      <div>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

            </div>

            <div className="w-full max-w-sm mx-auto">

            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default TheemeProvider