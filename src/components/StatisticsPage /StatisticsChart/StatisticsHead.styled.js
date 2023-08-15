import styled from 'styled-components';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

export const LegendList = styled.ul`
  font-family: 'InterRegular';
  font-weight: 400;
  display: flex;
  gap: 30px;
  color: ${({ theme }) => theme.variableColors.text};
  padding-inline-start: 0px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ChartHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* max-width: 307px; */
  justify-content: space-between;
  margin-bottom: 40px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    max-width: 860px;
  }

  @media (min-width: 1440px) {
    max-width: 860px;
  }
`;

export const PrevDayButton = styled.button`
  width: 38px;
  height: 34px;
  border: 0.8px solid ${({ theme }) => theme.variableColors.borderColor};
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.variableColors.buttonBlue};
  }
`;

export const NextDayButton = styled.button`
  width: 38px;
  height: 34px;
  border: 0.8px solid ${({ theme }) => theme.variableColors.borderColor};
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.variableColors.buttonBlue};
  }
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767.9px) {
    width: 100%;
  }
`;

export const ButtDiv = styled.div`
  display: flex;
  @media (min-width: 768px) {
    margin-left: 8px;
  }
`;

export const LeftArrow = styled(MdOutlineKeyboardArrowLeft)`
  fill: ${({ theme }) => theme.variableColors.arrowColor};
`;

export const RightArrow = styled(MdOutlineKeyboardArrowRight)`
  fill: ${({ theme }) => theme.variableColors.arrowColor};
`;
