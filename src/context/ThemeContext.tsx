'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  tema: Theme
  toggleTema: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Theme>('dark')

  // Cargar tema guardado cuando el componente se monta
  useEffect(() => {
    const temaGuardado = localStorage.getItem('tema') as Theme
    if (temaGuardado) {
      setTema(temaGuardado)
    }
  }, [])

  // Guardar tema en localStorage y actualizar clase cuando cambie
  useEffect(() => {
    localStorage.setItem('tema', tema)
    if (tema === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [tema])

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'))
  }

  // SIEMPRE provee el contexto, sin importar si está montado
  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider')
  }
  return context
}