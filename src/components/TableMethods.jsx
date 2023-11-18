import { Grid } from 'gridjs-react'
import 'gridjs/dist/theme/mermaid.css'
import { useContext, useEffect, useState, memo } from 'react'

import { methodBisection, methodNewton } from '../utils/Evaluate'
import { FuncionContext } from '../context/context'

const TableMethods = () => {
  const [data, setData] = useState([])
  const [column, setColumn] = useState([])
  const [root, setRoot] = useState(false)

  const { func, setFunc } = useContext(FuncionContext)

  useEffect(() => {
    try {
      console.log(func.metodo)
      let dataSet
      let raiz
      let froot
      let funcStr
      let dyStr
      let dy2Str
      if (func.metodo === 'Newton') {
        console.log(func.metodo)
        const { table, root, y, funcString, dyString, dy2String } = methodNewton(func.funcion, func.xi)
        raiz = root
        dataSet = table
        froot = y
        funcStr = funcString
        dyStr = dyString
        dy2Str = dy2String
      } else {
        const { table, root, funcString } = methodBisection(func.funcion, func.xi, func.xf)
        dataSet = table
        raiz = root
        funcStr = funcString
      }
      const columns = dataSet[0]
      const iteraciones = dataSet.slice(1, dataSet.length)

      setData(iteraciones)
      setColumn(columns)
      if (!root) {
        setFunc({
          ...func,
          root: raiz,
          froot,
          iteraciones,
          funcStr,
          dyStr,
          dy2Str
        })
      }
      setRoot(true)
      if (root) {
        setFunc({
          ...func,
          isRoot: root
        })
      }
    } catch (error) {
      alert('Error en la función, verifica que esté bien escrita solo funciona con la variable x en minuscula')
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
  }, [root, setFunc])

  return (
    <div className="">
      <Grid
        data={data}
        columns={column}
        search={true}
        language={{
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
        }}
        pagination={{
          enabled: true,
          limit: 5
        }}

      />
    </div>
  )
}

export default memo(TableMethods)
