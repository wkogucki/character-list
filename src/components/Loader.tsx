interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={`flex justify-center items-center ${className}`}>
    <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />
  </div>
);
