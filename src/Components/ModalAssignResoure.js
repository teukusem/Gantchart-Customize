import { Col, Divider, Modal, Row, Tabs } from 'antd';
import Search from 'antd/es/transfer/search';
import ResourceAssign from './ResourceAssign';
import { useState } from 'react';
import { styleGlobal } from '../Style/styleGlobal';
import { IconPilotCarAssign } from '../Icons/IconPilotCar';
import ModalConfirmationAssignResources from './ModalConfrimationResource';
import { IconAddCircle } from '../Icons/IconAddCircle';
import { StyledAddResources, StyledDividerMarginLess } from '../StyledComponent/ModalAssignStyled';
import { StyledSpanRighDropDown } from '../StyledComponent/GantchartStyled';

const ModalAssignResource = ({ isModalOpen, handleCancels }) => {
  const onChange = (key) => {
    console.log(key);
  };
  const [modalConfrim, setIsModalConfrim] = useState(false);
  const showModal = () => {
    setIsModalConfrim(true);
  };
  const handleOk = () => {
    setIsModalConfrim(false);
  };
  const handleCancel = () => {
    setIsModalConfrim(false);
  };

  const items = [
    {
      key: '1',
      label: `Pilot Car Go`,
      children: <ResourceAssign onClick={showModal} IconResource={<IconPilotCarAssign />} />,
    },
    {
      key: '2',
      label: `Pilot`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Sea Pilot`,
      children: `Content of Tab Pane 3`,
    },
  ];

  const content = (
    <div>
      <StyledSpanRighDropDown>Pilot Car Back</StyledSpanRighDropDown>
      <StyledSpanRighDropDown>Pilot Boat Go</StyledSpanRighDropDown>
    </div>
  );

  return (
    <>
      <Modal title="Assign Resource" width={1000} open={isModalOpen} footer={null} onCancel={handleCancels}>
        <Row>
          <Col span={16}>
            <div style={{ padding: '1rem' }}>
              <Search
                placeholder="Search Resource"
                //   onSearch={onSearch}
              />
            </div>
            <Tabs
              tabBarExtraContent={
                <StyledAddResources
                  content={content}
                  trigger="hover"
                  arrow={false}
                  placement="bottom"
                  overlayStyle={{ width: 200 }}
                >
                  <IconAddCircle />
                  <span style={{ color: '#2995E7' }}>Add Resource</span>
                </StyledAddResources>
              }
              tabPosition={'left'}
              items={items}
              onChange={onChange}
            />
          </Col>
          <Col span={8} style={{ borderLeft: '2px solid #E8EAEF', paddingLeft: 10 }}>
            <p style={{ fontWeight: styleGlobal.fontWeight.bolder }}>Preview</p>
            <StyledDividerMarginLess />
            <div>
              <div
                style={{ display: 'flex', fontWeight: styleGlobal.fontWeight.bold, justifyContent: 'space-between' }}
              >
                <p>Pilot Car Go</p>
                <p style={{ color: '#1BC5BD' }}>ID PL-001</p>
              </div>
              <span style={{ fontSize: 12 }}>B 222 UJK, Cipandan</span>
              <StyledDividerMarginLess />
            </div>
          </Col>
        </Row>
      </Modal>

      <ModalConfirmationAssignResources modalConfrim={modalConfrim} handleCancel={handleCancel} handleOk={handleOk} />
    </>
  );
};

export default ModalAssignResource;
