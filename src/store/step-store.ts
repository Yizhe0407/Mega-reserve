import { create } from "zustand"

type StepState = {
    currentStep: number
    setCurrentStep: (step: number) => void
    nextStep: () => void
    prevStep: () => void
}

export const useStepStore = create<StepState>((set, get) => ({
    currentStep: 1,
    setCurrentStep: (step) => set({ currentStep: step }),
    nextStep: () => {
        const { currentStep } = get()
        if (currentStep < 4) set({ currentStep: currentStep + 1 })
    },
    prevStep: () => {
        const { currentStep } = get()
        if (currentStep > 1) set({ currentStep: currentStep - 1 })
    },
}))