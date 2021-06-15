import styled, { css } from "styled-components"

export const Section = styled.div`
  width: 100%;
  ${props =>
    props.smallPadding &&
    css`
      padding: 6rem 0;
      @media (max-width: 728px) {
        padding: 2rem 0;
      }
    `}
  ${props =>
    props.largePadding &&
    css`
      padding: 12rem 0;
      @media (max-width: 728px) {
        padding: 2rem 0;
      }
    `}
  ${props =>
    props.fullHeight &&
    css`
      height: calc(100vh);
    `}
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;

  ${props =>
    props.nonFluid &&
    css`
      max-width: 1200px;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${props =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `};
`
export const Heading = styled.h1`
  font-weight: 700;
  line-height: 1.45;
  font-style: normal;
  margin-bottom: 4px;
  text-transform: uppercase;

  ${props =>
    props.small &&
    css`
      font-size: 1.2rem;
    `}
  ${props =>
    props.large &&
    css`
      font-size: 3.2rem;
      font-weight: 400;
      text-transform: none;
      @media (max-width: 568px) {
        font-size: 2.2rem;
      }
    `}
    ${props =>
    props.alignCenter &&
    css`
      text-align: center;
    `}
`
export const BodyText = styled.p`
  font-size: 2.2rem;
  line-height: 1.45;
  font-weight: 300;
  ${props =>
    props.bottomMargin &&
    css`
      margin-bottom: 6rem;
    `}

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`
export const ButtonPrimary = styled.button`
  font-weight: 400;
  font-size: 1.6rem;
  border: 1px solid #000;
  padding: 1rem 2rem;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #000;
    color: #fff;
  }
`
