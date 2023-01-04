import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

import { UserForm } from './components/UserForm'
import { ReviewForm } from './components/ReviewForm'
import { Thanks } from './components/Thanks'

import { useForm } from './hooks/useForm'

import './index.css'

function App () {
  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />,
  ]
  const { changeStep, currentComponent, currentStep, isFirstStep, isLastStep } = useForm(formComponents)

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
        <p>Etapas</p>

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
