import { useContext } from 'react'
import { FuncionContext } from '../context/context'

import Graph from './Graph'
import SubTitle from './SubTitle'
import TableMethods from './TableMethods'
import ProcedureNewton from './ProcedureNewton'
import ProcedureBisection from './ProcedureBisection'
import Raices from './Raices'

const Calculate = () => {
  const { func } = useContext(FuncionContext)

  console.log(func.iteraciones)
  console.log(func)

  return (<>
    {
      func.calcular && (
      <>
        <div className='flex flex-col gap-4'>

        <SubTitle>Gráfica</SubTitle>
        <Graph />
        </div>
        <SubTitle>{func.metodo !== 'Newton' ? 'Raíces' : 'Maximos o minimos'}</SubTitle>
        <Raices metodo={func.metodo} root={func.root} froot={func.froot}/>
        <SubTitle>Tabla del Metodo</SubTitle>
        <TableMethods/>
        <SubTitle>Procedimiento</SubTitle>
        {
          func.isRoot && func.iteraciones &&
          func.metodo === 'Newton'
            ? <ProcedureNewton iteraciones={func.iteraciones} funcion={func.funcStr} derivada={func.dyStr} segundaDerivada={func.dy2Str} xi={"x_i - \\frac{f'(x)}{f''(x)}"} error={'\\left | \\frac{ x_i - x }{x_i} \\right |'}/>
            : func.metodo === 'Biseccion' && <ProcedureBisection iteraciones={func.iteraciones} funcion={func.funcStr} xr={'\\frac{x_i + x_f}{2}'} error={'\\left | \\frac{ x_r - x }{x_r} \\right |'} />
        }
      </>
      )}
  </>
  )
}

export default Calculate
