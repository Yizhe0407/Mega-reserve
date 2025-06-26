"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ProgressBar } from "./ProgressBar"
import { StepButtonGroup } from "./StepButtonGroup"
import { useState } from "react"

export function Step2ServiceSelect() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [showOtherInput, setShowOtherInput] = useState(false)
  const [needPickup, setNeedPickup] = useState(false)

  const services = [
    { id: "maintenance", label: "保養" },
    { id: "tire", label: "換輪胎" },
    { id: "bodywork", label: "鈑金烤漆" },
    { id: "parts", label: "更換零件" },
    { id: "other", label: "其他" },
  ]

  const toggleService = (serviceId: string) => {
    if (serviceId === "other") {
      setShowOtherInput(!selectedServices.includes(serviceId))
    }

    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <ProgressBar />

      <div className="px-4 pt-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">預約項目</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <p className="text-md font-bold">服務項目（可複選）</p>
              <div className="grid gap-3">
                {services.map((service) => (
                  <Button
                    key={service.id}
                    variant={selectedServices.includes(service.id) ? "default" : "outline"}
                    onClick={() => toggleService(service.id)}
                    className="h-12 justify-start"
                  >
                    {service.label}
                  </Button>
                ))}
              </div>
            </div>

            {showOtherInput && (
              <div className="space-y-2">
                <Label htmlFor="other-service">請說明其他服務需求</Label>
                <Textarea id="other-service" placeholder="請詳細說明您的服務需求..." className="min-h-[100px]" />
              </div>
            )}

            <div className="space-y-4">
              <p className="text-md font-bold">額外服務</p>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pickup"
                  checked={needPickup}
                  onCheckedChange={(checked) => setNeedPickup(checked as boolean)}
                />
                <Label htmlFor="pickup" className="text-sm font-normal">
                  需要到府牽車
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <StepButtonGroup nextButtonText="下一步" />
    </div>
  )
}
