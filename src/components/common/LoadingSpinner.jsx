const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`loading-spinner ${sizeClasses[size]}`}></div>
      {text && <p className="text-text-gray text-sm">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;