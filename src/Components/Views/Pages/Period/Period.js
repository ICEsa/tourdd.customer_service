import React, { Component } from 'react'
import { Container } from 'reactstrap'
import FirstPage from './Presentational/FirstPage';
import SecondPage from './Presentational/SecondPage';
import ThirdPage from './Presentational/ThirdPage';
import { loadPeriod } from '../../../../redux/actions/periodActions'
import { connect } from 'react-redux'


class Period extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Wizardpage: 1,
      Pessenger: null,
      Amount: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.pessengerOpen = this.pessengerOpen.bind(this)

  }
  async  componentDidMount() {
    await this.props.dispatch(
      loadPeriod(
        this.props.match.params.period
      )
    )
  }

  nextPage() {
    this.setState({ Wizardpage: this.state.Wizardpage + 1 })
  }
 
  pessengerOpen(id) {
    const { Pessenger } = this.state
    if (id === Pessenger) {
      this.setState({
        Pessenger: null
      })
    } else {
      this.setState({
        Pessenger: id
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.period.data !== prevProps.period.data) {
      this.setState({
        Pessenger: prevProps.period.data
      })
    }
  }

  render() {
    const { Wizardpage, Pessenger, Amount } = this.state
    const { period,bookingCreate } = this.props

    return (
      <div>
        <Container>
          {Wizardpage === 1 && <FirstPage cursor={Pessenger} collapse={this.pessengerOpen} data={period.data} match={this.props.match.params.period} onSubmit={this.nextPage} />}
          {Wizardpage === 2 && <SecondPage nextPage={this.nextPage} data={period.data}/>}
          {Wizardpage === 3 && <ThirdPage booking={bookingCreate.data} />}
        </Container>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    period: state.periodReducers.period,
    bookingCreate:state.bookingReducers.bookingCreate,
  }
}
export default connect(mapStateToProps)(Period)