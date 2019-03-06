import React from 'react';
import PropTypes from 'prop-types';

export const required = value =>
  value || typeof value === 'number'
    ? undefined
    : 'You have to enter the word first';

const RenderField = ({ type, input, meta: { touched, error, warning } }) => (
  <>
    <input
      {...input}
      type={type}
      placeholder="Please type here... "
      className="form-control"
    />
    {touched &&
      ((error && <div className="message">{error}</div>) ||
        (warning && <div className="message">{warning}</div>))}
  </>
);
RenderField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  type: PropTypes.string,
};
export default RenderField;
