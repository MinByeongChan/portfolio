import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Template(props: Props) {
  const { children } = props;

  return (
    <div>
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
