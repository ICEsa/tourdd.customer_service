import React, { Component } from 'react'
import validate from '../validate'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import renderField from './Fields/renderField'
import { connect } from 'react-redux'
import { Table, Form, Card, CardBody, CardHeader, Button, Row, Col } from 'reactstrap'

const moment = require('moment');
require("moment/min/locales.min");
moment.locale('th');


class SecondPage extends Component {
    
    constructor(props){
        super(props)
        this.state = {
             pessenger:[],
             price:[]
        }
    }
    periodFilter = (item) => { 
        const { period } = this.props
        return item === period
    }
    componentDidMount(){
        const {data} = this.props
        const { period } = this.props
         let array = [];
        {data && data.map(e=>{
            e.plans.map(ee => {
                if (ee.plan_id === period) {
                    return array = ee;
                }
            })
        })}
    }
    render() {
        const { data, period } = this.props
        const {pessenger} = this.state
        return (
            <div>
                <Card >
                    <CardHeader>
                        <i className="fas fa-paperclip" />
                        {' '}แพ็คเกจที่คุณเลือก
                    </CardHeader>
                    <CardBody>
                        {data && data.map((e, i) => {
                            let array = [];
                            let condition = [];
                            e.plans.map(ee => {
                                if (ee.plan_id === period) {
                                    return array = ee;
                                }
                            })
                            array.plans_condition.map(item => {
                                return condition = [...condition, 
                                    <Row key={item.condition_id}>
                                        <Col xs="auto">
                                            <Field  
                                             name={item.condition_id}
                                             type="number"
                                             value={50}
                                             component={renderField}
                                             label={item.condition_name}/>
                                        </Col>
                                        <Col xs="auto">
                                            
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

                    </CardBody>
                </Card>
                <Form>
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
                                >
                                    จองทัวร์นี้{' '}
                                    <i className="fas fa-arrow-right" />
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Form>
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
SecondPage = connect(
    state => {
        // can select values individually
        const period = selector(state, 'period')

        return {
            period,
        }
    }
)(SecondPage)

export default SecondPage

// SelectingFormValuesForm = reduxForm({
//     form: 'selectingFormValues'  // a unique identifier for this form
//   })(SelectingFormValuesForm)(SecondPage)
