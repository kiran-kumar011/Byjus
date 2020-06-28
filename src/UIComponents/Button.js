import React, { useState } from 'react';

const Button = ({ onClick, style, children }) => {
  const [touched, setTouchState] = useState(false);

  const className = touched ? 'touched' : '';
  return (
    <div style={{ ...style }}>
      <div
        className={className}
        onMouseDown={() => setTouchState(!touched)}
        onMouseUp={() =>
          setTimeout(() => {
            setTouchState(!touched);
            if (onClick) {
              onClick();
            }
          }, 150)
        }
      >
        {{ ...children }}
      </div>
    </div>
  );
};

export default Button;
