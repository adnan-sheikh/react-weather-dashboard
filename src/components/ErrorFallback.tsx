type Props = {
  message: string;
};

export const ErrorFallback = ({ message }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-red-600">{message}</p>
    </div>
  );
};
