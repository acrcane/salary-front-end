import React from 'react'
import {
  AuthLinkButton,
  List,
  ListItems,
  MainTitle,
  Section,
  Title,
} from './WelcomePage.styled'

const WelcomePage = () => {
  return (
    <Section>
      <MainTitle>The best salary calc and personal salary assistent</MainTitle>
      <div>
        <Title>Try salary assistent</Title>
        <List>
          <ListItems>Just register and enter your hourly salary</ListItems>
          <ListItems>
            Don't forget to click or scan the QR code to check in and out
          </ListItems>
          <ListItems>
            At the end of the month, see how many hours you worked and your
            total salary
          </ListItems>
        </List>
      </div>
      <div>
        <AuthLinkButton to="/sign-up">Registration</AuthLinkButton>
        <AuthLinkButton to="/sign-in">Log in</AuthLinkButton>
      </div>
    </Section>
  )
}

export default WelcomePage
