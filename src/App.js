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
  const [rightDownID, setRightDownID] = useState(null)

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
          <Col>
            <Tooltip
              color={styleGlobal.colors.netral}
              title={<TooltipCard />}
              overlayInnerStyle={{
                borderRadius: 10,
                width: 300,
              }}
              placement="topLeft"
            >
              <svg style={{ marginLeft: '1rem', marginRight: '10px' }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0C2.68594 0 0 2.68594 0 6C0 9.31406 2.68594 12 6 12C9.31406 12 12 9.31406 12 6C12 2.68594 9.31406 0 6 0ZM6 9.375C5.57812 9.375 5.25 9.04688 5.25 8.625C5.25 8.20312 5.55703 7.875 6 7.875C6.40078 7.875 6.75 8.20312 6.75 8.625C6.75 9.04688 6.40078 9.375 6 9.375ZM7.61953 6.04688L6.5625 6.70312V6.75C6.5625 7.05469 6.30469 7.3125 6 7.3125C5.69531 7.3125 5.4375 7.05469 5.4375 6.75V6.375C5.4375 6.1875 5.53125 6 5.71875 5.88281L7.05469 5.08594C7.21875 4.99219 7.3125 4.82812 7.3125 4.64062C7.3125 4.35938 7.05703 4.125 6.77578 4.125H5.57812C5.27578 4.125 5.0625 4.35938 5.0625 4.64062C5.0625 4.94531 4.80469 5.20312 4.5 5.20312C4.19531 5.20312 3.9375 4.94531 3.9375 4.64062C3.9375 3.72656 4.66406 3 5.55703 3H6.75469C7.71094 3 8.4375 3.72656 8.4375 4.64062C8.4375 5.20312 8.13281 5.74219 7.61953 6.04688Z" fill="#A1A1A1" />
              </svg>
            </Tooltip>
            {itemContext.title}
          </Col>
          <Col>

          </Col>
          <Col>
            <Button
              onClick={() => {
                handleItemSelect(item.group)
              }}
              type="primary" shape="circle" icon={<DownloadOutlined />} size='small' />
          </Col>
          <Col>
            <Button
              onClick={() => {
                handleItemSelect(item.group)
                handleItemRight(item.id)
              }}
              type="primary" shape="circle" icon={<DownloadOutlined />} size='small' />
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
        // onItemSelect={handleItemSelect}
        onItemDeselect={() => {
          setRowDownItem(0)
          setRightDownID(null)
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
