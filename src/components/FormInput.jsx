import React from 'react';

export default function FormInput({ label, as = 'input', ...props }) {
  const Component = as;

  return (
    <label className="form-field">
      <span className="form-label">{label}</span>
      <Component className="form-control" {...props} />
    </label>
  );
}
