import { Col, Row } from "antd";
import styled from "styled-components";

const ItemDropDownGantchart = styled.div`
    width: ${props => props.widthItem};
    position: absolute;
    right: 0px;
    top: 50px;
    border-radius: 25px;
    padding: 10px;
    border: 0.5px solid red;
    z-index: 1000;
    background-color: #FFFFFF;
    color: black;
`

const StyledRowPointer = styled(Row)`
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    height:45px;
`

const StyledColHeightFix = styled(Col)`
    height:45px;
`

export {
    ItemDropDownGantchart,
    StyledRowPointer,
    StyledColHeightFix
}