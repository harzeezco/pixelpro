import mergeClasses from '@/app/lib/utils';
import React from 'react';

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
