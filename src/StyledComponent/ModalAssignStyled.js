import { Col, Divider, Popover, Row } from 'antd';
import styled from 'styled-components';
import { styleGlobal } from '../Style/styleGlobal';

const StyledRowCardAssign = styled(Row)`
  margin-right: 24px;
  background: #eff2f5;
  height: 72px;
  border-radius: 8px;
  align-context: center;
  &:hover {
    background: #2995e7;
    color: ${styleGlobal.colors.netral};
    cursor: pointer;
  }
`;

const StyledColCardAssignIcon = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledColCardDetailResources = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const StyledWrapperTopDetailResouces = styled.div`
  gap: 2rem;
  display: flex;
  padding: 6px 0px 6px 0px;
`;

const StyledSpanTitleResources = styled.span`
  font-weight: ${styleGlobal.fontWeight.bolder};
  display: flex;
  align-items: center;
`;

const StyledAddResources = styled(Popover)`
  background: aliceblue;
  padding: 8px;
  display: flex;
  border-radius: 50px;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  margin: 10px;
`;

const StyledDividerMarginLess = styled(Divider)`
  margin: 0;
`;

export {
  StyledRowCardAssign,
  StyledColCardAssignIcon,
  StyledColCardDetailResources,
  StyledWrapperTopDetailResouces,
  StyledSpanTitleResources,
  StyledAddResources,
  StyledDividerMarginLess,
};
