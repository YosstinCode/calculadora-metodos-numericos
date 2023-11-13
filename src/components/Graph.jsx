import { useContext, useEffect, useCallback, useState } from 'react'
import FuncionContext from '../context/funcionContext'
import functionPlot from 'function-plot'

// import * as math from 'mathjs'

const Graph = () => {
  const [error, setError] = useState(false)
  const { func } = useContext(FuncionContext)

  console.log(func.root)

  const graph = useCallback((domaniny, domainx) => {
    try {
      console.log(func.root)
      functionPlot({
        width: 776,
        target: '#grafica',
        yAxis: { domain: domaniny },
        xAxis: { domain: domainx },
        data: [{
          fn: `${func.funcion}`
        }, {
          points: [
            [0, 0],
            [func.root, 0],
            [func.root, 100],
            [func.root, -100]
          ],
          fnType: 'points',
          graphType: 'polyline',
          color: 'cyan'
        },
        {
          points: [
            [func.root, 0]
          ],
          fnType: 'points',
          graphType: 'scatter',
          color: 'purple',
          attr: {
            r: 4
          }

        }],
        annotations: [{
          x: func.root,
          text: 'Raíz',
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
  }, [func])

  useEffect(() => {
    graph([-10, 10], [-10, 10])
  }, [graph])

  return (
    <div className=' mx-auto w-[48.75rem]'>
      {

        error
          ? <p className='text-red-500 text-2xl text-center font-Nunito font-semibold'>Verifica la función, puede estar mal escrita.</p>
          : <div className='flex bg-white rounded-[20px] justify-center items-center ' id='grafica'></div>
      }
    </div>
  )
}

export default Graph
