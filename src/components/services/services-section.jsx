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
        treatments.map(treatment => <Treatment key={treatment.title} {...treatment}/>)
      }
      {
        sections.map(section => <ServiceSubsection {...section} />)
      }
      <hr className="d-md-none"/>
      <div className="display-5 text-center mt-5 mb-3 p-2 rounded-3 ">
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
      
    <hr/>
      <div class="display-5 text-center m-5 mb-2 p-2 rounded-3 ">
        <TextTitle
          extraStyle='col-10 col-md-8 mx-auto rounded-pill p-1 eng'
          text='Hair Extensions '
          >
            <i class="bi bi-rainbow" style={{color: 'red'}}></i>
        </TextTitle>
        <TextTitle 
          extraStyle='fs-3 text-muted'
          text='Add volume and length to your hair with the best hair extensions made entirely of natural and ethical hair from Great Lengths'
          />
        <TextTitle 
          extraStyle='fs-5 text-muted mt-2'
          text='Pricing varies'
          />
          
      </div>
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
