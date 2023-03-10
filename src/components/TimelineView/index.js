// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="time-line-container">
      <div className="container">
        <div className="header-container">
          <h1 className="heading-1">
            MY JOURNEY OF <br /> <h1 className="heading-2">CCBP 4.0</h1>
          </h1>

          <Chrono
            theme={{secondary: 'white'}}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
          >
            {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
          </Chrono>
        </div>
      </div>
    </div>
  )
}
export default TimelineView
