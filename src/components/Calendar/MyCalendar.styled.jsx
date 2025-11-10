import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--bg-dark, #121212);
  color: var(--white, #fff);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 300px;
  .rbc-calendar {
    background: transparent;
    color: inherit;
  }

  .rbc-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    color: var(--white);
  }

  .rbc-toolbar button {
    background: none;
    border: 1px solid var(--pink, #ff6bcb);
    color: var(--white);
    padding: 6px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .rbc-toolbar button:hover {
    background-color: var(--pink, #ff6bcb);
    color: var(--bg-dark, #121212);
  }

  .rbc-toolbar-label {
    font-size: 1.4rem;
    font-weight: 600;
  }

  /* Дні тижня */
  .rbc-header {
    background: rgba(255, 255, 255, 0.05);
    color: var(--pink, #ff6bcb);
    font-weight: 600;
    padding: 8px 0;
    text-transform: uppercase;
  }

  /* Комірки */
  .rbc-day-bg {
    background: rgba(255, 255, 255, 0.03);
    transition: background 0.2s;
    /* border-radius: 50%; */
  }

  .rbc-day-bg:hover {
    background: rgba(255, 107, 203, 0.2);
  }

  /* Події */
  .rbc-event {
    background-color: var(--pink, #ff6bcb);
    border-radius: 8px;
    padding: 4px 8px;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--bg-dark, #121212);
  }

  /* Сьогодні */
  .rbc-today {
    background: rgba(255, 107, 203, 0.15);
  }

  /* Кнопки вибору виду */
  .rbc-btn-group button {
    border-radius: 6px;
  }

  .rbc-active {
    background-color: var(--pink, #ff6bcb) !important;
    color: var(--bg-dark, #121212) !important;
  }

  /* Скрол */
  .rbc-time-content {
    scrollbar-width: thin;
    scrollbar-color: var(--pink, #ff6bcb) var(--bg-dark, #121212);
  }

  .rbc-time-content::-webkit-scrollbar {
    width: 8px;
  }

  .rbc-time-content::-webkit-scrollbar-thumb {
    background-color: var(--pink, #ff6bcb);
    border-radius: 8px;
  }
`
