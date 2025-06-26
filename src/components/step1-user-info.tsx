import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ProgressBar } from "./progress-bar"
import { StepButtonGroup } from "./step-button-group"

interface Step1UserInfoProps {
  onNext: () => void
  onPrevious: () => void
}

export function Step1UserInfo({ onNext, onPrevious }: Step1UserInfoProps) {
  return (
    <div className="min-h-screen bg-background pb-24">
      <ProgressBar currentStep={1} totalSteps={4} />

      <div className="px-4 pt-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">基本資料</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-md font-bold">
                姓名 <span className="text-destructive">*</span>
              </p>
              <Input id="name" placeholder="請輸入您的姓名" className="h-12" />
            </div>

            <div className="space-y-2">
              <p className="text-md font-bold">
                手機號碼 <span className="text-destructive">*</span>
              </p>
              <Input id="phone" type="tel" placeholder="請輸入手機號碼" className="h-12" />
            </div>

            <div className="space-y-2">
              <p className="text-md font-bold">
                車牌號碼 <span className="text-destructive">*</span>
              </p>
              <Input id="license" placeholder="請輸入車牌號碼" className="h-12" />
            </div>
          </CardContent>
        </Card>
      </div>

      <StepButtonGroup onNext={onNext} onPrevious={onPrevious} isPreviousDisabled={true} nextButtonText="下一步" />
    </div>
  )
}
