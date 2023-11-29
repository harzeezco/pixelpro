import React from 'react';

function Container({
  className,
  style,
  ...otherProps
}: {
  className?: string | undefined;
  style?: object;
}) {
  return (
    <div
      className={`mx-auto max-w-container-width px-6 pb-20 ${className}`}
      style={{ ...style }}
      {...otherProps}
    />
  );
}

Container.defaultProps = {
  className: '',
  style: '',
};

export default Container;
