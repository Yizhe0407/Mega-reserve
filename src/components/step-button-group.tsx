"use client"

import { Button } from "@/components/ui/button"

interface StepButtonGroupProps {
  onPrevious?: () => void
  onNext?: () => void
  isPreviousDisabled?: boolean
  isNextDisabled?: boolean
  nextButtonText?: string
  isLoading?: boolean
}

export function StepButtonGroup({
  onPrevious,
  onNext,
  isPreviousDisabled = false,
  isNextDisabled = false,
  nextButtonText = "下一步",
  isLoading = false,
}: StepButtonGroupProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
      <div className="flex gap-3 max-w-md mx-auto">
        <Button variant="outline" onClick={onPrevious} disabled={isPreviousDisabled} className="flex-1 h-12 ">
          上一步
        </Button>
        <Button onClick={onNext} disabled={isNextDisabled || isLoading} className="flex-1 h-12 ">
          {isLoading ? "處理中..." : nextButtonText}
        </Button>
      </div>
    </div>
  )
}
