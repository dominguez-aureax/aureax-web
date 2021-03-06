import React from 'react';
import { useLocation } from 'react-router';
import { Row, Nav, Navbar } from 'react-bootstrap';
import { MdPeople, MdPersonAdd, MdLibraryAdd, MdStarBorder, MdPieChart } from 'react-icons/md';

import './index.scss';

const Component = () => {
  const logo = <img className='logo' src='./favicon.ico' />;
  const location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? true : false;
  };

  return (
    <Navbar className='sidebar' expand='s' id='sidebar-main'>
      <Row className='company-row'>{logo}</Row>
      <div className='line' />
      <Nav.Link href='/dashboard' active={activeRoute('/dashboard')}>
        <MdPieChart size={25} />
        Dashboard
      </Nav.Link>
      <Nav.Link href='/members' active={activeRoute('/members')}>
        <MdPeople size={25} />
        Members
      </Nav.Link>
      <Nav.Link href='/referrals' active={activeRoute('/referrals')}>
        <MdPersonAdd size={25} />
        Referrals
      </Nav.Link>
      <Nav.Link href='/jobs' active={activeRoute('/jobs')}>
        <MdLibraryAdd size={25} />
        Jobs
      </Nav.Link>
      <Nav.Link href='/campaign' active={activeRoute('/campaign')}>
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
