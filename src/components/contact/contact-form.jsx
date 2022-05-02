import IconInfoCard from "../contact/icon-info-card";


const ContactForm = () => (
  <IconInfoCard icon='chat-left-text'>
    <form>
      <div className="input-group my-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input required type="text" className="form-control" placeholder="Email (Required)" aria-label="Email" aria-describedby="basic-addon1"></input>
        </div>
        <select className="form-select" aria-label="service select">
          <option selected disabled value="">Service (Optional)</option>
          <option value="1">Cut</option>
          <option value="2">Color</option>
          <option value="3">Treatment</option>
        </select>
        <div className="my-3">
          <label for="message" className="form-label">Message (Optional)</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
    </form>
  </IconInfoCard>
);

export default ContactForm;