import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { ProgressBar } from "./progress-bar"
import { StepButtonGroup } from "./step-button-group"

interface Step4ConfirmProps {
  onNext: () => void
  onPrevious: () => void
}

export function Step4Confirm({ onNext, onPrevious }: Step4ConfirmProps) {
  // 模擬預約資料
  const bookingData = {
    name: "王小明",
    phone: "0912-345-678",
    license: "ABC-1234",
    services: ["保養", "換輪胎"],
    needPickup: true,
    date: "2024年1月15日",
    time: "10:00",
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <ProgressBar currentStep={4} totalSteps={4} />

      <div className="px-4 pt-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">確認預約資訊</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-sm mb-2">基本資料</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">姓名</span>
                    <span className="text-sm font-bold">{bookingData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">手機號碼</span>
                    <span className="text-sm font-bold">{bookingData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">車牌號碼</span>
                    <span className="text-sm font-bold">{bookingData.license}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-bold text-sm mb-2">服務項目</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">選擇項目</span>
                    <span className="text-sm font-bold">{bookingData.services.join("、")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">到府牽車</span>
                    <span className="text-sm font-bold">{bookingData.needPickup ? "是" : "否"}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-bold text-sm mb-2">預約時間</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">日期</span>
                    <span className="text-sm font-bold">{bookingData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">時間</span>
                    <span className="text-sm font-bold">{bookingData.time}</span>
                  </div>
                </div>
              </div>
            </div>

            <Alert>
              <AlertDescription>請檢查預約資訊是否正確無誤。</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      <StepButtonGroup onNext={onNext} onPrevious={onPrevious} nextButtonText="確認預約" />
    </div>
  )
}
