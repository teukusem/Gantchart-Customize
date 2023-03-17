import moment from 'moment';
import Timeline, { DateHeader, SidebarHeader, TimelineHeaders, TodayMarker } from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import './App.css';
import { Button, Col, Input, Row, Tooltip } from 'antd';
import TooltipCard from './Components/TooltipCard';
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

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const [rowDownItem, setRowDownItem] = useState(0);
  const [rightDownID, setRightDownID] = useState(0);
  const [leftDownID, setLeftDownID] = useState(0);

  const groups = (rowDownItem) => {
    let arrGroup = [];
    for (let i = 1; i < 10; i++) {
      arrGroup.push({
        id: i,
        title: `group ${i}`,
        height: rowDownItem === i ? 300 : 70,
      });
    }
    return arrGroup;
  };

  const items = [
    {
      id: 1,
      group: 1,
      title: 'MV PAROS',
      id_order_header: 1,
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 2,
      group: 2,
      title: 'MV PAROS 2',
      id_order_header: 2,
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(2.5, 'hour'),
    },
    {
      id: 3,
      group: 3,
      title: 'MV PAROS 3',
      id_order_header: 3,
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(5, 'hour'),
    },
  ];

  const handleItemClickedLeft = (item) => {
    setRowDownItem(item.group);
    setLeftDownID(item.id);
    setRightDownID(0);
  };

  const handleItemClickedRight = (item) => {
    setRowDownItem(item.group);
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
    console.log('>>> itemContext.width', itemContext);

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
          </ItemDropDownGantchart>
        )}

        {leftDownID === item.id && (
          <ResourceItemDropdown responsiveItem={itemContext.width > maxWidthItems ? true : false} />
        )}
      </div>
    );
  };

  const minZoom = 60 * 60 * 7000; // 5 hour in milliseconds
  const maxZoom = 60 * 60 * 9000; // 1 day in milliseconds

  return (
    <div style={{ display: 'flex', padding: 10, gap: 10 }}>
      <div className="containerChildChart">
        {isTabletOrMobile && (
          <div className="isNotDesktop">
            <p>
              Sorry Cannot Open From Handphone :( <br /> You Can Open It From Desktop Or PC
            </p>
          </div>
        )}
        <ModalAssignResource isModalOpen={isModalOpen} handleOk={handleOk} handleCancels={handleCancel} />
        <div className="timeline-background"></div>

        <Timeline
          groups={groups(rowDownItem)}
          items={items}
          sidebarWidth={0}
          defaultTimeStart={moment().add(-4, 'hour')}
          defaultTimeEnd={moment().add(4, 'hour')}
          lineHeight={60}
          itemRenderer={itemRenderDetail}
          minZoom={minZoom}
          maxZoom={maxZoom}
          onItemDeselect={() => {
            setRowDownItem(0);
            setRightDownID(0);
            setLeftDownID(0);
          }}
        >
          <TimelineHeaders>
            {/* <SidebarHeader>
              {({ getRootProps }) => {
                return <div {...getRootProps()}>Left</div>;
              }}
            </SidebarHeader> */}
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
          width: '25%',
          background: '#fff',
          border: '1px solid #c4c4c4',
          borderRadius: 10,
          padding: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Input
            placeholder="Search"
            style={{
              width: 200,
            }}
          />
          <Button>Filter</Button>
        </div>
        <div style={{ marginTop: 10, fontWeight: styleGlobal.fontWeight.bold }}>
          <p>Vessel Name</p>
          <StyledDividerMarginLess style={{ background: 'black' }} />
        </div>
        <Row
          style={{
            background: '#EFF2F5',
            height: 50,
            padding: 5,
            marginTop: 2,
            borderRadius: 5,
          }}
        >
          <Col span={18} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontSize: 14, fontWeight: styleGlobal.fontWeight.bold }}>MV Paros</span>
            <span style={{ fontSize: 10 }}>MV Paros</span>
          </Col>
          <Col span={6} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
