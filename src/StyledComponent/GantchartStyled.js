import { Col, Row } from 'antd';
import styled from 'styled-components';

const ItemDropDownGantchart = styled.div`
  width: ${(props) => props.widthItem};
  position: absolute;
  right: 0px;
  top: 35px;
  border-radius: 8px;
  padding: 8px 0px;
  z-index: 1000;
  background-color: ${(props) => (props.backgorundColor ? props.backgorundColor : ' #FFFFFF')};
  color: black;
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : '0px 8px 36px rgba(0, 0, 0, 0.16)')};
`;

const StyledRowPointer = styled(Row)`
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  height: 26px;
`;

const StyledColHeightFix = styled(Col)`
  height: 26px;
`;

const StyledSpanRighDropDown = styled.span`
  display: flex;
  cursor: pointer;
  padding: 0px 8px;
  line-height: 3;
  font-size: 10px;
  &:hover {
    background-color: #f1f6fe;
    color: #2995e7;
  }
`;

const StyledWrapperResource = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyItems};
`;

const StyledRowCardResourceWrapper = styled.div`
  border: 1px solid #2995e7;
  border-radius: 6px;
  width: 130px;
  background: white;
  cursor: pointer;
  height: fit-content;
`;

const StyledRowGapChildWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledIconChilCard = styled.div`
  display: ${(props) => (props.responsiveItem ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const StyledCardChildResource = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  line-height: 2;
`;
const TextElipsis = styled.span`
  white-space: nowrap;
  max-width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  ItemDropDownGantchart,
  StyledRowPointer,
  StyledColHeightFix,
  StyledSpanRighDropDown,
  StyledWrapperResource,
  StyledRowCardResourceWrapper,
  StyledRowGapChildWrapper,
  StyledIconChilCard,
  StyledCardChildResource,
  TextElipsis,
};
