import { connect } from 'react-redux';
import Page from '../components/Page';

const mapStateToProps = (state) => (
  {
    type: state.pageType,
    content: state.pageContent
  }
)

const VisiblePage = connect(
  mapStateToProps
)(Page)

export default VisiblePage;