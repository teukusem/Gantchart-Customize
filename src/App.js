import moment from 'moment'
import Timeline, { CursorMarker, TodayMarker } from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import './App.css'
import {Tooltip} from 'antd'


const TestDiv = () => {
  return(
    <div style={{
      width: '100%',
      position: 'absolute',
      left: '0px',
      top: '47px',
      backgroundColor: '#ffffff',
      paddingBottom: '50px',
      height: 'fit-content',
      padding: '1rem',
      zIndex: 1000,
    }}>
      hai
    </div>
  )
}

function App() {
  const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' },{ id: 3, title: 'group 2' },{ id: 4, title: 'group 2' },{ id: 5, title: 'group 2' }]

  const items = [
    {
      id: 1,
      group: 1,
      title: 'MV PAROS',
      start_time: moment(),
      end_time: moment().add(3, 'hour')
    },
    {
      id: 2,
      group: 2,
      title: 'MV PAROS 1',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(2, 'hour')
    },
    {
      id: 3,
      group: 3,
      title: 'MV PAROS 2',
      start_time: moment().add(4, 'hour'),
      end_time: moment().add(8, 'hour')
    },
    {
      id: 4,
      group: 4,
      title: 'MV PAROS 2',
      start_time: moment().add(4, 'hour'),
      end_time: moment().add(8, 'hour')
    },
    {
      id: 5,
      group: 5,
      title: 'MV PAROS 2',
      start_time: moment().add(4, 'hour'),
      end_time: moment().add(8, 'hour')
    },
    {
      id: 6,
      group: 6,
      title: 'MV PAROS 2',
      start_time: moment().add(4, 'hour'),
      end_time: moment().add(8, 'hour')
    }
  ]

  const itemRendererDetail = ({item,selected,timelineContext}) => {
    console.log(selected)
    return (
      <div>
        <Tooltip
					placement="topLeft"
					color="#FFFF"
					title={
            <div style={{width:1000}}>
              <p style={{color:'black'}}> hahahhah</p>
            </div>
          }>
             <>
                {item.title}
             </>
          {/* <TestDiv/> */}
          </Tooltip>
      </div>
    )
  }
  
  const visibleTimeStartValue = moment()
		.startOf('day')
		.subtract(30, 'minute')
		.valueOf()
	const visibleTimeEndValue = moment().startOf('day').add(4, 'hour').valueOf()
  

  return (
    <div>
    <Timeline
      maxZoom={1 * 2 * (86400 / 5) * 1000}
      canMove={true}
      // visibleTimeStart={visibleTimeStartValue}
      // visibleTimeEnd={visibleTimeEndValue}
      traditionalZoom={true}
      sidebarWidth={0}
      lineHeight={70}
      groups={groups}
      items={items}
      itemRenderer={itemRendererDetail}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    >
      <TodayMarker>
        {({ styles, date }) => {
          styles = {...styles, backgroundColor: 'red' }
        return <div style={styles} />}
        }
      </TodayMarker>
    </Timeline>
  </div>
  );
}

export default App;
