import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectContactForm } from "../../redux/page/page.selectors";
import IconInfoCard from "../contact/icon-info-card";


const ContactForm = ({ fdata }) => (
  <IconInfoCard icon='chat-left-text'>
    <form>
      <div className="input-group my-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input required type="text" className="form-control" placeholder={fdata.email} aria-label="Email" aria-describedby="basic-addon1"></input>
        </div>
        <select className="form-select" aria-label="service select">
          <option selected disabled value="">{fdata.options[0]}</option>
          {
            fdata.options.map((o, i) => i === 0 ? null : <option value={i}>{o}</option>)
          }
        </select>
        <div className="my-3">
          <label for="message" className="form-label">{fdata.message}</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">Ok</button>
        </div>
    </form>
  </IconInfoCard>
);

const mapState = createStructuredSelector({
  fdata: selectContactForm
});

export default connect(mapState)(ContactForm);