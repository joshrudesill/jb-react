
const ScheduleRow = ({ day, status, hours }) => (
  <div className='fs-5 p-2 border d-flex justify-content-between'>
    <div><i className={`bi bi-${status}`} style={{color: status === 'circle' ? 'red' : 'green'}}></i> {day} </div>
    <div class="text-muted">{hours}</div>
  </div>
);

export default ScheduleRow;