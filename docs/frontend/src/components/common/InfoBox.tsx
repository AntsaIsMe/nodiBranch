import React from 'react';

export default function InfoBox({ children, variant = 'info' }: { children: React.ReactNode, variant?: 'info' | 'warning' | 'danger' }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    danger: 'bg-red-50 border-red-200 text-red-800',
  };

  return (
    <div className={`p-4 border-l-4 rounded-r-md ${styles[variant]} my-4`}>
      {children}
    </div>
  );
}
