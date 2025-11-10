import React, { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { Container } from './MyCalendar.styled'
import { enUS } from 'date-fns/locale'

const locales = {
  'en-US': enUS,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export const MyCalendar = ({events =[]}) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedRange, setSelectedRande] = useState(null)

  const handleSelectSlot = (slotInfo) => {
    setSelectedRande(slotInfo)
  }
  return (
    <Container>
      <Calendar localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        culture="en-US"
        popup
        views={'month'}
        selectable={{slots: true}}
        onSelectSlot={handleSelectSlot}
        date={currentDate}
        onNavigate={(date) => setCurrentDate(date)}
        style={{ height: '40vh', borderRadius: '16px' }}/>
        {selectedRange && (<div>Vacation: {selectedRange.start.toLocaleDateString()} - {selectedRange.end.toLocaleDateString()}</div>)}
    </Container>
  )
}
