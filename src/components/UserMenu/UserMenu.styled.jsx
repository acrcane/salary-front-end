import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100 - 80px);
  padding: 0 25px;
  background-color: transparent;
  @media (max-width: 768px) {
    width: 100%;
  }
  color: var(--pink);
  >h2 {
    margin: 0;
    text-align: center;
    font-size: 3em;
    font-weight: 600;
  }
`

export const UserName = styled.h2``

export const AvatarContainer = styled.div``

export const UserAvatar = styled.img``

export const AvatarLabel = styled.label``

export const AvatarInput = styled.input``
