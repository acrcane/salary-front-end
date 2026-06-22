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
  width: 420px;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  background: var(--surface);
`
export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  > h2 {
    display: flex;
    align-items: baseline;
    gap: 8px;
    color: var(--text);
    font-size: 2em;
    font-weight: 600;
    letter-spacing: -0.002em;
    > span {
      font-size: 0.8125rem;
      font-weight: 400;
      color: var(--text-sub);
    }
  }
  > button {
    width: 28px;
    height: 28px;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-sub);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ease;
    outline: none;
    &:hover {
      color: var(--accent-light);
      border-color: var(--border-hover);
      background: rgba(var(--accent-rgb), 0.08);
    }
  }
`
export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`
export const CalendarDayName = styled.div`
  text-align: center;
  padding: 0 0 10px;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--text-muted);

  &:nth-child(6),
  &:nth-child(7) {
    color: rgba(var(--accent-rgb), 0.35);
  }
`
export const CalendarDay = styled.div<DayProps>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 400;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  transition: all 0.12s ease;

  color: ${({ $otherMonth, $disabled }) =>
    $disabled || $otherMonth ? 'var(--text-muted)' : 'var(--text)'};

  ${({ $holiday, $sunday, $otherMonth }) =>
    ($holiday || $sunday) && !$otherMonth &&
    `color: var(--accent-light);`
  }

  ${({ $today }) =>
    $today &&
    `
      background: var(--accent);
      color: #fff;
      font-weight: 600;
      box-shadow: 0 2px 12px var(--glow);
    `
  }

  ${({ $selected, $today }) =>
    $selected && !$today &&
    `
      background: rgba(var(--accent-rgb), 0.15);
      color: var(--accent-light);
      font-weight: 500;
    `
  }

  &:hover {
    background: rgba(var(--accent-rgb), 0.08);
  }
`
