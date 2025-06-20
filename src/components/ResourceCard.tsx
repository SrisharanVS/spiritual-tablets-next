import React from 'react';

interface ResourceCardProps {
  title: string;
  buttonText: string;
  onClick?: () => void;
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, buttonText, onClick, className }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-start ${className || ''}`}>
      <h2 className="text-2xl font-semibold text-spiritual-green mb-4">{title}</h2>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ResourceCard; 