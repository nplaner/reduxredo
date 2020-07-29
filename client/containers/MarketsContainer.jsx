/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
import MarketCreator from '../components/MarketCreator.jsx';
import MarketsDisplay from '../components/MarketsDisplay.jsx';

const mapStateToProps = (state) => ({
  // provide pertinent state here
});

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
});

const MarketsContainer = () => {
  return (
    <div className="innerbox">
      <MarketCreator />
      <MarketsDisplay />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
