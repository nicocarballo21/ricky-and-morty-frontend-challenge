const ErrorBadge = ({ error }: { error: string }) => {
  return (
    <div className="bg-danger-400 w-full h-14 flex px-5 items-center rounded-xl">
      <p className="text-white">{error}</p>
    </div>
  );
};

export default ErrorBadge;
