import React from 'react';
import {
  ItemDropDownGantchart,
  StyledCardChildResource,
  StyledIconChilCard,
  StyledRowCardResourceWrapper,
  StyledRowGapChildWrapper,
  StyledWrapperResource,
} from '../StyledComponent/GantchartStyled';
import { Button } from 'antd';
import { PilotCar } from '../Icons/PilotCar';
import { styleGlobal } from '../Style/styleGlobal';

const ResourceItemDropdown = ({}) => {
  return (
    <ItemDropDownGantchart widthItem={'100%'} backgorundColor={'transparent'} boxShadow={'none'}>
      <StyledWrapperResource justifyItems={'space-between'}>
        <StyledRowCardResourceWrapper>
          <StyledRowGapChildWrapper>
            <StyledIconChilCard>
              <PilotCar />
            </StyledIconChilCard>
            <StyledCardChildResource>
              <span style={{ fontWeight: styleGlobal.fontWeight.bolder, color: styleGlobal.colors.primary }}>
                B 12345 CD
              </span>
              <span style={{ fontWeight: styleGlobal.fontWeight.semiBold }}>SPK Delivered</span>
            </StyledCardChildResource>
          </StyledRowGapChildWrapper>
          <div className="divWrapButtonSpk">
            <Button
              size={'small'}
              style={{ width: '80%', background: styleGlobal.colors.primary, color: '#fff', fontSize: 11 }}
            >
              Send SPK
            </Button>
          </div>
        </StyledRowCardResourceWrapper>

        <StyledRowCardResourceWrapper>
          <StyledRowGapChildWrapper>
            <StyledIconChilCard>
              <PilotCar />
            </StyledIconChilCard>
            <StyledCardChildResource>
              <span style={{ fontWeight: styleGlobal.fontWeight.bolder, color: styleGlobal.colors.primary }}>
                B 12345 CD
              </span>
              <span style={{ fontWeight: styleGlobal.fontWeight.semiBold }}>SPK Delivered</span>
            </StyledCardChildResource>
          </StyledRowGapChildWrapper>
          <div className="divWrapButtonSpk">
            <Button
              size={'small'}
              style={{ width: '80%', background: styleGlobal.colors.primary, color: '#fff', fontSize: 11 }}
            >
              Send SPK
            </Button>
          </div>
        </StyledRowCardResourceWrapper>
      </StyledWrapperResource>
    </ItemDropDownGantchart>
  );
};

export default ResourceItemDropdown;
