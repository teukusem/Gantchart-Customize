import { Col, Row } from 'antd';
import styled from 'styled-components';

const ItemDropDownGantchart = styled.div`
  width: ${(props) => props.widthItem};
  position: absolute;
  right: 0px;
  top: 50px;
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
  height: 40px;
`;

const StyledColHeightFix = styled(Col)`
  height: 40px;
`;

const StyledSpanRighDropDown = styled.span`
  display: flex;
  cursor: pointer;
  padding: 0px 8px;
  line-height: 3;
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
  width: 145px;
  background: white;
  cursor: pointer;
`;

const StyledRowGapChildWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledIconChilCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardChildResource = styled.div`
  flex-direction: column;
  display: flex;
  line-height: 2;
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
};
