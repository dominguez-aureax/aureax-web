/* eslint-disable */
import React, { useState } from 'react';
import { Collapse, Container, Row, Nav, Navbar } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

import './index.scss';

const Component = () => {
  const [collapseOpen, setCollapseOpen] = useState();
  const logo = <img className='logo' src='./favicon.ico' />;
  const companyName = 'Aureax';

  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };

  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  return (
    <Navbar className='sidebar' expand='m' id='sidebar-main'>
      <Container fluid>
        <Row className='company-row'>
          {logo}
          <h3 className='company-name'>{companyName}</h3>
        </Row>
      </Container>
    </Navbar>
  );
};

Component.displayName = 'Sidebar';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
