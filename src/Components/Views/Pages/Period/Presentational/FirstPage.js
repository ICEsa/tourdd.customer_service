import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate'
import renderField from './Fields/renderField'
import {Table, Form, Card,CardBody,CardHeader, Button, Row,Col, Container} from 'reactstrap'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';


import _Collpase from './Collapse'
const moment = require('moment');
require("moment/min/locales.min");
moment.locale('th');


const FistPage = props => {
  const {initialize, handleSubmit,data } = props
   const forward = (params)=>{
    initialize({
      period:params
    })
    handleSubmit();
  }

  return (
        <div>
            {data && data.map( e=>{
              return (
                <div key={e.item_id}>
                  <Card>
                    <CardHeader>
                      ข้อมูลทัวร์
                    </CardHeader>
                    <CardBody>
                        <Row>
                          <Col xs="12"  md="6" >
                            รหัสสินค้า: {e.item_code}
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12"  md="6" >
                            {e.item_name}
                          </Col>
                        </Row>
                        <Row style={{marginTop:'.5rem',borderTop:'solid 1px', borderBottom:'solid 1px'}} >
                          <Col style={{paddingTop:'.5rem'}}>
                            <h2><i className="fas fa-globe-asia"/> รายละเอียดทัวร์</h2>
                            <Container>
                            {ReactHtmlParser(e.item_description)}
                            {e.item_highlight}
                            </Container>
                          </Col>
                        </Row>
                        </CardBody>
                      </Card>
                      <Form onSubmit={handleSubmit} className="Wizard-form">
                        <Card >
                          <CardHeader>
                            แบบฟอร์มสำหรับจองทัวร์นี้
                            </CardHeader>
                              <CardBody>
                                <Row style={{marginTop:'.5rem'}} >
                                  <Col style={{paddingTop:'.5rem'}}>
                                    <h5><i className="far fa-calendar-alt"/> ปฏิทินการเดินทาง</h5>
                                    </Col>
                                  </Row>
                                  <Table>
                                    <thead>
                                      <tr>
                                          <th  style={{textAlign:'center'}} colSpan="3">วันเดินทาง</th>
                                          <th>จำนวนวัน</th>
                                          <th>สายการบิน</th>
                                          <th></th>
                                        </tr>
                                     </thead> 
                                     <tbody>
                                    {e.plans.map((_e,_i)=>{
                                      if(_e.plan_id === props.cursor){
                                     return   [
                                          <tr  key={`0-${_e.plan_id}`}>
                                            <td className="text-align-center" width="180">{moment(_e.plan_start_date).add(543,'years').format('ll')} </td>
                                            <td className="text-align-center" width="10"><i className="fas fa-arrow-right"/></td>
                                            <td className="text-align-center" width="180">{moment(_e.plan_end_date).add(543,'years').format('ll')}</td>
                                            <td>{e.item_days} วัน {e.item_night} คืน</td>
                                            <td></td>
                                            <td><Button style={{width:'4rem'}}  color="danger" onClick={()=>{props.collapse(_e.plan_id)}}>ปิด</Button></td>
                                          </tr>,
                                            <_Collpase  plan_id={_e.plan_id} handleSelect={forward} data={_e.plans_condition}  key={`1-${_e.plan_id}`} />
                                          ]
                                      }
                                   return (
                                        <tr  key={`0-${_e.plan_id}`}>
                                          <td className="text-align-center" width="180">{moment(_e.plan_start_date).add(543,'years').format('ll')} </td>
                                          <td className="text-align-center" width="10"><i className="fas fa-arrow-right"/></td>
                                          <td className="text-align-center" width="180">{moment(_e.plan_end_date).add(543,'years').format('ll')}</td>
                                          <td>{e.item_days} วัน {e.item_night} คืน</td>
                                          <td></td>
                                          <td><Button outline color="danger" style={{width:'4rem'}} onClick={()=>{props.collapse(_e.plan_id)}}>เลือก</Button></td>
                                        </tr>
                                        
                                   )
                                    })}
                                    </tbody>
                                  </Table>
                                </CardBody>
                            </Card>
                          <Card >
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
                                      name="period"
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
                                  <Button type="submit">ขั้นตอนต่อไป</Button>
                                  </div>
                              </CardBody>
                            </Card>
                          </Form>
                      </div>
                    )
                  })}
    </div>
  )
}
export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FistPage)