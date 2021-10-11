import React, { Fragment } from 'react';
import { Alert, Container, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

//eslint-disable-next-line
import { CreateRow, Layout } from '../../components';

import './index.scss';

const Component = ({ members }) => {
  // Convert serialized member array into regular object array;
  const membersRef = [];
  members.forEach((member) => membersRef.push(JSON.parse(member)));

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
              {membersRef.map((member, index) => (
                <Fragment key={index}>
                  <CreateRow member={member} index={index} />
                </Fragment>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </Layout>
  );
};

Component.displayName = 'Members';

Component.propTypes = {
  members: PropTypes.array,
};

Component.defaultProps = {
  members: [],
};

export default Component;
