"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { ProgressBar } from "./ProgressBar"
import { StepButtonGroup } from "./StepButtonGroup"
import { useState } from "react"

export function Step3DateTime() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>("")

  const timeSlots = ["8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "13:00", "14:00", "15:00"]

  return (
    <div className="min-h-screen bg-background pb-24">
      <ProgressBar />

      <div className="px-4 pt-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">選擇日期與時間</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border w-[280px]"
              />
            </div>

            <Separator />

            {!selectedDate ? (
              <div className="text-center py-8 text-[#a3a3a3]">
                <p className="text-sm">請先選擇預約日期</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className="h-12 text-sm"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <StepButtonGroup
        isNextDisabled={!selectedDate || !selectedTime}
      />
    </div>
  )
}
