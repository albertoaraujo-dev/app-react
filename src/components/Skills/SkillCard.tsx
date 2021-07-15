import React from 'react';
import styled from 'styled-components';
import type { SkillType } from '../../types';

const StyledSkillCard = styled.div`
  width: 200px;
  height: fit-content;
  padding: 20px;
  text-decoration: none;
  color: ${(props) => props.theme.textNormal};
  border: 0.5px solid ${(props) => props.theme.backgroundNormalHover};
  border-radius: 10px;
  box-shadow: 1px 2px 6px 0 ${(props) => props.theme.projectBoxShadow};
`;

const StyledSkillTitle = styled.h3`
  font-size: 18px;
  color: ${(props) => props.theme.textPrimary};
  margin: 0 0 10px 0;
`;

const SkillCard: React.FC<SkillType> = ({ title, list }: SkillType) => {
  const isSkillListWithLevels = list;
  return (
    <StyledSkillCard>
      <StyledSkillTitle>{title}</StyledSkillTitle>
      {isSkillListWithLevels}
    </StyledSkillCard>
  );
};

export default SkillCard;
