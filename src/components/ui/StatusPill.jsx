import React from 'react';
import { CheckCircle, MinusCircle, Clock } from 'lucide-react';

const iconMap = {
  check: <CheckCircle size={14} />,
  minus: <MinusCircle size={14} />,
  clock: <Clock size={14} />,
};

export const StatusPill = ({ status }) => {
  if (!status) return null;
  return (
    <span className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color} ${status.bgColor}`}>
      {iconMap[status.icon]}
      <span>{status.text}</span>
    </span>
  );
};
