import React, { FormEvent, useState } from "react";

type ChangeStepProps = {
  index: number
  event?: FormEvent
}

export const useForm = (steps: Array<JSX.Element>) => {
  const [currentStep, setCurrentStep] = useState(0)

  const changeStep = ({ index, event }: ChangeStepProps) => {
    if (event) {
      event.preventDefault()
    }
    if (index < 0 || index >= steps.length) return
    setCurrentStep(index)
  }

  return {
    isFirstStep: currentStep === 0,
    isLastStep: currentStep + 1 === steps.length,
    currentStep,
    currentComponent: steps[currentStep],
    changeStep
  }
}
