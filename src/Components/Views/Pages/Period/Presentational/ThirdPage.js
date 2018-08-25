import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate'
import renderField from './Fields/renderField'
import { Table, Modal, Form, Card, CardBody, CardHeader, Button, Row, Col, Container } from 'reactstrap'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import successIco from '../../../../../dist/img/success.svg'
import loadging from '../../../../../dist/img/tourddLoading.svg'
import _Collpase from './Collapse'
const moment = require('moment');
require("moment/min/locales.min");
moment.locale('th');


const Thirdpage = props => {
  if(props.booking.isLoading){
    return (
     <Modal isOpen={true} fade={false}   className="modal-loading">
           <div style={{display:'flex',  justifyContent:'center'}}><img src={loadging}></img></div>
      </Modal>
    )
  }
  const {booking} = props
  return (
    
    <div className="container">
      <div>
        <Card>
          <Row>
            <Container style={{ paddingTop: '1rem', display: 'flex', justifyItems: 'center' }}>
              <img style={{ margin: '0 auto', height: '80px', width: '80pxs' }} src={successIco}></img>

            </Container>
          </Row>
          <Row style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
            <h3 >เราได้รับการจองขอบคุณเรียบร้อยแล้ว</h3>
          </Row>
          <Row style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
            <h5>ขอบคุณที่ไว้วางใจให้เราดูแลคุณ</h5>
          </Row>
          <Row style={{ paddingTop: '1rem', display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
            <h5>กำลังตรวจสอบที่นั่ง...</h5>
          </Row>
          <Row style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>

            <h6>ทางทัวร์ดีดีจะติดต่อกลับไปยังข้อมูลติดต่อของท่าน</h6>

          </Row>
        </Card>
        <Card>
          <Container style={{ margin: '1rem' }}>
            <Row>
              <h5>ข้อมูลการจอง</h5>
            </Row>
            <Row>
              <Col xs="4">
                <span>รหัสการจอง TDD-60</span>
              </Col>
              <Col xs="8">
                <span>คุณ ชยากร แก้ววงศ์</span>{' '}

              </Col>
            </Row>
            <Row>
              <Table Striped>
                <thead >
                  <tr>
                    <th colSpan="2">รายการ</th>
                  </tr>
                </thead>
                <tbody>
                    {booking.item && booking.map(e=>{
                      return <tr key={e.detail_id}>
                        <td>{e.detail_name}</td>
                        <td>{e.detail_count}</td>
                        <td>{e.detail_price}</td>
                        <td>{e.detail_sum}</td>
                      </tr>
                    })}
                  <tr>
                    <td colSpan="5">{booking.amount}</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Container>
        </Card>
      </div>
    </div>
  )
}
export default Thirdpage