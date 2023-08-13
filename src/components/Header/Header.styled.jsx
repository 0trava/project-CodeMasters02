import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/icon-menu-burger.svg';
import { variables } from 'Styles/GlobalStyle';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0, auto;
  margin-bottom: 72px;
  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
  @media (min-width: 768px) {
    margin-bottom: 33px;
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const BurgerIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  stroke: #343434;
  transition: 250ms ease-in-out;
  &:hover,
  &:focus {
    stroke: #3e85f3;
  }

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

export const GooseTask = styled.img`
  display: none;

  @media (min-width: 1440px) {
    weight: 64px;
    display: block;
    margin-right: 8px;
  }
`;

export const MotivationTask = styled.p`
  display: none;
  color: ${props => props.theme.text_3};
  @media (min-width: 1440px) {
    display: block;
    font-family: 'Inter';

    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Title = styled.h2`
  display: none;

  @media screen and (min-width: 1440px) {
    display: inline;
    margin-bottom: 8px;
    font-family: 'InterBold';
    font-size: 32px;
    line-height: calc((32 / 32) * 100%);
    color: ${props => props.theme.title};
  }
`;

export const ButtonFeedback = styled.button`
  padding: 8px 20px;
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: calc((18 / 16) * 100%);
  text-align: center;
  text-transform: none;
  color: ${variables.colors.white};
  background-color: ${variables.colors.primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: ${variables.transitions.standart};

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    font-size: 14px;
    border-radius: 12px;
  }

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: translateY(-2px);
    box-shadow: ${variables.shadow.shadow};
  }
`;
