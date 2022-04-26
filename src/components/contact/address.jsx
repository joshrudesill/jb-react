import TextTitle from "../text-title/text-title";
import IconInfoCard from "../contact/icon-info-card";
import { createStructuredSelector } from "reselect";
import { selectAddress } from "../../redux/page/page.selectors";
import { connect } from "react-redux";


const Address = ({ address }) => (
  <IconInfoCard icon='geo-alt'>
    <TextTitle 
      text={address}
      extraStyle='fs-4 m-3'
    />
  </IconInfoCard>
);

const mapState = createStructuredSelector({
  address: selectAddress
});

export default connect(mapState)(Address);