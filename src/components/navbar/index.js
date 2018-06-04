import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
} from 'reactstrap';

class CustomNavbar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => this.setState({
    isOpen: !this.state.isOpen,
  })

  render() {
    return (
      <Navbar expand="lg" dark className="bg-primary">
        <Container>
          <NavbarBrand to="/" tag={Link}>{this.props.title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/about" className="nav-link">About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default CustomNavbar;
