import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as couterActions from '../store/redux-actions/counter.actions';

function ActionsCounter ({actionsCount, actionsIncrement, acitonsDecrement}) {
  return <div>
    <button onClick={() => actionsIncrement(10)}>+</button>
    <span>{actionsCount}</span>
    <button onClick={() => acitonsDecrement(10)}>-</button>
  </div>
}

const mapStateToProps = state => ({
  actionsCount: state.actionsCounter.actionsCount
});

const mapDispatchToProps = dispatch => bindActionCreators(couterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ActionsCounter);