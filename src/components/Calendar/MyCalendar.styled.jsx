import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--bg-dark, #121212);
  color: var(--white, #fff);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 350px;
  .rbc-calendar {
    background: transparent;
    color: inherit;
  }
  .rbc-toolbar button {
    background: none;
    border: 1px solid var(--pink, #ff6bcb);
    color: var(--pink);
    padding: 6px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .rbc-toolbar button:hover {
    background-color: var(--pink, #ff6bcb);
    color: var(--white, #ffffff);
  }
  .rbc-toolbar-label {
    font-size: 1.5em;
    font-weight: 600;
    color: var(--pink);
  }
  .rbc-header {
    /* background: rgba(255, 255, 255, 0.05); */
    background: transparent;
    color: var(--pink, #ff6bcb);
    font-weight: 600;
    padding: 8px 0;
    text-transform: uppercase;
  } 
  .rbc-day-bg {
    /* background: rgba(238, 37, 231, 0.817); */
    transition: background 0.2s;
  }
  .rbc-day-bg:hover {
    background: rgba(255, 107, 203, 0.2);
  }
  
  .rbc-event {
    background-color: var(--pink, #ff6bcb);
    color: #9f1970; 
    border-radius: 8px;
    /* padding: 4px 8px; */
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--bg-dark, #121212);
  }
  .rbc-today {
    background: var(--pink);
  }
  .rbc-off-range-bg{
    background-color: transparent;
    color: #ccc;

  }
  .rbc-month-view .rbc-row-bg .rbc-sunday + .rbc-date-cell a {
  color: red !important;
}`

