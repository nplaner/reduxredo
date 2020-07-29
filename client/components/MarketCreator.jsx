/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';

const MarketCreator = (props) => {
  return (
    <div>
      <h4>Create New Market</h4>
      <p>Location:</p>
      <input type="text" id="inputText" />
      <button type="button" id="inputButton">
        Add Market
      </button>
    </div>
  );
};
// how do we create the circuit between the store and an input field?
// how do we update the store from a presentation component?

export default MarketCreator;
