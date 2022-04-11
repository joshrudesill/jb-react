import { createStructuredSelector } from "reselect";
import { selectServicesTitles, selectServiceSections } from "../../redux/page/page.selectors";
import TextTitle from "../text-title/text-title";
import Wrapper from "../wrapper/wrapper";
import { connect } from "react-redux";
import ServiceSubsection from "./service-subsection";

const ServicesSection = ({ titles: { title, subtitle }, sections }) => (
  <section id="services">
    <div class="container-xl rounded-3 text-center p-3 mb-5 c1">
      <Wrapper>
        <TextTitle
          extraStyle="display-3"
          style={{ fontFamily: "Abril Fatface", color: "#94656D" }}
          text={title}
        />
        <TextTitle 
          extraStyle='p lead text-muted mb-3'
          text={subtitle}
        />
      </Wrapper>
      {
        sections.map(section => <ServiceSubsection {...section} />)
      }
    </div>
  </section>
);

const mapState = createStructuredSelector({
  titles: selectServicesTitles,
  sections: selectServiceSections
});

export default connect(mapState)(ServicesSection);
