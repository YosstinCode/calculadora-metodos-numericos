import { Grid } from 'gridjs-react'
import 'gridjs/dist/theme/mermaid.css'
import { useContext, useEffect, useState } from 'react'

import FuncionContext from '../context/funcionContext'
import { methodBisection, methodNewton } from '../utils/Evaluate'

const TableMethods = () => {
  const [data, setData] = useState([])
  const [column, setColumn] = useState([])
  const [root, setRoot] = useState(false)

  const { func, setFunc } = useContext(FuncionContext)

  useEffect(() => {
    let dataSet; let raiz
    if (func.metodo === 'Newton') {
      const { table, root } = methodNewton(func.funcion, func.xi)
      raiz = root
      dataSet = table
    } else {
      const { table, root } = methodBisection(func.funcion, func.xi, func.xf)
      dataSet = table
      raiz = root
    }
    setData(dataSet.slice(1, dataSet.length))
    setColumn(dataSet[0])
    console.log(raiz)
    if (!root) {
      setFunc({
        ...func,
        root: raiz
      })
    }
    setRoot(true)
  }, [func, func.funcion, func.metodo, func.xi, root, setFunc])

  return (
    <div className=''>

    <Grid
  data={data}
  columns={column}
  search={true}
  language={
    {
      search: {
        placeholder: '🔍 Busca en la tabla...'
      },
      pagination: {
        previous: 'Anteriores',
        next: 'Siguientes',
        showing: 'Mostrando',
        of: 'de',
        to: 'hasta',
        results: () => 'Iteraciones 😎'
      }
    }
  }
  pagination={{
    enabled: true,
    limit: 5
  }}
/>
    </div>
  )
}

export default TableMethods
