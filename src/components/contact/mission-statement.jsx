import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMissionStatement } from "../../redux/page/page.selectors";
import IconInfoCard from "./icon-info-card";

const MissionStatement = ({ statement: { statement, title } }) => (
  <IconInfoCard style={{background: 'rgb(228,181,181) linear-gradient(0deg, rgba(228,181,181,1) 0%, rgba(231,167,130,1) 80%)'}}>
    <span className="fs-3 border-bottom border-secondary">{title}</span>
    <span className="p fs-5">{statement}</span>
  </IconInfoCard>
);

const mapState = createStructuredSelector({
  statement: selectMissionStatement
});

export default connect(mapState)(MissionStatement);