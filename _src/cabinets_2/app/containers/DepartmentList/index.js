/*
 *
 * DepartmentList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectDepartmentList from './selectors';

export class DepartmentList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="DepartmentList"
          meta={[
            { name: 'description', content: 'Description of DepartmentList' },
          ]}
        />
      </div>
    );
  }
}

DepartmentList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DepartmentList: makeSelectDepartmentList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
