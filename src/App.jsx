import Title from './components/Title'
import ShowLatex from './components/ShowLatex'
import Form from './components/Form'

import Calculate from './components/Calculate'
import ButtonClear from './components/ButtonClear'
import ButtonHelp from './components/ButtonHelp'
import { FuncionContextProvider } from './context/context'

function App () {
  return (
    <>
    <FuncionContextProvider>
      <div className='w-[48.75rem] mx-auto flex flex-col gap-12'>
      <Title />
      <ShowLatex />
      <Form />
      <Calculate />
      </div>
        <ButtonClear />
        <ButtonHelp />
    </FuncionContextProvider>
    </>
  )
}

export default App
