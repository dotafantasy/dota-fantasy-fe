import { connect } from 'react-redux';
import { compose } from 'redux';

import AppLayout from './AppLayout';

// import { action1, action2, action3 } from './actions'

const mapStateToProps = state => {
    return {
      //reducerName: state.reducerProp
    };
};
  
  const mapDispatchToProps = () => {
    return {
      //actionName
    };
  };

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(AppLayout)