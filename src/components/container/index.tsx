import React from 'react';
import mergeClasses from '@/lib/utils';

function Container({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames: string;
}) {
  return (
    <div
      className={mergeClasses('max-w-container-width mx-auto flex', classNames)}
    >
      {children}
    </div>
  );
}

export default Container;
