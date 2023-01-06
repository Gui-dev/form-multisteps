import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

import { Steps } from './components/Steps'
import { UserForm } from './components/UserForm'
import { ReviewForm } from './components/ReviewForm'
import { Thanks } from './components/Thanks'

import { useState } from 'react'

import { useForm } from './hooks/useForm'

import './index.css'

export type DataProps = {
  name: string
  email: string
  review: string
  comment: string
}

function App () {
  const [data, setData] = useState<DataProps>({
    name: '',
    email: '',
    review: '',
    comment: ''
  })

  const handleUpdateField = (key: string, value: string) => {
    setData(prev => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const formComponents = [
    <UserForm data={data} onUpdateField={handleUpdateField} />,
    <ReviewForm data={data} onUpdateField={handleUpdateField} />,
    <Thanks data={data} />,
  ]
  const {
    changeStep,
    currentComponent,
    currentStep,
    isFirstStep,
    isLastStep
  } = useForm(formComponents)
  console.log(data)
  return (
    <section className="app">
      <header className="header">
        <h1>Deixe sua avaliação</h1>
        <p>
          Ficamos felizes com sua compra,
          utilize o formulário abaixo para avaliar o produto
        </p>
      </header>
      <div className="form-container">
        <Steps
          currentStep={currentStep}
        />

        <form onSubmit={event => changeStep({ index: currentStep + 1, event })}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button
              type="button"
              onClick={() => changeStep({ index: currentStep - 1 })}
              disabled={isFirstStep}
            >
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {
              !isLastStep && (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              )
            }
            {
              isLastStep && (
                <button type="submit">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )
            }

          </div>
        </form>
      </div>
    </section>
  )
}

export default App
