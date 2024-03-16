// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStar} = props
  const {title, date, id, isFavourite} = appointmentDetails
  const onFavourite = () => {
    toggleStar(id)
  }
  const Fstar = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="item-container">
      <div className="local-elements-container">
        <div>
          <p className="title">{title}</p>
          <p className="date-style">Date: {date}</p>
        </div>
        <button
          type="button"
          data-testid="star"
          className="star-button"
          onClick={onFavourite}
        >
          <img src={Fstar} alt="star" className="star-img" />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem
