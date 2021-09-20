/* eslint-disable */
import React, { useState } from 'react';
import { Collapse, Container, Row, Nav, Navbar } from 'react-bootstrap';
import { MdPeople, MdPersonAdd, MdLibraryAdd, MdStarBorder, MdPieChart } from 'react-icons/md';

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
      <Nav.Link href='/dashboard'>
        <MdPieChart size={25} />
        Dashboard
      </Nav.Link>
      <Nav.Link href='/members'>
        <MdPeople size={25} />
        Members
      </Nav.Link>
      <Nav.Link href='/referrals'>
        <MdPersonAdd size={25} />
        Referrals
      </Nav.Link>
      <Nav.Link href='/jobs'>
        <MdLibraryAdd size={25} />
        Jobs
      </Nav.Link>
      <Nav.Link href='/campaign'>
        <MdStarBorder size={25} />
        Campaign
      </Nav.Link>
    </Navbar>
  );
};

Component.displayName = 'Sidebar';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
