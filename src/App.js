import moment from 'moment'
import Timeline, { DateHeader, TimelineHeaders, TodayMarker, } from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import './App.css'
import { Col, Modal, Row, Tooltip } from 'antd'
import TooltipCard from './Components/TooltipCard'
import { styleGlobal } from './Style/styleGlobal'
import { useState } from 'react'
import { ItemDropDownGantchart, StyledColHeightFix, StyledRowPointer } from './StyledComponent/DropdownItem'
import { DottedIcon } from './Icons/DottedIcon'
import { IconPlusCircle } from './Icons/IconPlusCircle'
import  { useMediaQuery } from 'react-responsive'
import { IconJangkar } from './Icons/IconJangkar'
import { FromToOnTop } from './Components/FromToOnTop'

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const [rowDownItem, setRowDownItem] = useState(0)
  const [rightDownID, setRightDownID] = useState(0)
  const [leftDownID,setLeftDownID] = useState(0)

  const groups = (rowDownItem) => {
    let arrGroup = []
    for(let i = 1; i < 10; i++){
      arrGroup.push({
        id: i,
        title: `group ${i}`,
        height: rowDownItem === i ? 200 : 70
      })
    }
    return arrGroup
  }

  const items = [
    {
      id: 1,
      group: 1,
      title: 'MV PAROS',
      id_order_header: 1,
      start_time: moment(),
      end_time: moment().add(4, 'hour')
    },
    {
      id: 2,
      group: 2,
      title: 'MV PAROS 2',
      id_order_header: 2,
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(2.5, 'hour')
    },
    {
      id: 3,
      group: 3,
      title: 'MV PAROS 3',
      id_order_header: 3,
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(5, 'hour')
    }
  ]

  const handleItemClickedLeft = (item) => {
    setRowDownItem(item.group)
    setLeftDownID(item.id)
    setRightDownID(0)
  }

  const handleItemClickedRight = (item) => {
    setRowDownItem(item.group)
    setRightDownID(item.id)
    setLeftDownID(0)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const itemRenderDetail = ({ getItemProps, item, itemContext, timelineContext }) => {
    return (
      <div {...getItemProps({style:{
        marginTop: 20,
        marginLeft: 0,
						paddingLeft: 0,
      }})}>
        <StyledRowPointer justify='space-around'>
            <Tooltip
              color={styleGlobal.colors.netral}
              title={<TooltipCard />}
              overlayInnerStyle={{
                borderRadius: 10,
                width: 300,
              }}
              placement="topLeft"
            >
              <StyledColHeightFix 
                span={14}
                onClick={() => handleItemClickedLeft(item)}
                >
                <FromToOnTop />
              <div
              >
                <span>
                {itemContext.title}
                </span>
              </div>
              </StyledColHeightFix>
            </Tooltip>
          <StyledColHeightFix span={10}>
          <Row >
          <Col span={20}
          style={{display:'flex',justifyContent:'end'}}
            >
              <span className='iconInItem'>
                <IconJangkar/>
              </span>
              <span className='iconInItem'>
                <IconJangkar/>
              </span>
              <span className='iconInItem'>
                <IconJangkar/>
              </span>
            <span
              onClick={() => showModal()}
            > 
              <IconPlusCircle
            />
            </span>
          </Col>
          <Col span={4}
           style={{display:'flex',justifyContent:'end'}}
            onClick={() => handleItemClickedRight(item)}
          >
            <DottedIcon />
          </Col>
          </Row>
          </StyledColHeightFix>
        </StyledRowPointer>

        {rightDownID === item.id && (
        <ItemDropDownGantchart widthItem={'125px'}>
          <p onClick={() => showModal()}>ASEMM</p>
        </ItemDropDownGantchart>
        )}

        {leftDownID === item.id && (
          <ItemDropDownGantchart widthItem={'100%'}>
          <p onClick={() => showModal()}>HEBAT</p>
        </ItemDropDownGantchart>
        )}
      </div>
    )
  }


  const minZoom = 60 * 60 * 7000; // 5 hour in milliseconds
  const maxZoom = 24 * 60 * 60 * 1000; // 1 day in milliseconds

 

  return (
    <div>
       {isTabletOrMobile && (
        <div className='isNotDesktop'>
          <p>Sorry Cannot Open From Handphone :( <br/> You Can Open It From Desktop Or PC</p>
        </div>
      )}
    <div className='isResponsive'>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Timeline
        groups={groups(rowDownItem)}
        items={items}
        sidebarWidth={0}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        lineHeight={70}
        itemRenderer={itemRenderDetail}
        minZoom={minZoom}
        maxZoom={maxZoom}
        onItemDeselect={() => {
          setRowDownItem(0)
          setRightDownID(0)
          setLeftDownID(0)
        }}
      >
        <TimelineHeaders>
          <DateHeader unit="primaryHeader"
          />
          <DateHeader
            labelFormat={'HH:mm'}
          />
        </TimelineHeaders>
        <TodayMarker>
          {({ styles }) => {
            styles = {
              ...styles,
              backgroundColor: 'transparent',
              width: '1px',
              borderStyle: 'dashed',
              borderColor: 'red',
            }
            return (
              <div style={styles} />
            )
          }}
        </TodayMarker>
      </Timeline>
    </div>
    </div>

  );
}

export default App;
