import { useState } from 'react'
import { FaQuestion } from 'react-icons/fa'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'
import './Button.css'

const ButtonHelp = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="fixed right-0 bottom-0 flex flex-col items-end w-56 p-1 font-Nunito rounded-[20px]">
      {open && (
        <div
          id="help"
          className=" w-56 h-[510px] bg-white border-Naranjita border-[6px] rounded-[20px] mx-4 px-4 overflow-y-scroll"
        >
          <h3 className="text-2xl text-Negrito text-center mb-2">
            Algebraicas
          </h3>
          <p className="text-xs text-Grisecito mb-2">
            Para la expresiones algebraicas considerar el siguiente ejemplo
          </p>
          <Latex>{'$ \\frac{x^3 + (x * x) - 4x + 10}{x} $'}</Latex>
          <p className="text-xs text-Grisecito mb-2">se escribe:</p>
          <p className=" text-Negrito mb-2"> (x^3+(x*x)-4x+10)/x </p>

          <h3 className="text-2xl text-Negrito text-center mb-2">
            Trigonometricas
          </h3>
          <p className="text-xs text-Grisecito mb-2">
            Para la expresiones trigonometricas considerar el siguiente ejemplo
          </p>
          <Latex>{'$ \\frac{sin(x) - tan(x) * sec(x)}{sin^{-1}(x)} $'}</Latex>
          <p className="text-xs text-Grisecito mb-2">se escribe:</p>
          <p className=" text-Negrito mb-2"> (sin(x)-tan(x)*sec(x))/asin(x) </p>

          <h3 className="text-2xl text-Negrito text-center mb-2">
            Exponencial y logaritmica
          </h3>
          <p className="text-xs text-Grisecito mb-2">
            Para la expresiones exponenciales y logaritmicas considerar el
            siguiente ejemplo
          </p>
          <Latex>{'$ e^x+log(x) $'}</Latex>
          <p className="text-xs text-Grisecito mb-2">se escribe:</p>
          <p className=" text-Negrito mb-2"> exp(x)+log(x) </p>
        </div>
      )}
      <div className="group w-20 mt-16">
        <div className="relative mx-2 -top-[4.5rem]">
          <div className="opacity-0 transition-all group-hover:opacity-100 bg-black text-white text-xs rounded py-1 text-center right-0 bottom-full">
            Ayuda
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
          onClick={handleOpen}
          className=" fixed bottom-0 bg-Naranjita rounded-full w-12 h-12 flex justify-center items-center mt-4 mb-4 ml-4"
        >
          <FaQuestion className="text-white" />
        </button>
      </div>
    </div>
  )
}

export default ButtonHelp
