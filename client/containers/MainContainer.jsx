/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from './MarketsContainer.jsx';

const mapStateToProps = (state) => ({
  TotalCards: state.markets.totalCards,
  TotalMarkets: state.markets.totalMarkets,
});

const mapDispatchToProps = (dispatch) => ({});

const MainContainer = (props) => {
  return (
    <div className="container">
      <div className="outerBox">
        <h1 id="header">MegaMarket Loyalty Cards</h1>
        <TotalsDisplay totalCards={props.TotalCards} totalMarkets={props.TotalMarkets} />
        <MarketsContainer />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
