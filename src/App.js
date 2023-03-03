import moment from 'moment'
import Timeline, {  DateHeader, TimelineHeaders, TodayMarker, } from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import './App.css'
import {Col, Row, Tooltip} from 'antd'
import TooltipCard from './Components/TooltipCard'
import { styleGlobal } from './Style/styleGlobal'

function App() {
  const groups = [
    { id: 1, title: 'group 1'}, { id: 2, title: 'group 2' }, { id: 3, title: 'group 3' }]

  const items = [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      id_order_header:1,
      start_time: moment(),
      end_time: moment().add(4, 'hour')
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      id_order_header:2,
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(1, 'hour')
    },
    {
      id: 3,
      group: 3,
      title: 'item 3',
      id_order_header:3,
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(5, 'hour')
    }
  ]



  const itemRenderDetail = ({getItemProps,getResizeProps,item,itemContext,timelineContext}) => {
    return (
      <div {...getItemProps(item.itemProps)}>
        <Row>
            <Tooltip 
              color={styleGlobal.colors.netral}
              title={<TooltipCard/>}  	
              overlayInnerStyle={{
                borderRadius: 10,
                width: 300,
              }}
              placement="topLeft"
            >
              <Col span={20} onClick={() => itemContext.selected === true && alert(`holla ${item.id_order_header}`)}> 
                {itemContext.title}
              </Col>
            </Tooltip>
          <Col span={4} onClick={() => itemContext.selected === true && alert(`bacot ${item.id_order_header}`)}>X</Col>

        </Row>
      </div>
    )
  }

  const minZoom = 60 * 60 * 5000; // 5 hour in milliseconds
  const maxZoom = 24 * 60 * 60 * 1000; // 1 day in milliseconds


  return (
    <div>
      <Timeline
        groups={groups}
        items={items}
        sidebarWidth={0}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        lineHeight={70}
        itemRenderer={itemRenderDetail}
        minZoom={minZoom} 
        maxZoom={maxZoom}
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
                backgroundColor:'transparent',
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
