import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'
import { useContext, useEffect, useState } from 'react'
import FuncionContext from '../context/funcionContext'
import * as math from 'mathjs'

const ShowLatex = () => {
  const { func } = useContext(FuncionContext)
  const [latex, setlatex] = useState('')

  useEffect(() => {
    try {
      if (func.funcion === '') { setlatex('f(x) = \\frac{sin(\\sqrt{x}+x) * e^{\\sqrt{x}}}{\\sqrt{x}}') } else {
        const parse = math.parse(func.funcion).toTex()
        if (parse.includes('exp')) {
          parse.replace('\\exp', 'e^').replace('\\left(', '{').replace('\\right)', '}')
        }
        setlatex('f(x) = ' + parse)
      }
    } catch (error) {

    }
  }, [func.funcion, latex])

  const stringLatex = `$ ${latex} $`

  return (
    <div className='truncate w-[48.75rem] h-[9.375rem] border-[6px] rounded-[20px] bg-white border-Azul text-4xl font-thin font-Nunito mx-auto flex justify-center items-center'>
      <Latex>
        {stringLatex}
      </Latex>
    </div>
  )
}

export default ShowLatex
