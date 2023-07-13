import React from 'react';

function Button({ children, variant = 'primary' }) {
  return <button variant={variant}>{children}</button>;
}

export default Button;
