import moment from 'moment';
import Timeline, { DateHeader, SidebarHeader, TimelineHeaders, TodayMarker } from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import './App.css';
import { Button, Col, FloatButton, Input, Modal, Popover, Row, Tag, Tooltip } from 'antd';
import TooltipCard from './utils/TooltipCard';
import { styleGlobal } from './Style/styleGlobal';
import { useState } from 'react';
import {
  ItemDropDownGantchart,
  StyledColHeightFix,
  StyledRowPointer,
  StyledSpanRighDropDown,
} from './StyledComponent/GantchartStyled';
import { DottedIcon } from './Icons/DottedIcon';
import { IconPlusCircle } from './Icons/IconPlusCircle';
import { useMediaQuery } from 'react-responsive';
import { IconJangkar } from './Icons/IconJangkar';
import { FromToOnTop } from './Components/FromToOnTop';
import ResourceItemDropdown from './Components/ResourceItemDropdown';
import { InfoIcon } from './Icons/InfoIcon';
import ModalAssignResource from './Components/ModalAssignResoure';
import { StyledDividerMarginLess } from './StyledComponent/ModalAssignStyled';
import SidebarItem from './Components/SidebarItems';
import { FilterDropdownContent } from './utils/popoverFilterContent';
import { VesselDetail } from './Icons/VesselDetail';

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const [rowDownItem, setRowDownItem] = useState(0);
  const [heightItem, setHeightItem] = useState(70);
  const [rightDownID, setRightDownID] = useState(0);
  const [leftDownID, setLeftDownID] = useState(0);
  const [detailCard, setDetailCard] = useState(false);
  const visibleTimeStartValue = moment().startOf('hour').subtract(30, 'minute').valueOf();
  const visibleTimeEndValue = moment().startOf('hour').add(8, 'hour').valueOf();
  const [visibleTimeStart, setVisibleTimeStart] = useState(visibleTimeStartValue);
  const [visibleTimeEnd, setVisibleTimeEnd] = useState(visibleTimeEndValue);
  const [sidebarHide, setSideBarHide] = useState(false);
  const [modalListServed, setModalListServed] = useState(false);

  const groups = (rowDownItem, heightItem) => {
    let arrGroup = [];
    for (let i = 1; i < 10; i++) {
      arrGroup.push({
        id: i,
        title: `group ${i}`,
        height: rowDownItem === i ? heightItem : 70,
      });
    }
    return arrGroup;
  };

  const handleTimeChange = (startVisTime, endVisTime) => {
    setVisibleTimeStart(startVisTime);
    setVisibleTimeEnd(endVisTime);
  };

  const handleBackTime = () => {
    // setVisibleTimeStart(visibleTimeStartValue);
    // setVisibleTimeEnd(visibleTimeEndValue);
    window.location.reload();
  };

  const items = [
    {
      id: 1,
      group: 1,
      title: 'MV PAROS',
      id_order_header: 1,
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
      height: 200,
    },
    {
      id: 2,
      group: 2,
      title: 'MV PAROS 2',
      id_order_header: 2,
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(2.5, 'hour'),
      height: 300,
    },
    {
      id: 3,
      group: 3,
      title: 'MV PAROS 3',
      id_order_header: 3,
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(5, 'hour'),
      height: 400,
    },
  ];

  const handleItemClickedLeft = (item) => {
    setRowDownItem(item.group);
    setHeightItem(item?.height);
    setLeftDownID(item.id);
    setRightDownID(0);
  };

  const handleItemClickedRight = (item) => {
    setRowDownItem(item.group);
    setHeightItem(item?.height);
    setRightDownID(item.id);
    setLeftDownID(0);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModalAdd = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const itemRenderDetail = ({ getItemProps, item, itemContext, timelineContext }) => {
    const maxWidthItems = 185;
    return (
      <div
        {...getItemProps({
          style: {
            marginTop: 20,
            marginLeft: 0,
            paddingLeft: 0,
            background: styleGlobal.colors.primary,
          },
        })}
      >
        <StyledRowPointer justify="space-around">
          <StyledColHeightFix span={18} onClick={() => handleItemClickedLeft(item)}>
            <FromToOnTop />
            <div style={{ display: 'flex', height: 26 }}>
              <Tooltip
                color={styleGlobal.colors.netral}
                title={<TooltipCard />}
                overlayInnerStyle={{
                  borderRadius: 10,
                  width: 210,
                }}
                placement="topLeft"
              >
                <span
                  style={{
                    marginRight: 10,
                    alignItems: 'center',
                    display: itemContext.width > 120 ? 'flex' : 'none',
                  }}
                >
                  <InfoIcon />
                </span>
              </Tooltip>
              <span
                style={{
                  fontSize: itemContext.width > maxWidthItems ? 12 : 10,
                  alignSelf: 'center',
                  position: itemContext.width > 120 ? 'relative' : 'absolute',
                }}
              >
                {itemContext.title}
              </span>
            </div>
          </StyledColHeightFix>

          <StyledColHeightFix span={6}>
            <Row>
              <Col span={20} style={{ display: 'flex', justifyContent: 'end', height: 26 }}>
                {itemContext.width > maxWidthItems && (
                  <>
                    <span className="iconInItem">
                      <IconJangkar />
                    </span>
                    <span className="iconInItem">
                      <IconJangkar />
                    </span>
                    <span className="iconInItem">
                      <IconJangkar />
                    </span>
                  </>
                )}
                <span onClick={() => showModalAdd()}>
                  <IconPlusCircle responsiveIcon={itemContext.width > maxWidthItems ? 18 : 16} />
                </span>
              </Col>
              <Col
                span={4}
                style={{ display: 'flex', justifyContent: 'end', height: 26, alignItems: 'center' }}
                onClick={() => handleItemClickedRight(item)}
              >
                <DottedIcon />
              </Col>
            </Row>
          </StyledColHeightFix>
        </StyledRowPointer>

        {rightDownID === item.id && (
          <ItemDropDownGantchart widthItem={'118px'}>
            <StyledSpanRighDropDown onClick={() => showModalAdd()}>Reschedule</StyledSpanRighDropDown>
            <StyledSpanRighDropDown onClick={() => showModalAdd()}>Deploy All</StyledSpanRighDropDown>
            <StyledSpanRighDropDown onClick={() => showModalAdd()}>Open AIS</StyledSpanRighDropDown>
            <StyledSpanRighDropDown onClick={() => showModalAdd()}>Generate Token</StyledSpanRighDropDown>
            <StyledSpanRighDropDown onClick={() => showModalAdd()}>Approaching Time</StyledSpanRighDropDown>
          </ItemDropDownGantchart>
        )}

        {leftDownID === item.id && (
          <ResourceItemDropdown
            responsiveItem={itemContext.width > maxWidthItems ? true : false}
            showModalAdd={showModalAdd}
          />
        )}
      </div>
    );
  };

  const contentColorInfo = (
    <div>
      <p>
        <span
          style={{
            fontSize: 10,
            background: ' #FFA800',
            padding: 6,
            borderRadius: 6,
            textAlign: 'center',
            minWidth: 68,
            color: '#Fff',
          }}
        >
          Assigned
        </span>
        bla bla bla
      </p>
      <p>
        {' '}
        <span
          style={{
            fontSize: 10,
            background: 'red',
            padding: 6,
            borderRadius: 6,
            textAlign: 'center',
            minWidth: 68,
            color: '#Fff',
          }}
        >
          Undeploy
        </span>
        bla bla bla
      </p>
    </div>
  );

  const minZoom = 60 * 60 * 7000; // 5 hour in milliseconds
  const maxZoom = 60 * 60 * 9000; // 1 day in milliseconds

  return (
    <>
      {isTabletOrMobile && (
        <div className="isNotDesktop">
          <p>
            Sorry Cannot Open From Handphone :( <br /> You Can Open It From Desktop Or PC
          </p>
        </div>
      )}
      <div style={{ display: isTabletOrMobile ? 'none' : 'flex', padding: 10, gap: 5 }}>
        <Modal
          title="List Vessel Served / Unserved"
          open={modalListServed}
          footer={null}
          width={1200}
          onCancel={() => setModalListServed((prev) => !prev)}
        >
          <Row style={{ border: '1px solid #8A8C8F', padding: 16, borderRadius: 10, alignItems: 'center' }}>
            <Col span={6} style={{ display: 'flex' }}>
              <div
                style={{
                  padding: 10,
                  marginRight: 10,
                  background: '#F1F6FE',
                  borderRadius: 10,
                  border: '1px solid #2995E7',
                }}
              >
                <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="Vector"
                    d="M9.45384 1.49989C9.45384 0.671669 10.158 0 11.0295 0H17.332C18.2036 0 18.9077 0.671669 18.9077 1.49989V2.99978H21.2711C22.576 2.99978 23.6346 4.00704 23.6346 5.24961V11.2492L25.8208 11.9429C26.9631 12.3038 27.2733 13.7005 26.387 14.4692L21.4139 18.8142C20.6163 19.2501 19.7053 19.522 18.9077 19.522C17.9426 19.522 16.8987 19.1611 15.9927 18.5658C14.9095 17.8393 13.457 17.8393 12.3688 18.5658C11.5219 19.1189 10.4977 19.522 9.45384 19.522C8.65618 19.522 7.74526 19.2501 6.94759 18.8095L1.97399 14.4692C1.08818 13.7005 1.40085 12.3038 2.54023 11.9429L4.72692 11.207V5.20742C4.72692 4.00704 5.78556 2.95759 7.09038 2.95759H9.45384V1.49989ZM7.8782 10.2508L13.1861 8.56342C13.8312 8.36188 14.5304 8.36188 15.1754 8.56342L20.4833 10.2508V5.99955H7.8782V10.2508ZM18.9077 20.9984C20.2322 20.9984 21.6355 20.4922 22.7188 19.7751H22.7237C23.3096 19.3767 24.1024 19.4095 24.6538 19.8548C25.358 20.4125 26.2541 20.8391 27.1453 21.0359C27.9922 21.2234 28.5191 22.0343 28.3221 22.8405C28.1252 23.6467 27.234 24.1482 26.4264 23.9607C25.2201 23.6889 24.2205 23.1826 23.5607 22.7889C22.1328 23.5154 20.5326 23.9982 18.9077 23.9982C17.337 23.9982 15.9238 23.5342 14.9489 23.1123C14.6584 22.9905 14.4023 22.8639 14.1808 22.7514C13.9592 22.8639 13.7031 22.9905 13.4126 23.1123C12.4377 23.5342 11.0246 23.9982 9.45384 23.9982C7.78465 23.9982 6.22871 23.5154 4.80078 22.7889C4.14197 23.1826 3.14094 23.6889 1.93361 23.9607C1.08621 24.1482 0.23896 23.6467 0.0414735 22.8405C-0.156033 22.0343 0.370871 21.2234 1.21817 21.0359C2.10939 20.8391 3.0016 20.4125 3.70817 19.8548C4.25719 19.4095 5.0519 19.3767 5.63784 19.7751H5.64276C6.73094 20.4922 8.12932 20.9984 9.45384 20.9984C10.8079 20.9984 12.162 20.5016 13.2698 19.7751C13.8164 19.4048 14.5451 19.4048 15.0917 19.7751C16.1552 20.5016 17.5536 20.9984 18.9077 20.9984Z"
                    fill="#2995E7"
                  />
                </svg>
              </div>
              <div>
                <h4>MV PAROS</h4>
                <span>PT SEM INDO JAYA</span>
              </div>
            </Col>
            <Col span={5}>
              <h5>LOCATION FROM / TO</h5>
              <h6>LAUT / DERMAGA SOEKARNO HATTA</h6>
            </Col>
            <Col span={4}>
              <h5>APPROVAL TIME</h5>
              <h6>2023-07-05 19:27</h6>
            </Col>
            <Col span={6}>
              <h5>WAITING TIME</h5>
              <h6>2023-07-05 19:27 s/d 2023-07-07 19:27</h6>
            </Col>
            <Col span={3}>
              <h5>STATUS</h5>
              <span
                style={{
                  fontSize: 10,
                  background: ' #B5B5C3',
                  padding: 6,
                  borderRadius: 6,
                  textAlign: 'center',
                  minWidth: 68,
                  color: '#Fff',
                }}
              >
                Unassigned
              </span>
            </Col>
          </Row>
        </Modal>
        <div className="containerChildChart" style={{ width: sidebarHide ? '100%' : '80%' }}>
          <ModalAssignResource isModalOpen={isModalOpen} handleOk={handleOk} handleCancels={handleCancel} />
          {detailCard && (
            <div
              style={{
                height: 300,
                width: 250,
                position: 'absolute',
                zIndex: 100,
                top: 120,
                border: '1px solid #C0C0C2',
                borderRadius: 10,
                background: '#FFF',
                padding: 10,
                overflowY: 'scroll',
                boxShadow: '0 5px 10px 5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <VesselDetail />
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 11 }}>MV PAROS 3</span>
                <span
                  style={{
                    fontSize: 10,
                    background: ' #FFA800',
                    padding: 6,
                    borderRadius: 6,
                    textAlign: 'center',
                    minWidth: 68,
                  }}
                >
                  Assigned
                </span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>Company</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>PT. Ship Of Sem</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>Order No.</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>12379218 - 1</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>Service Code</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>Shifting</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>Location From</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>HATTA - PETIKEMAS</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>Location To</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>HATTA - CURAH KERING</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>Request Time</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>2023-06-02 16:00</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>Approval Time</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>2023-06-02 16:00</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>PKK Inaportnet</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>PKK.DN.IDMAK.2305.320724</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>PKK</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>R80018000002</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>PPK</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>R80018000002</span>
              </div>

              <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', paddingRight: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>SPB</span>
                  <span style={{ fontSize: 11, fontWeight: 'bolder' }}>:</span>
                </div>
                <span style={{ fontSize: 11, width: '50%' }}>SPB.IDMAK.2303.020040</span>
              </div>
            </div>
          )}
          <Row justify={'space-between'} style={{ marginBottom: 10 }}>
            <Col>
              <Tag onClick={() => setModalListServed((prev) => !prev)} style={{ cursor: 'pointer' }} color="red">
                Unserved Vessel : 10
              </Tag>
            </Col>
            <Col>
              <Tag onClick={() => setModalListServed((prev) => !prev)} style={{ cursor: 'pointer' }} color="green">
                Vessel Being Serviced : 10
              </Tag>
            </Col>
            <Col>
              <Tag onClick={() => setModalListServed((prev) => !prev)} style={{ cursor: 'pointer' }} color="blue">
                Vessel To Be Served : 10
              </Tag>
            </Col>
          </Row>
          <FloatButton
            style={{ border: '1px solid black' }}
            onClick={handleBackTime}
            icon={
              <img
                height={20}
                src={
                  'data:image/png;base64,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'
                }
              />
            }
          />
          <div className="timeline-background"></div>
          <Timeline
            groups={groups(rowDownItem, heightItem)}
            items={items}
            onTimeChange={(startData, endData) => handleTimeChange(startData, endData)}
            visibleTimeStart={visibleTimeStart}
            visibleTimeEnd={visibleTimeEnd}
            sidebarWidth={0}
            // defaultTimeStart={moment().add(-4, 'hour')}
            // defaultTimeEnd={moment().add(6, 'hour')}
            lineHeight={60}
            itemRenderer={itemRenderDetail}
            minZoom={minZoom}
            maxZoom={maxZoom}
            sidebarContent={<div>Holla</div>}
            onItemDeselect={() => {
              setRowDownItem(0);
              setRightDownID(0);
              setLeftDownID(0);
              setDetailCard(false);
            }}
            onCanvasClick={() => setDetailCard(false)}
          >
            <TimelineHeaders>
              <SidebarHeader>
                {({ getRootProps, data }) => {
                  return <div {...getRootProps()}>Left</div>;
                }}
              </SidebarHeader>
              <DateHeader unit="primaryHeader" />
              <DateHeader labelFormat={'HH:mm'} />
            </TimelineHeaders>
            <TodayMarker>
              {({ styles }) => {
                styles = {
                  ...styles,
                  backgroundColor: 'transparent',
                  width: '1px',
                  borderStyle: 'dashed',
                  borderColor: 'red',
                };
                return <div style={styles} />;
              }}
            </TodayMarker>
          </Timeline>
        </div>
        <div
          style={{
            border: '1px solid',
            height: 'fit-content',
            position: 'sticky',
            borderRadius: 10,
            right: '-21px',
            display: !sidebarHide ? 'none' : '',
          }}
          onClick={() => setSideBarHide((prev) => !prev)}
        >
          <img
            src="https://indonesiamodificationexpo.com/wp-content/uploads/2018/04/png-transparent-computer-icons-encapsulated-postscript-others-miscellaneous-button-icon-burger-menu.png"
            height={40}
            width={40}
            style={{ borderRadius: 10 }}
          />
        </div>
        <div
          style={{
            width: '20%',
            background: '#fff',
            border: '1px solid #c4c4c4',
            borderRadius: 10,
            padding: 10,
            display: sidebarHide ? 'none' : '',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <Input
              placeholder="Search"
              style={{
                width: 250,
              }}
            />
            <Popover placement="bottomRight" content={FilterDropdownContent} title="Filter Items" trigger="click">
              <Button>Filter</Button>
            </Popover>
          </div>
          <div style={{ marginTop: 10, fontWeight: styleGlobal.fontWeight.bold }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Vessel Name</p>
              <div style={{ gap: 20, display: 'flex' }}>
                <span onClick={() => setSideBarHide((prev) => !prev)}>
                  <img height={20} src="https://static.thenounproject.com/png/1159224-200.png" />
                </span>
                <span>
                  <Popover content={contentColorInfo} title="Color Info" arrow={false}>
                    <img
                      height={20}
                      src={
                        'https://png.pngtree.com/png-clipart/20190614/original/pngtree-info-vector-icon-png-image_3791375.jpg'
                      }
                    />
                  </Popover>
                </span>
              </div>
            </div>
            <StyledDividerMarginLess style={{ background: 'black' }} />
          </div>
          <SidebarItem spogColor={'#68BB59'} setDetailCard={setDetailCard} />
          <SidebarItem spogColor={styleGlobal.colors.danger} setDetailCard={setDetailCard} />
        </div>
      </div>
    </>
  );
}

export default App;
