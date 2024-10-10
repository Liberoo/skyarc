import React from 'react';

type ReactImageProps = {
  children: React.ReactNode;
};

export default function ReactImage({ children }: ReactImageProps) {
  return (
    <div>{children}</div>
  );
}