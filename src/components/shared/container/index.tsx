import React from 'react';

function Container({
  className,
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={`mx-auto max-w-container-width px-6 pb-20 ${className}`}
      {...otherProps}
    />
  );
}

Container.defaultProps = {
  className: '',
};

export default Container;
