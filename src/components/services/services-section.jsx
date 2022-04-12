import { createStructuredSelector } from "reselect";
import { selectServicesTitles, selectServiceSections, selectTreatmentTitles, selectTreatments } from "../../redux/page/page.selectors";
import TextTitle from "../text-title/text-title";
import Wrapper from "../wrapper/wrapper";
import { connect } from "react-redux";
import ServiceSubsection from "./service-subsection";
import Treatment from "./treatments-subsection";

const ServicesSection = ({ titles: { title, subtitle }, sections, treatmentTitles, treatments }) => (
  <section id="services">
    <div className="container-xl rounded-3 text-center p-3 mb-5 c1">
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
      <hr className="d-md-none"/>
      <div className="display-5 text-center m-5 p-2 rounded-3 ">
        <TextTitle
          extraStyle="col-8 col-md-4 mx-auto p-1"
          text={treatmentTitles.title}
        >
          <i class="bi bi-droplet"></i>
        </TextTitle>

        <TextTitle 
          extraStyle='fs-5 text-muted'
          text={treatmentTitles.subtitle}
        />
      </div>
      {
        treatments.map(treatment => <Treatment {...treatment}/>)
      }
    </div>
  </section>
);

const mapState = createStructuredSelector({
  titles: selectServicesTitles,
  sections: selectServiceSections,
  treatmentTitles: selectTreatmentTitles,
  treatments: selectTreatments
});

export default connect(mapState)(ServicesSection);
