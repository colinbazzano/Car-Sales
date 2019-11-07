import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions';

const AdditionalFeature = props => {
  const handleClick = () => {
    props.buyItem(props.feature)
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {buyItem})(AdditionalFeature);
