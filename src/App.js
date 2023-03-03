import react,{useState} from 'react'
import moment from 'moment'
import Timeline, { CursorMarker, DateHeader, TimelineHeaders, TodayMarker, TimelineItem  } from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import './App.css'
import {Tooltip} from 'antd'

function App() {
  const [selectItem,setSelectItem] = useState(null)

  const groups = [
    { id: 1, 
      title: 'group 1',

}, { id: 2, title: 'group 2' }]

  const items = [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour')
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour')
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour')
    }
  ]

  // const itemRenderDetail = ({getItemProps,getResizeProps,item,itemContext,timelineContext}) => {
   
  // }

  const handleClicked = (itemId,e) => {
    console.log(itemId)
    setSelectItem(itemId)
  }

  return (
    <div>
      <Timeline
        groups={groups}
        items={items}
        sidebarWidth={0}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        onItemSelect={handleClicked}
      >
        <TimelineHeaders>
          <DateHeader unit="primaryHeader" 
        />
          <DateHeader 
            labelFormat={'HH:mm'}
            />
        </TimelineHeaders>
      </Timeline>
  </div>
  );
}

export default App;
