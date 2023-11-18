import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'

const Iteracion = ({ iteracion, derivada, segundaDerivada, xi, fx, fx2, error, formulaError, formulaXi, xi1 }) => {
  const classNameCalculos = 'text-xl text-Grisecito font-medium'

  return (
    <article className='flex flex-col gap-4'>
      <h2 className='text-center font-semibold text-2xl text-Negrito'>Iteración {iteracion}</h2>
      <h3 className='text-xl font-semibold text-Negrito'>Calculos</h3>
      <div className={classNameCalculos}>
        <Latex >{`$ x_i = ${xi.toString()} $`}</Latex>
      </div>
      <div className={classNameCalculos}>
        <Latex >{`$ f'(x) = ${derivada.replace('x', xi)} = ${fx} $`}</Latex>
      </div>
      <div className={classNameCalculos}>
        <Latex >{`$ f''(x) = ${segundaDerivada.replace('x', xi)} = ${fx2} $`}</Latex>
      </div>
      <div className={classNameCalculos}>
        <Latex >{`$ x_{i+1} = ${formulaXi.replace('_i', '').replace('x', xi).replace("f'(x)", fx).replace("f''(x)", fx2)} = ${xi1} $`}</Latex>
      </div>
      <h3 className='text-xl font-semibold text-Negrito'>Error</h3>
      <div className={classNameCalculos}>
        <Latex >{`$ Ea = ${formulaError.replace('x_i ', xi1).replace('x', xi).replace('{x_i}', `{${xi1}}`)} = ${error === 'Infinity' ? 'Indeterminado' : error} $`}</Latex>
      </div>
    </article>
  )
}

const ListIteraciones = ({ iteraciones, derivada, segundaDerivada, formulaXi, formulaError }) => {
  return iteraciones.map((iteracion, index) => (
    <Iteracion key={index} iteracion={index + 1} xi={iteracion[1].toString()} derivada={derivada} fx={iteracion[2].toString()} segundaDerivada={segundaDerivada} fx2={iteracion[3].toString()} formulaXi={formulaXi} xi1={iteracion[4]} formulaError={formulaError} error={iteracion[5].toString()}/>
  ))
}

const Formula = ({ text, formula }) => {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-lg font-medium leading-6 text-gray-900">{text}</dt>
      <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        <Latex>{`$ ${formula} $`}</Latex>
      </dd>
    </div>
  )
}

const ProcedureNewton = ({
  iteraciones,
  funcion,
  derivada,
  segundaDerivada,
  xi,
  error
}) => {
  console.log(derivada)
  return (
    <section className='font-Nunito'>
      <article>
        <div className="px-4 sm:px-0">
          <h3 className="text-xl font-semibold leading-7 text-gray-900">
            Informacion sobre las formulas del metodo de optimización unidimensional de Newton
          </h3>
          <p className="mt-1 max-w-2xl text-base leading-6 text-gray-500">
            Se presentan las formulas que se emplean para la solución.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <Formula formula={funcion} text={'Función'} />
            <Formula formula={derivada} text={'Derivada'} />
            <Formula formula={segundaDerivada} text={'Segunda Derivada'} />
            <Formula formula={xi} text={'Calculo de Xi+1'}/>
            <Formula formula={error} text={'Error aproximado'} />
          </dl>
        </div>
      </article>
      <ListIteraciones iteraciones={iteraciones} derivada={derivada} segundaDerivada={segundaDerivada} formulaXi={xi} formulaError={error} />
    </section>
  )
}

export default ProcedureNewton
