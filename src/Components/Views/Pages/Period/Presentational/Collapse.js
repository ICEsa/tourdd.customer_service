import React, { Component } from 'react';
import {  Button,} from 'reactstrap';
import PropTypes from 'prop-types';


class _Collapse extends Component {
  
  constructor(props) {
    super(props);
    this.state = { show: true, status: 'Closed' };
  }

    static propTypes = {
        
        show: PropTypes.bool,   //รับค่า true , false เพื่อกำหนดว่าจะแสดง Modal หรือไม่
        onConfirm: PropTypes.func,  
    };

    handleSelect = (params_id)=>{
          this.props.handleSelect(params_id)
    }
    
    //กำหนด Default Props
    static defaultProps = {
    
        show: true,
        

    };
    
  render() {
    const {data} = this.props
       let PropertiesRender = [];
        console.log(data)
       {data && data.map(function(e){
         if(e.condition_value){
          PropertiesRender =[...PropertiesRender, 
            <tr key={e.condition_id} className="no-border animated fadeInDown">
                <td colSpan="3" className="text-align-left">{e.condition_name}</td>
                <td colSpan="3" className="text-align-right">{`${numberWithCommas(e.condition_value)}`}</td>
            </tr>
            ]
         }else{
        PropertiesRender =[...PropertiesRender,
            <tr key={e.condition_id} className="no-border animated fadeInDown">
                <td colSpan="3" className="text-align-left">{e.condition_name}</td>
            </tr>
            ]}
       })}
      if(this.state.show){
    
         return [
            <tr key={0}
              className="no-border animated fadeInDown"
            >
            <td colSpan="6">
              ราคา
            </td>
            </tr>,
            ...PropertiesRender,
            <tr key={1}><td colSpan="6"><div  style={{paddingBottom:'1rem'}}><Button onClick={()=>{this.handleSelect(this.props.plan_id)}} color="info" width="100%" size="lg" block>จองทัวร์นี้</Button></div></td></tr>
            ]
        
      }else{
        return false;
      }
  }
}

export default _Collapse;
function   numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}