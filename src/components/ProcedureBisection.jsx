import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'
import * as math from 'mathjs'

const Iteracion = ({ iteracion, xi, xf, formulaXr, xr, funcion, fxi, fxr, formulaError, error }) => {
  const classNameCalculos = 'text-xl text-Grisecito font-medium'

  const descision = (fxi * fxr) > 0

  return (
    <article className='flex flex-col gap-4'>
      <h2 className='text-center font-semibold text-2xl text-Negrito'>Iteración {iteracion}</h2>
      <h3 className='text-xl font-semibold text-Negrito'>Calculos</h3>
      <div className={classNameCalculos}>
        <Latex >{`$ x_i = ${xi} \\ ; \\ $`}</Latex>
        <Latex >{`$ x_f = ${xf} $`}</Latex>
      </div>
      <div className={classNameCalculos}>
        <Latex >{`$ x_r = ${formulaXr.replace('x_i', xi).replace('x_f', xf)} = ${xr} $`}</Latex>
      </div>
      <div className={classNameCalculos}>
        <Latex >{`$ f(x_i) = ${funcion.replaceAll('x', `\\left ( ${xi}  \\right )`)} = ${fxi} $`}</Latex>
      </div>
      <div className={classNameCalculos}>
        <Latex >{`$ f(x_r) = ${funcion.replaceAll('x', `\\left ( ${xf}  \\right )`)} = ${fxr} $`}</Latex>
      </div>
      <div className={classNameCalculos}>
        <Latex >{`$ f(x_i) \\cdot f(x_f) = ${fxi} \\cdot ${fxr} = ${math.round(fxi * fxr, 4)} = ${descision ? '+' : '-'}  $`}</Latex>
      </div>
      <div className={classNameCalculos}>
        <Latex >{`$ ${descision ? `x_i = ${xr}` : `x_f = ${xr}`} $`}</Latex>
      </div>

      <h3 className='text-xl font-semibold text-Negrito'>Error</h3>
      <div className={classNameCalculos}>
        <Latex >{`$ Ea = ${formulaError.replace('x_r', xr).replace('x', xi).replace('{x_r}', `{${xr}}`)} = ${error === 'Infinity' ? 'Indeterminado' : error} $`}</Latex>
      </div>

    </article>
  )
}

const ListIteraciones = ({ iteraciones, funcion, formulaXr, formulaError }) => {
  return iteraciones && iteraciones.map((iteracion, index) => (
    // console.warn(iteracion[5].toString())
    <Iteracion key={index} iteracion={index + 1} xi={iteracion[1].toString()} xf={iteracion[2].toString()} formulaXr={formulaXr} xr={iteracion[3].toString()} funcion={funcion} fxi={iteracion[4].toString()} fxr={iteracion[5].toString()} formulaError={formulaError} error={iteracion[6].toString()}/>
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

const ProcedureBisection = ({
  iteraciones,
  funcion,
  xr,
  error
}) => {
  console.log(xr)
  return (
    <section className='font-Nunito'>
      <article>
        <div className="px-4 sm:px-0">
          <h3 className="text-xl font-semibold leading-7 text-gray-900">
            Informacion sobre las formulas del método de bisección
          </h3>
          <p className="mt-1 max-w-2xl text-base leading-6 text-gray-500">
            Se presentan las formulas que se emplean para la solución.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <Formula formula={funcion} text={'Función'} />
            <Formula formula={xr} text={'Calculo de Xr'}/>
            <Formula formula={' f(x_i) \\cdot f(x_f) > 0 => X_f = x_r \\\\ f(x_i) \\cdot f(x_f) < 0 => X_i = x_r \\\\ f(x_i) \\cdot f(x_f) = 0 => raiz = x_r'} text={'Toma de descision'} />
            <Formula formula={error} text={'Error aproximado'} />
          </dl>
        </div>
      </article>
      <ListIteraciones iteraciones={iteraciones} funcion={funcion} formulaXr={xr} formulaError={error}/>
    </section>
  )
}

export default ProcedureBisection
