/*
 *
 * DepartmentList
 *
 */
// current department

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StyledButton from './StyledButton';
import StyledList from './StyledList';
import { selectDepartmentListDomain, makeSelectDepartmentList } from './selectors';
import { showDepartmentList } from './actions';



/** YOU WERE HERE ABOUT TO FIGURE OUT HOW TO MAKE THIS CONTAINER FILL IN INFORMATION FROM THE DEPARTMENTS CONSTANT */

export class DepartmentList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <StyledButton onClick={this.props.onClick} />
        {this.props.departmentListVisible ?
          <StyledList departmentsArr={this.props.departmentsArr} /> :
          null
        }
      </div>
    );
  }
}

DepartmentList.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  departmentsArr: PropTypes.array.isRequired,
  departmentListVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,

};

// TODO this could definitely be refactored
const mapStateToProps = (state) => {
  console.log('mapping state to props', state, state.get('departments').get('departmentsArr'));
  return {
    departmentsArr: state.get('departments').get('departmentsArr'),
    departmentListVisible: state.get('departments').get('departmentListVisible'),
  };
};

// const mapStateToProps = createStructuredSelector({
//   departmentsArr: makeSelectDepartmentList(),
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onClick: () => dispatch(showDepartmentList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
