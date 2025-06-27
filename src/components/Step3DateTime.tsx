"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { ProgressBar } from "./ProgressBar"
import { StepButtonGroup } from "./StepButtonGroup"
import { useState } from "react"
import { format } from 'date-fns'
import { useStepStore } from "@/store/step-store"

export function Step3DateTime() {
  const step3Data = useStepStore((state) => state.step3Data)
  const setStep3Data = useStepStore((state) => state.setStep3Data)

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
                selected={step3Data.date ? new Date(step3Data.date) : undefined}
                onSelect={(day) => {
                  setStep3Data({
                    ...step3Data,
                    date: day ? format(day, 'yyyy-MM-dd') : ""
                  })
                }}
                disabled={(date) => date < new Date(new Date().toDateString()) || date.getDay() === 0}
                className="rounded-md border w-[280px]"
              />
            </div>

            <Separator />

            {!step3Data.date ? (
              <div className="text-center py-8 text-[#a3a3a3]">
                <p className="text-sm">請先選擇預約日期</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={step3Data.time === time ? "default" : "outline"}
                    onClick={() =>
                      setStep3Data({
                        ...step3Data,
                        time,
                      })
                    }
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
        isNextDisabled={!step3Data.date || !step3Data.time}
      />
    </div>
  )
}
