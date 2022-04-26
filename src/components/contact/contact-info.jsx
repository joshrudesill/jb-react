import TextTitle from "../text-title/text-title";
import IconInfoCard from "../contact/icon-info-card";
import { createStructuredSelector } from "reselect";
import { selectLinks } from "../../redux/page/page.selectors";
import { connect } from "react-redux";

const ContactInfo = ({ links }) => (
  <IconInfoCard>
    <span  className="mt-3">
      <a target='_blank' rel="noreferrer" href={links.facebook}>
        <i role="button" className="bi bi-facebook display-4 m-1 mt-3" style={{color: '#3b5998'}} ></i>
        </a>
      <a target='_blank' rel="noreferrer" href={links.instagram}>
        <i role="button" className="bi bi-instagram display-4 m-1 mt-3" style={{color: '#FD1D1D'}} ></i>
        </a>
      <a target='_blank' rel="noreferrer" href={links.twitter}>
        <i role="button" className="bi bi-twitter display-4 m-1 mt-3" style={{color: '#1DA1F2'}} ></i>
        </a>
    </span>
      <TextTitle 
        text=' +34 952 78 61 61'
        extraStyle='fs-2 m-2'
        leadingIcon='telephone'
      />
      <TextTitle 
        text={' ' + links.email}
        extraStyle='fs-4 m-2'
        leadingIcon='envelope'
      />
    </IconInfoCard>
);


const mapState = createStructuredSelector({
  links: selectLinks
});
export default connect(mapState)(ContactInfo);