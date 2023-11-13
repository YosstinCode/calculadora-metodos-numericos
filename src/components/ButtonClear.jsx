import { useContext } from 'react'
import FuncionContext from '../context/funcionContext'

const ButtonClear = () => {
  const { setFunc } = useContext(FuncionContext)

  const clear = () => {
    setFunc({
      funcion: '',
      calcular: false,
      error: false,
      metodo: '',
      xi: '',
      xf: '',
      root: '',
      froot: ''
    })
  }

  return (
    <button onClick={clear}>Limpiar</button>
  )
}

export default ButtonClear
