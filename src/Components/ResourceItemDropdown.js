import React, { useState } from 'react';
import {
  ItemDropDownGantchart,
  StyledCardChildResource,
  StyledIconChilCard,
  StyledRowCardResourceWrapper,
  StyledRowGapChildWrapper,
  StyledWrapperResource,
} from '../StyledComponent/GantchartStyled';
import { Button, Dropdown, Modal } from 'antd';
import { PilotCar } from '../Icons/PilotCar';
import { styleGlobal } from '../Style/styleGlobal';

const ResourceItemDropdown = ({ responsiveItem, showModalAdd }) => {
  const [isDetail, setIsDetail] = useState(false);
  const items = [
    {
      key: '1',
      label: (
        <a
          onClick={() => setIsDetail(true)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 12, color: '#2995e7' }}
        >
          Details
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          onClick={() => showModalAdd()}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 12, color: 'red' }}
        >
          Change
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: 'red' }}>
          Remove
        </a>
      ),
    },
  ];
  return (
    <ItemDropDownGantchart widthItem={'100%'} backgorundColor={'transparent'} boxShadow={'none'}>
      <Modal title="Modal Detail" open={isDetail} onCancel={() => setIsDetail(false)}>
        <p>Some contents...</p>
      </Modal>
      <StyledWrapperResource justifyItems={'space-between'}>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          trigger={['click']}
        >
          <StyledRowCardResourceWrapper>
            <StyledRowGapChildWrapper>
              <StyledIconChilCard responsiveItem={responsiveItem}>
                <PilotCar responsiveIcon={responsiveItem ? 22 : 16} />
              </StyledIconChilCard>
              <StyledCardChildResource>
                <span
                  style={{
                    fontWeight: styleGlobal.fontWeight.bolder,
                    color: styleGlobal.colors.primary,
                    fontSize: responsiveItem ? 10 : 8,
                  }}
                >
                  B 12345 CD
                </span>
                <span
                  style={{
                    fontWeight: styleGlobal.fontWeight.normal,
                    color: styleGlobal.colors.primary,
                    fontSize: responsiveItem ? 10 : 8,
                  }}
                >
                  Pilot Car Go
                </span>
                <span
                  style={{
                    fontWeight: styleGlobal.fontWeight.semiBold,
                    fontSize: responsiveItem ? 10 : 9,
                    color: '#1BC5BD',
                  }}
                >
                  {responsiveItem ? 'SPK Accepted' : 'Accepted'}
                </span>
              </StyledCardChildResource>
            </StyledRowGapChildWrapper>
            {/* <div className="divWrapButtonSpk">
            <Button
              size={'small'}
              style={{
                width: '80%',
                background: styleGlobal.colors.primary,
                color: '#fff',
                fontSize: responsiveItem ? 10 : 9,
              }}
            >
              Send SPK
            </Button>
          </div> */}
          </StyledRowCardResourceWrapper>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          trigger={['click']}
        >
          <StyledRowCardResourceWrapper>
            <StyledRowGapChildWrapper>
              <StyledIconChilCard responsiveItem={responsiveItem}>
                <PilotCar responsiveIcon={responsiveItem ? 22 : 16} />
              </StyledIconChilCard>
              <StyledCardChildResource>
                <span
                  style={{
                    fontWeight: styleGlobal.fontWeight.bolder,
                    color: styleGlobal.colors.primary,
                    fontSize: responsiveItem ? 10 : 8,
                  }}
                >
                  B 12345 CD
                </span>
                <span
                  style={{
                    fontWeight: styleGlobal.fontWeight.normal,
                    color: styleGlobal.colors.primary,
                    fontSize: responsiveItem ? 10 : 8,
                  }}
                >
                  Pilot Car Go
                </span>
                <span
                  style={{
                    fontWeight: styleGlobal.fontWeight.semiBold,
                    fontSize: responsiveItem ? 10 : 9,
                    color: '#1BC5BD',
                  }}
                >
                  {responsiveItem ? 'SPK Accepted' : 'Accepted'}
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
                  fontSize: responsiveItem ? 10 : 7,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  alert('holla brow');
                }}
              >
                Send SPK
              </Button>
            </div>
          </StyledRowCardResourceWrapper>
        </Dropdown>
      </StyledWrapperResource>
    </ItemDropDownGantchart>
  );
};

export default ResourceItemDropdown;
