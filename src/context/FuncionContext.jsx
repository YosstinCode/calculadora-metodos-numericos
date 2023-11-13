import { createContext, useState } from 'react'

const Context = createContext()

export const FuncionContextProvider = ({ children }) => {
  const [func, setFunc] = useState({
    funcion: '',
    calcular: false,
    error: false,
    metodo: '',
    xi: '',
    xf: '',
    root: '',
    froot: ''
  })

  return (
    <Context.Provider value={{ func, setFunc }}>
      {children}
    </Context.Provider>
  )
}

export default Context
