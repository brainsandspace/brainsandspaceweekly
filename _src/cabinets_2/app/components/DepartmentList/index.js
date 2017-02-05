/**
*
* DepartmentList
*
*/

import React, { PropTypes }  from 'react';
import styled from 'styled-components';

import Department from 'components/Department';

function DepartmentList({ departmentsArr }) {
  return (
    <div>
      {/*{departmentsArr.map(department => {
        return <Department key={department.title} />
      })}*/}
    </div>
  );
}

DepartmentList.propTypes = {
  departmentsArr: PropTypes.array.isRequired,
};

export default DepartmentList;
