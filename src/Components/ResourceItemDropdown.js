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

const ResourceItemDropdown = ({ responsiveItem = false }) => {
  return (
    <ItemDropDownGantchart widthItem={'100%'} backgorundColor={'transparent'} boxShadow={'none'}>
      <StyledWrapperResource justifyItems={'space-between'}>
        <StyledRowCardResourceWrapper>
          <StyledRowGapChildWrapper>
            <StyledIconChilCard>
              <PilotCar responsiveIcon={responsiveItem ? '26' : '18'} />
            </StyledIconChilCard>
            <StyledCardChildResource>
              <span
                style={{
                  fontWeight: styleGlobal.fontWeight.bolder,
                  color: styleGlobal.colors.primary,
                  fontSize: responsiveItem ? 12 : 8,
                }}
              >
                B 12345 CD
              </span>
              <span
                style={{
                  fontWeight: styleGlobal.fontWeight.normal,
                  color: styleGlobal.colors.primary,
                  fontSize: responsiveItem ? 12 : 8,
                }}
              >
                Pilot Car Go
              </span>
              <span style={{ fontWeight: styleGlobal.fontWeight.semiBold, fontSize: responsiveItem ? 12 : 9 }}>
                {responsiveItem ? 'SPK Delivered' : 'Delivered'}
              </span>
            </StyledCardChildResource>
          </StyledRowGapChildWrapper>
          <div className="divWrapButtonSpk">
            <Button
              size={'small'}
              style={{
                width: '80%',
                background: styleGlobal.colors.primary,
                color: '#fff',
                fontSize: responsiveItem ? 12 : 9,
              }}
            >
              Send SPK
            </Button>
          </div>
        </StyledRowCardResourceWrapper>

        <StyledRowCardResourceWrapper>
          <StyledRowGapChildWrapper>
            <StyledIconChilCard>
              <PilotCar responsiveIcon={responsiveItem ? '26' : '18'} />
            </StyledIconChilCard>
            <StyledCardChildResource>
              <span
                style={{
                  fontWeight: styleGlobal.fontWeight.bolder,
                  color: styleGlobal.colors.primary,
                  fontSize: responsiveItem ? 12 : 8,
                }}
              >
                B 12345 CD
              </span>
              <span
                style={{
                  fontWeight: styleGlobal.fontWeight.normal,
                  color: styleGlobal.colors.primary,
                  fontSize: responsiveItem ? 12 : 8,
                }}
              >
                Pilot Car Go
              </span>
              <span style={{ fontWeight: styleGlobal.fontWeight.semiBold, fontSize: responsiveItem ? 12 : 9 }}>
                {responsiveItem ? 'SPK Delivered' : 'Delivered'}
              </span>
            </StyledCardChildResource>
          </StyledRowGapChildWrapper>
          <div className="divWrapButtonSpk">
            <Button
              size={'small'}
              style={{
                width: '80%',
                background: styleGlobal.colors.primary,
                color: '#fff',
                fontSize: responsiveItem ? 12 : 9,
              }}
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
