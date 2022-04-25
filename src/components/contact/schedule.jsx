import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSchedule } from "../../redux/page/page.selectors";
import ColumnEncapsulator from "./col-encapsulator";
import IconInfoCard from "./icon-info-card";
import ScheduleRow from "./schedule-row";

const Schedule = ({ schedule }) => (
  <ColumnEncapsulator>
    <IconInfoCard icon='clock-history'>
      {
        schedule.map(s => <ScheduleRow {...s}/>)
      }
    </IconInfoCard>
  </ColumnEncapsulator>
);



const mapState = createStructuredSelector({
  schedule: selectSchedule
})

export default connect(mapState)(Schedule);