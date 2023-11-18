import { useContext } from 'react'
import FuncionContext from '../context/funcionContext'
import { FaEraser } from 'react-icons/fa'

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
      froot: '',
      clear: true,
      iteraciones: []
    })
  }

  return (
    <div className='fixed bottom-0 flex flex-col w-56 p-1 font-Nunito rounded-[20px]'>
    <div className='group w-20'>
      <div className="relative mx-2 -top-[4.5rem]">
          <div className="opacity-0 transition-all group-hover:opacity-100 bg-black text-white text-xs rounded py-1 text-center right-0 bottom-full">Limpiar
            <svg
              className="absolute text-black h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
      <button
        onClick={clear}
        className=" fixed bottom-0 bg-red-400 rounded-full w-12 h-12 flex justify-center items-center mt-4 mb-4 ml-4"
      >
        <FaEraser className="text-white" />
      </button>
    </div>
    </div>
  )
}

export default ButtonClear
