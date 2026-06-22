import React, { useState } from 'react'
import { useCalendar } from '../../hooks/useCalendar'
import { isSameDate } from '../../hooks/useCalendar'
import {
  CalendarContainer,
  CalendarHeader,
  CalendarGrid,
  CalendarDayName,
  CalendarDay,
} from './CustomCalendar.styled'

interface CalendarProps {
  value?: Date
  onChange?: (date: Date) => void
  minDate?: Date
  maxDate?: Date
}

export const CustomCalendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
}) => {
  const [currentDate, setCurrentDate] = useState(value || new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null)
  const days = useCalendar(currentDate)
  const changeMonth = (offset: number) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1)
    )
  }
  const isDisabled = (date: Date) => {
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  const handleSelect = (date: Date) => {
    if (isDisabled(date)) return 
    setSelectedDate(date)
    onChange?.(date)    
  }
  return (
    <CalendarContainer>
      <CalendarHeader>
        <button onClick={() => changeMonth(-1)}>{'<'}</button>
        <h2>{currentDate.toLocaleDateString('en-US', { month: 'long' })}<span>{currentDate.getFullYear()}</span></h2>
        <button onClick={() => changeMonth(1)}>{'>'}</button>
      </CalendarHeader>
      <CalendarGrid>
      {days.map((day) => {
  const disabled = isDisabled(day.date)
  const selected = selectedDate ? isSameDate(day.date, selectedDate) : false

  return (
    <CalendarDay
      key={day.date.toISOString()}
      $otherMonth={!day.isCurrentMonth}
      $today={day.isToday}
      $selected={selected}
      $disabled={disabled}
      $holiday={day.isHoliday}
      $sunday={day.isSunday}
      onClick={!disabled ? () => handleSelect(day.date) : undefined}
    >
      {day.date.getDate()}
    </CalendarDay>
  )
})}
      </CalendarGrid>
    </CalendarContainer>
  )
}
