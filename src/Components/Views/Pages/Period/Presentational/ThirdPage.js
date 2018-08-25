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

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


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
                <span>รหัสการจอง TDD-{booking && booking.reference}</span>
              </Col>
              <Col xs="8">
                <span>คุณ {booking && booking.bookingCustomer}</span>{' '}

              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs="10">
              <Table bordered>
                <thead >
                  <tr>
                    <th className="text-align-center">รายการ</th>
                    <th className="text-align-right">จำนวน</th>
                    <th className="text-align-right">ราคาต่อหน่วย</th>
                    <th className="text-align-right">รวม</th>
                  </tr>
                </thead>
                <tbody>
                    {booking && booking.item && booking.item.map(e=>{
                      return <tr key={e.detail_id}>
                        <td className="text-align-center">{e.detail_name}</td>
                        <td className="text-align-right">{numberWithCommas(parseInt(e.detail_count))}</td>
                        <td className="text-align-right">{numberWithCommas(parseInt(e.detail_price))} บาท</td>
                        <td className="text-align-right">{numberWithCommas(parseInt(e.sum))} บาท</td>
                      </tr>
                    })}
                  <tr>
                    <td colSpan="3" className="text-align-left">รวม</td>  
                    <td className="text-align-right">{booking.amount} บาท</td>
                  </tr>
                </tbody>
              </Table>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    </div>
  )
}
export default Thirdpage