import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSchedule, selectTimezone } from "../../redux/page/page.selectors";
import TextTitle from "../text-title/text-title";
import ColumnEncapsulator from "./col-encapsulator";
import IconInfoCard from "./icon-info-card";
import ScheduleRow from "./schedule-row";

const Schedule = ({ schedule, timezone }) => (
  <ColumnEncapsulator>
    <IconInfoCard icon='clock-history'>
      {
        schedule.map(s => <ScheduleRow {...s}/>)
      }
      <TextTitle
        text={timezone}
        extraStyle='mt-2 text-muted text-decoration-underline'
      />
    </IconInfoCard>
  </ColumnEncapsulator>
);



const mapState = createStructuredSelector({
  schedule: selectSchedule,
  timezone: selectTimezone
});

export default connect(mapState)(Schedule);