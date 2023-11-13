import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FuncionContext from '../context/funcionContext'

const Form = () => {
  const { func, setFunc } = useContext(FuncionContext)

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      funcion: '',
      method: '',
      xi: '',
      xf: ''
    }
  })

  const funcion = watch('funcion')
  const method = watch('method')

  const onsubmit = (data) => {
    setFunc({
      funcion: data.funcion,
      calcular: true,
      metodo: data.method,
      xi: +data.xi,
      xf: +data.xf,
      root: ''
    })
  }

  useEffect(() => {
    setFunc({
      funcion,
      calcular: false
    })
  }, [funcion, setFunc])

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="flex flex-col justify-center items-center gap-4"
    >
      <input
        className="w-[48.75rem] h-[3.75rem] rounded-[20px] px-4 py-2"
        type="text"
        placeholder="(sin(sqrt(x)+x) * exp(sqrt(x))) / sqrt(x)"
        {...register('funcion', { required: true })}
      />
      <div className="flex gap-2 font-Nunito">

          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="Método Unidimensional de Newton"
              data-ripple-dark="true"
            >
              <input
                id="Método Unidimensional de Newton"
                value="Newton"
                name="type"
                type="radio"
                {...register('method', { required: true })}
                className=" border-Negrito before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-Azul transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-Azul checked:before:bg-Azul hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-Azul opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-Negrito"
              htmlFor="Método Unidimensional de Newton"
            >
              Método Unidimensional de Newton
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="Método de Bisección"
              data-ripple-dark="true"
            >
              <input
                id="Método de Bisección"
                value="Biseccion"
                name="type"
                type="radio"
                {...register('method', { required: true })}
                className=" border-Negrito before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-Azul transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-Azul checked:before:bg-Azul hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-Azul opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-Negrito"
              htmlFor="Método de Bisección"
            >
              Método de Bisección
            </label>
          </div>

      </div>
      <div className='flex gap-2'>
        <label className='flex items-center font-Nunito text-xl font-semibold' htmlFor="xi">xi:</label>
        <input className=' h-[2.5rem] rounded-[16px] px-4' type="number" step={0.01} {...register('xi')}/>
      {
        method === 'Biseccion' && <>
        <label className='flex items-center font-Nunito text-xl' htmlFor="xi">xf:</label>
          <input className=' h-[2.5rem] rounded-[16px] px-4' type="number" step={0.01} {...register('xf')}/>
        </>
      }

      </div>
      <button
        className="bg-Azul rounded-[20px] px-4 text-white h-[3.75rem] w-[17.5rem] font-Nunito font-semibold text-2xl"
        type="submit"
        disabled={func.calcular}
      >
        Calcular Raíces
      </button>
    </form>
  )
}

export default Form
