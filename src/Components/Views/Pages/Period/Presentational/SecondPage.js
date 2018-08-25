import React, { Component } from 'react'
import validate from '../validate'
import config from '../../../../../config'
import { formValues, FieldArray, Field, reduxForm, formValueSelector } from 'redux-form'
import renderField from './Fields/renderField'
import { connect } from 'react-redux'
import { Label, FormGroup, Table, Form, Card, CardBody, CardHeader, Button, Row, Col } from 'reactstrap'
import {createBooking} from '../../../../../redux/actions/bookingActions'
const moment = require('moment');
require("moment/min/locales.min");
moment.locale('th');

const COMPANY_ID = config.COMPANY_ID


class SecondPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pessenger: [],
            price: [],
            sum: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      
    }
    periodFilter = (item) => {
        const { period } = this.props
        return item === period
    }
    handleChange = name => event => {
        const { pessenger } = this.state
        let _pessenger = [];
        let sumary = 0;
        pessenger.map((e, i) => {
            if (i === name) {
                e.count = event.target.value
            }
            return _pessenger = [..._pessenger, e]
        })
        pessenger.map((e, i) => {
          return sumary += (e.price * e.count)
        })
       
        this.setState({
            pessenger: _pessenger,
            sum:sumary
        })
       
        
    }
    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    async sleep(ms){
        new Promise(resolve => setTimeout(resolve, ms))
    }
   
  
     onSubmit(event){
       let data = {
        ...event,
        amount:this.state.sum,
        company_id:COMPANY_ID
       }
       this.props.dispatch(createBooking(data)).then( ()=>{
           if(!this.props.bookingCreate.isRejected){
               this.props.nextPage()
           }
       })


    }
    async componentDidMount() {
        const { data } = this.props
        const { period } = this.props
       
        let pessenger = {};
        let price = [];
        {
            data && await data.map(e => {
                e.plans.map(ee => {
                    if (ee.plan_id === period) {
                        ee.plans_condition.map(eee => {
                            return pessenger = [...pessenger, {
                                id: eee.condition_id,
                                name: eee.condition_name.trim(),
                                price: parseInt(eee.condition_value) ? parseInt(eee.condition_value.trim()) : 0,
                                count: 0
                            }]

                        })
                    }
                })
            })
        }
        pessenger &&  await pessenger.map(e => {
            return price = [...price, { price: e.condition_value, Count: 0 }]
        })
        this.setState({
            pessenger: pessenger,
            price: price
        })
    }
    render() {
        const { data, period, handleSubmit, submitting,} = this.props
        const { pessenger, price } = this.state
        return (
            <div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Card >
                    <CardHeader>
                        <i className="fas fa-paperclip" />
                        {' '}แพ็คเกจที่คุณเลือก
                    </CardHeader>
                    <CardBody>
                        
                        <Row>
                            <Col xs="6">
                                {data && data.map((e, i) => {
                                    let array = [];
                                    let condition = [];
                                    e.plans.map(ee => {
                                        if (ee.plan_id === period) {
                                            return array = ee;
                                        }
                                    })
                                    pessenger && pessenger.map((item, index) => {
                                        return condition = [...condition,
                                        <Row key={item.id}>
                                        <Col xs="auto">
                                            <Field
                                                key={item.id}
                                                name={`${item.name}|${item.price}`}
                                                type="number"
                                                onChange={this.handleChange(index)}
                                                component={renderField}
                                                label={item.name.trim()} />
                                            </Col>
                                        </Row>,
                                        ];
                                    })
                                    return [
                                        <Row key={0}>
                                            <Col xs="auto"><h3>{e.item_name}</h3></Col>
                                        </Row>,
                                        <Row key={2} style={{ margin: '1rem' }}>
                                            <Col xs="auto">ช่วงเวลาเดินทาง</Col>
                                            <Col xs="auto">{moment(array.plan_start_date).add(543, 'years').format('LL')}</Col>
                                            <Col xs="1"><i className="fas fa-arrow-right" /></Col>
                                            <Col xs="auto">{moment(array.plan_end_date).add(543, 'years').format('LL')}</Col>
                                        </Row>,
                                        <Row key={3}></Row>,
                                        ...condition
                                    ]
                                })}
                            </Col>

                            <Col xs="6" >
                              <div style={{display:'flex', justifyContent:'right'}}>
                                    <Table  style={{ marginTop: '10rem', position: 'relative' }}>
                                        <thead>
                                            <tr>
                                                <th  colSpan="4">PRICE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pessenger && pessenger.map((item, index) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>{item.name}</td>
                                                        <td style={{ textAlign: 'left' }}>{this.numberWithCommas(item.price)} X</td>
                                                        <td style={{ textAlign: 'left' }}>{item.count} =</td>
                                                        <td style={{ minWidth: '200px', textAlign: 'right' }}>{this.numberWithCommas(item.price * item.count)}</td>
                                                    </tr>
                                                )

                                            })}
                                            <tr>
                                                <td colSpan="3">รวม</td>
                                                <td style={{textAlign:'right'}}>{this.numberWithCommas(this.state.sum)}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                
                    <Card >
                        <CardHeader>
                            <i className="fas fa-paperclip" />
                            {' '}แบบฟอร์มสำหรับติดต่อกลับ
                    </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="6" sm="5">
                                    <Field
                                        name="firstName"
                                        type="text"
                                        component={renderField}
                                        label="ชื่อ"
                                    />
                                </Col>
                                <Col xs="6" sm="5">
                                    <Field
                                        name="lastName"
                                        type="text"
                                        component={renderField}
                                        label="นามสกุล"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <Field
                                        name="email"
                                        type="text"
                                        component={renderField}
                                        label="อีเมล"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Field
                                        name="telNumber"
                                        type="text"
                                        component={renderField}
                                        label="เบอร์โทรศัพท์"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Field
                                        name="tel-number"
                                        type="text"
                                        component={renderField}
                                        label="Line Id "
                                    />
                                </Col>
                            </Row>
                            <div>
                                <Button
                                    color="secondary"
                                    outline
                                >
                                    <i className="fas fa-arrow-left" />
                                    {' '}เปลี่ยนแปลงวันเดินทาง
                            </Button>
                                {' '}
                                <Button
                                    color="danger"
                                    type="submit"
                                    disabled={submitting}
                                >
                                    จองทัวร์นี้{' '}
                                    <i className="fas fa-arrow-right" />
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </form>
            </div>
        )
    }
}
SecondPage = reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(SecondPage)

// Decorate with connect to read form values
const selector = formValueSelector('wizard')// <-- same as form name

// SecondPage = connect(
//     (state => {
//         // can select values individually
//         selector(state, 'period')
//     }
// ),mapStateToProps)(SecondPage)
 const mapStateToProps = (state, ownProps) => {
     return {
        period: (selector( state, 'period')),
        bookingCreate: state.bookingReducers.bookingCreate
     }
 }

export default connect(mapStateToProps)(SecondPage)

// SelectingFormValuesForm = reduxForm({
//     form: 'selectingFormValues'  // a unique identifier for this form
//   })(SelectingFormValuesForm)(SecondPage)
