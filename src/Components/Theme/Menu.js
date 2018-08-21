import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Button,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

      <header className="page-header-second container">

        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mdle-auto" navbar>
              <NavItem>
                <NavLink href="/components/">หน้าแรก</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  โปรแกรมทัวร์แนะนำ
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    ทัวร์ยอดนิยม
                  </DropdownItem>
                  <DropdownItem>
                    ทัวร์แนะนำ
                  </DropdownItem>
                  <DropdownItem>
                    ทัวร์ถูก
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  แพ็คเกจทัวร์
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    ทัวร์ยุโรป
                  </DropdownItem>
                  <DropdownItem>
                    ทัวร์เอเชีย
                  </DropdownItem>
                  <DropdownItem>
                    ทัวร์อื่นๆ
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">กรุ๊ปส่วนตัว</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">แบคแพ็ค</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  บทความ
                    </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    ท่องเที่ยว
                    </DropdownItem>
                  <DropdownItem>
                    โปรโมชั่น
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/components/">บริการ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">สมัครสมาชิก</NavLink>
              </NavItem>
              {' '}
              <NavItem>
                <NavLink href="/components/">เข้าสู่ระบบ</NavLink>
              </NavItem>
              <NavItem>
                <Button color="link">
                  <i className="fas fa-search fa-lg"></i>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}