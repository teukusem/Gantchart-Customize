import moment from 'moment'
import Timeline, { DateHeader, TimelineHeaders, TodayMarker, } from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import './App.css'
import { Button, Col, Row, Tooltip } from 'antd'
import TooltipCard from './Components/TooltipCard'
import { styleGlobal } from './Style/styleGlobal'
import react, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons';

function App() {
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
      title: 'item 1',
      id_order_header: 1,
      start_time: moment(),
      end_time: moment().add(4, 'hour')
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      id_order_header: 2,
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(1, 'hour')
    },
    {
      id: 3,
      group: 3,
      title: 'item 3',
      id_order_header: 3,
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(5, 'hour')
    }
  ]

  const handleItemSelect = (itemId) => {
    setRowDownItem(itemId)
  }

  const handleItemRight = (id) => {
    setRightDownID(id)
  }

  const itemRenderDetail = ({ getItemProps, getResizeProps, item, itemContext, timelineContext }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()
    return (
      <div {...getItemProps(item.itemProps)}>
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ''}
        <Row justify='space-around'>
            <Tooltip
              color={styleGlobal.colors.netral}
              title={<TooltipCard />}
              overlayInnerStyle={{
                borderRadius: 10,
                width: 300,
              }}
              placement="topLeft"
            >
              <Col 
                span={18}
                onClick={() => {
                  handleItemSelect(item.group)
                  setLeftDownID(item.id)
                }}
              >
                {itemContext.title}
              </Col>
            </Tooltip>
          <Col span={6}>
          <Row>
          <div 
            >
            <Button
              type="primary" shape="circle" icon={<DownloadOutlined />} size='small' />
          </div>
          <div 
                onClick={() => {
                  handleItemSelect(item.group)
                  handleItemRight(item.id)
                }}
                >
            X
          </div>
          </Row>
          </Col>

        </Row>

        {rightDownID === item.id && (
        <div
          style={{
            width: 157,
            position: 'absolute',
            right: 0,
            top: 50,
            borderRadius: 25,
            padding: 10,
            border: `0.5px solid red`,
            zIndex: 1100,
            backgroundColor: '#FFFFFF',
            color: 'black'
          }}
        >
          <p>ASEMM</p>
        </div>
        )}
        {leftDownID === item.id && (
          <div
          style={{
            width: '100%',
            position: 'absolute',
            right: 0,
            top: 50,
            borderRadius: 25,
            padding: 10,
            border: `0.5px solid red`,
            zIndex: 1100,
            backgroundColor: '#FFFFFF',
            color: 'black'
          }}
        >
          <p>Bacot lu</p>
        </div>
        )}
      </div>
    )
  }



  const minZoom = 60 * 60 * 5000; // 5 hour in milliseconds
  const maxZoom = 24 * 60 * 60 * 1000; // 1 day in milliseconds


  return (
    <div>
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
  );
}

export default App;
