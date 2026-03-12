import { useMemo } from "react";
import Holidays from 'date-holidays'


const hd = new Holidays('PL')
export interface CalendarDay {
    date: Date,
    isCurrentMonth: boolean,
    isToday: boolean,
    isHoliday: boolean,
    isSunday: boolean,
}

export const useCalendar = (currentDate: Date) => {
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    return useMemo(() => {
        const firstDayOfMonth = new Date(year, month, 1)
        const lastDayOfMonth = new Date(year, month + 1, 0)
        const holidays = hd.getHolidays(year).filter(h => h.type === 'public')
        const weekStart = firstDayOfMonth.getDay() || 7
        const daysInMonth = lastDayOfMonth.getDate()
        const isSunday = (date: Date) => date.getDay() === 0
        const isHoliday = (date: Date) => {
            return holidays.some(h => {
                return new Date(h.date).toDateString() === date.toDateString()
            })
        }
        
        const days: CalendarDay[] = []
        // previos month days
        for(let i = weekStart - 1; i > 0; i-- ){
            const date = new Date(year, month, 1 - i)
            days.push({
                date,
                isCurrentMonth: false,
                isToday: isSameDate(date, new Date()),
                isHoliday: isHoliday(date),
                isSunday: isSunday(date)
            })
        }
        
        
        // day of this month
        for(let i = 1; i <= daysInMonth; i++){
            const date = new Date(year, month, i)
            days.push({
                date,
                isCurrentMonth: true,
                isToday: isSameDate(date, new Date()),
                isHoliday: isHoliday(date),
                isSunday: isSunday(date)
            })
        }

        // next month days
        const remaining = 42 - days.length
        for(let i = 1; i <= remaining; i++){
            const date = new Date(year, month + 1, i)
            days.push({
                date,
                isCurrentMonth: false,
                isToday: isSameDate(date, new Date()),
                isHoliday: isHoliday(date),
                isSunday: isSunday(date)
            })
        }
        return days
    }, [month, year])
}
export const isSameDate = (a: Date, b: Date) =>
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();