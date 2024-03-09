import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;
  reason?: string;
  className?: string;
};

export const ErrorFallback = ({ message, reason, className }: Props) => {
  return (
    <div className={cn(className)}>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-2">
          <span>{message ? message : "Something went wrong!"}</span>
          <span>{reason && reason}</span>
        </AlertDescription>
      </Alert>
    </div>
  );
};
