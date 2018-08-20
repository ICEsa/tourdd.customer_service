import React, { Component } from 'react'
import {Container} from 'reactstrap'
import brand from '../../dist/img/tourdd.jpg'
import '../../dist/css/app.css' ;

class Header extends Component {
  render() {
    return (
     <header className="page-header-top">
        <Container>
            <div className="page-logo" >
            <a href="http://xn--l3cah2ct3d5ab7r.com/">
            <img src={brand}  
                className="is-brand"
                title="ทัวร์ดีดี"
                alt="ทัวร์ดีดี"
                />
            </a>    
            </div>
            <div className="social-contact">
                <ul className="nav-social">
                    <li className="facebook-ico">
                        
                    </li>
                    <li className="instagram-ico">
                    </li>
                    <li className="line-ico">
                    </li>
                </ul>
                <div className="header-license">
                    <a href="http://xn--l3cah2ct3d5ab7r.com/license">
                    เลขที่ใบอนุญาต 11/08551</a>
                </div>
            </div>
        </Container>
     </header>
    )
  }
}
export default Header;