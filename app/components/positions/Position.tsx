import * as React from 'react';
import styled from 'styled-components';
import { GuideOrientation } from '../guide/GuideOrientation';
import { isHorizontalOrientation } from '../helpers/orientation';

interface IProps {
  x: number;
  y: number;
  orientation: GuideOrientation;
  color: string;
}

export const Position = ({ x, y, orientation, color }: IProps) => {
  const isHorizontal = isHorizontalOrientation(orientation);
  const value = isHorizontal ? y : x;
  const axis = isHorizontal ? 'Y' : 'X';

  return (
    <PositionElement isHorizontal={isHorizontal} color={color}>
      <Text>
        {axis}:{value}
      </Text>
    </PositionElement>
  );
};

interface IPositionElementProps {
  isHorizontal: boolean;
  color: string;
}

const PositionElement = styled.div<IPositionElementProps>`
  position: relative;
  top: ${({ isHorizontal }) => (isHorizontal ? '-8px' : '0')};
  left: ${({ isHorizontal }) => (isHorizontal ? '0' : '-25px')};
  top: 0;
  left: 0;
  background: ${({ color }) => color};
  font-weight: normal;
  text-align: center;
  padding: 6px 10px;
  display: inline-block;
`;

const Text = styled.span`
  padding-top: 2px;
  display: block;
  color: #111;
  user-select: none;
`;
