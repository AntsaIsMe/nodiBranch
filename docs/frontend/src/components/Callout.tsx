import React from 'react';

type CalloutType = 'tip' | 'info' | 'warning';

interface CalloutProps {
  type: CalloutType;
  title: string;
  children: React.ReactNode;
}

const Callout = ({ type, title, children }: CalloutProps) => {
  const styles = {
    tip: {
      bg: 'bg-secondary/20',
      border: 'border-secondary',
      text: 'text-primary',
    },
    info: {
      bg: 'bg-primary/10',
      border: 'border-primary',
      text: 'text-primary',
    },
    warning: {
      bg: 'bg-amber-100',
      border: 'border-amber-300',
      text: 'text-amber-800',
    },
  };

  const style = styles[type];

  return (
    <div className={`p-4 rounded-md border-l-4 ${style.bg} ${style.border} my-6`}>
      <div className={`font-semibold mb-1 ${style.text}`}>{title}</div>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
};

export default Callout;
