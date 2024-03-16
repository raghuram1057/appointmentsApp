// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {inputTitle: '', inputDate: '', appointmentsList: []}

  onToggleStar = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isFavourite: !each.isFavourite}
        }
        return each
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {inputTitle, inputDate} = this.state
    const newAppointmentList = {
      id: uuidv4(),
      title: inputTitle,
      date: format(new Date(inputDate), 'dd MMMM yyyy, EEEE'),
      isFavourite: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointmentList],
      inputTitle: '',
      inputDate: '',
    }))
  }

  onStarred = () => {
    const {appointmentsList} = this.state
    this.setState({
      appointmentsList: appointmentsList.filter(
        each => each.isFavourite === true,
      ),
    })
  }

  onChangeInputValue = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeDateValue = event => {
    this.setState({inputDate: event.target.value})
  }

  render() {
    const {inputTitle, inputDate, appointmentsList} = this.state
    console.log(appointmentsList.length)
    return (
      <div className="bg-container">
        <div className="apointments-container">
          <div className="appoinment-input-container">
            <form className="form" onSubmit={this.onAddAppointment}>
              <h1>Add Appointment</h1>
              <label htmlFor="text" className="label-text">
                TITLE
              </label>
              <input
                type="text"
                id="text"
                placeholder="Title"
                className="input-text"
                value={inputTitle}
                onChange={this.onChangeInputValue}
              />
              <label htmlFor="date" className="label-text">
                Date
              </label>
              <input
                type="date"
                className="input-text"
                value={inputDate}
                onChange={this.onChangeDateValue}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appoinment-img"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div>
            <div className="appointments-st-container">
              <h1 className="appointment-heading">Appointments</h1>
              <button
                type="button"
                className="starred-button"
                onClick={this.onStarred}
              >
                starred
              </button>
            </div>
            <ul className="appointment-items-container">
              {appointmentsList.map(eachList => (
                <AppointmentItem
                  appointmentDetails={eachList}
                  key={eachList.id}
                  toggleStar={this.onToggleStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
