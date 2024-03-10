import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const NotFoundFallback = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-6xl font-bold font-sans">404</h1>
      <p className="text-muted-foreground">
        The page you're trying to access doesn't exist
      </p>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};
