const ErrorBadge = ({ error }: { error: string }) => {
  return (
    <div className="bg-danger-400 w-full h-20 flex px-5 items-center rounded-xl">
      <p className="text-white">Something went wrong! {error}</p>
    </div>
  );
};

export default ErrorBadge;