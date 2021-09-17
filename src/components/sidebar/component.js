/* eslint-disable */
import React, { useState } from 'react';
import { Collapse, Container, Row, Nav, Navbar } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

import './index.scss';

const Component = () => {
  const [collapseOpen, setCollapseOpen] = useState();
  const logo = <img className='logo' src='./favicon.ico' />;

  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };

  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  return (
    <Navbar className='sidebar' expand='m' id='sidebar-main'>
      <Row className='company-row'>{logo}</Row>
      <div className='line' />
      <Nav.Link href='/'>Members</Nav.Link>
      <Nav.Link href='/'>Referrals</Nav.Link>
      <Nav.Link href='/'>Jobs</Nav.Link>
      <Nav.Link href='/'>Campaign</Nav.Link>
    </Navbar>
  );
};

Component.displayName = 'Sidebar';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
