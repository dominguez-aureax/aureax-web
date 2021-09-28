import React, { useState, Fragment } from 'react';
import { Alert, Container, Table } from 'react-bootstrap';

//eslint-disable-next-line
import { CreateRow, Layout } from '../../components';

import data from './mock-data.json';

import './index.scss';

const Component = () => {
  // eslint-disable-next-line
  const [members, setMembers] = useState(data);
  console.log(members);

  return (
    <Layout>
      <div className='members-page'>
        <Alert variant='info'>TODO: MEMBERS PAGE</Alert>
        <Container>
          <Table striped responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <Fragment key={index}>
                  <CreateRow member={member} index={index} />
                </Fragment>
              ))}
              <tr>
                <td>1</td>
                <td>Melchor Dominguez</td>
                <td>mdmngz411@gmail.com</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </Layout>
  );
};

Component.displayName = 'Members';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
