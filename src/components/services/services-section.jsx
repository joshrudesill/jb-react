import { createStructuredSelector } from "reselect";
import { selectServicesTitles, selectServiceSections, selectTreatmentTitles, selectTreatments, selectExtensions } from "../../redux/page/page.selectors";
import TextTitle from "../text-title/text-title";
import Wrapper from "../wrapper/wrapper";
import { connect } from "react-redux";
import ServiceSubsection from "./service-subsection";
import Treatment from "./treatments-subsection";

const ServicesSection = ({ titles: { title, subtitle }, sections, treatmentTitles, treatments, extensions }) => (
  <section id="services">
    <div className="container-xl rounded-3 text-center p-3 mb-5 c3l">
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
      {
        treatments.map(treatment => <Treatment key={treatment.title} {...treatment}/>)
      }
      <hr className='mb-2'/>
      <br/>
      <div className="display-5 text-center m-5 mb-5 p-2 rounded-3 ">
        <TextTitle
          extraStyle='col-10 col-md-8 mx-auto rounded-pill p-1 eng'
          text={extensions.title + ' '}
          >
            <i className="bi bi-rainbow" style={{color: 'red'}}></i>
        </TextTitle>
        <TextTitle 
          extraStyle='fs-3 text-muted'
          text={extensions.desc}
          />
        <TextTitle 
          extraStyle='fs-5 text-muted mt-2'
          text={extensions.price}
          />
      </div>
      <hr className='mb-5'/>
      {
        sections.map(section => <ServiceSubsection {...section} key={section.title} />)
      }
      <hr className="d-md-none"/>
      
      
    
      
    </div>
  </section>
);

const mapState = createStructuredSelector({
  titles: selectServicesTitles,
  sections: selectServiceSections,
  treatmentTitles: selectTreatmentTitles,
  treatments: selectTreatments,
  extensions: selectExtensions
});

export default connect(mapState)(ServicesSection);
