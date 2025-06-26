"use client"

import { useState } from "react"
import { Step1UserInfo } from "@/components/step1-user-info"
import { Step2ServiceSelect } from "@/components/step2-service-select"
import { Step3DateTime } from "@/components/step3-date-time"
import { Step4Confirm } from "@/components/step4-confirm"

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleConfirm = () => {
    // 這裡可以添加確認預約的邏輯
    alert("預約已確認！")
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1UserInfo onNext={handleNext} onPrevious={handlePrevious} />
      case 2:
        return <Step2ServiceSelect onNext={handleNext} onPrevious={handlePrevious} />
      case 3:
        return <Step3DateTime onNext={handleNext} onPrevious={handlePrevious} />
      case 4:
        return <Step4Confirm onNext={handleConfirm} onPrevious={handlePrevious} />
      default:
        return <Step1UserInfo onNext={handleNext} onPrevious={handlePrevious} />
    }
  }

  return <div className="max-w-md mx-auto bg-background text-foreground">{renderStep()}</div>
}
