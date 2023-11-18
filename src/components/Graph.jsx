import { useContext, useEffect, useCallback, useState } from 'react'
import FuncionContext from '../context/funcionContext'
import functionPlot from 'function-plot'

// import * as math from 'mathjs'

const Graph = () => {
  const [error, setError] = useState(false)
  const { func } = useContext(FuncionContext)

  const graph = useCallback(() => {
    const pointsLineals = []
    const points = []
    let text = ''

    if (func.metodo === 'Newton') {
      points.push([func.root, func.froot])
      pointsLineals.push(
        [0, 0],
        [func.root, func.froot],
        [100, func.froot],
        [-100, func.froot]
      )
      text = 'Max o Min'
    } else {
      points.push([func.root, 0])
      pointsLineals.push(
        [0, 0],
        [func.root, 0],
        [func.root, 100],
        [func.root, -100]
      )
      text = 'raiz'
    }

    try {
      functionPlot({
        width: 776,
        target: '#grafica',
        data: [{
          fn: `${func.funcion}`
        }, {
          points: pointsLineals,
          fnType: 'points',
          graphType: 'polyline',
          color: 'cyan'
        },
        {
          points,
          fnType: 'points',
          graphType: 'scatter',
          color: 'purple',
          attr: {
            r: 4
          }

        }],
        annotations: [{
          x: func.root,
          text,
          y: 0
        }],
        tip: {
          xLine: true, yLine: true
        }
      })
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }, [func.froot, func.funcion, func.metodo, func.root])

  useEffect(() => {
    graph()
  }, [graph])

  return (
    <div className=' mx-auto w-[48.75rem]'>
      {

        error
          ? <p className='text-red-500 text-2xl text-center font-Nunito font-semibold'>Verifica la función, puede estar mal escrita.</p>
          : <>
          <div className='flex bg-white rounded-[20px] justify-center items-center ' id='grafica'></div>
          </>
      }
    </div>
  )
}

export default Graph
