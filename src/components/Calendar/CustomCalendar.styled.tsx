import styled from 'styled-components'

interface DayProps {
  $otherMonth?: boolean
  $today?: boolean
  $selected?: boolean
  $disabled?: boolean
  $holiday?: boolean
  $sunday?: boolean
}

export const CalendarContainer = styled.div`
  width: 320px;
  border: 1px solid var(--white);
  border-radius: 10px;
  padding: 12px;
  background: var(--violet);
  /* backdrop-filter: blur(100px); */
`
export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h2 {
    color: var(--pink);
    font-size: 2em;
    font-weight: 600;
  }
  > button {
    background: transparent;
    color: var(--pink);
    outline: none;
  }
`
export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  color: var(--white);
`
export const CalendarDayName = styled.div`
  text-align: center;
  padding: 8px;
`
export const CalendarDay = styled.div<DayProps>`
  text-align: center;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};

  color: ${({ $otherMonth, $disabled }) =>
    $disabled ? '#ccc' : $otherMonth ? '#aaa' : 'inherit'};

  ${({ $today }) =>
    $today &&
    `
      color: var(--pink);
      border: 1px solid var(--pink);
  `}

  ${({ $disabled }) =>
    $disabled &&
    `
      pointer-events: none;
  `}

  ${({ $selected, $holiday, $sunday }) => {
    if ($selected && ($holiday || $sunday)) {
      return `
        background: var(--white);
        color: var(--pink-second);
      `
    }

    if ($selected) {
      return `
        background: var(--pink);
        color: var(--white);
      `
    }

    if ($holiday || $sunday) {
      return `
        color: var(--pink);
      `
    }

    return ``
  }}

  border-radius: 5px;
`