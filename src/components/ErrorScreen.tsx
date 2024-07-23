import { ReactComponent as DangerIcon } from 'assets/icons/DangerIcon.svg';

interface ErrorScreenProps {
  title: string;
  message: string;
  className?: string;
}
export const ErrorScreen = ({
  title,
  message,
  className,
}: ErrorScreenProps) => (
  <div
    className={`flex flex-col gap-4 md:gap-6 bg-red-200 py-6 rounded ${className}`}
  >
    <div className="flex justify-center">
      <DangerIcon className="justify-center" />
    </div>
    <p className="text-center font-bold">{title}</p>
    <p className="text-center font-semibold">{message}</p>
  </div>
);
