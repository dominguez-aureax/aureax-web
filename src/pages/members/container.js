import { BindComponent } from '../../components';

import Component from './component';

const getComponentProps = ({ members }) => {
  return {
    members,
  };
};

export default BindComponent(Component, getComponentProps);
