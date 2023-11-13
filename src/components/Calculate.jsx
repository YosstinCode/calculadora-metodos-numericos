import { useContext } from 'react'
import FuncionContext from '../context/funcionContext'

import Graph from './Graph'
import SubTitle from './SubTitle'
import TableMethods from './TableMethods'

const Calculate = () => {
  const { func } = useContext(FuncionContext)

  return (<>
    {
      func.calcular && (
      <>
        <div className='flex flex-col gap-4'>

        <SubTitle>Gráfica</SubTitle>
        <Graph />
        </div>
        <SubTitle>Tabla del Metodo</SubTitle>
        <TableMethods/>
      </>
      )}
  </>
  )
}

export default Calculate
