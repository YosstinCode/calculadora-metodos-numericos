import { createContext, useState } from 'react'

export const FuncionContext = createContext()

export const FuncionContextProvider = ({ children }) => {
  const [func, setFunc] = useState({
    funcion: '',
    calcular: false,
    error: false,
    metodo: '',
    xi: '',
    xf: '',
    root: '',
    froot: '',
    clear: false,
    iteraciones: [],
    funcString: '',
    dyString: '',
    dy2String: '',
    isRoot: false
  })

  return (
    <FuncionContext.Provider value={{ func, setFunc }}>
      {children}
    </FuncionContext.Provider>
  )
}
