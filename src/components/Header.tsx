import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Header = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");

  return (
    <div className="w-full flex p-6 md:flex-row md:items-center md:justify-between md:gap-4">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">
          Weather Dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter a city to retrieve the weather information.
        </p>
      </div>
      <div className="flex flex-row gap-2 md:gap-4 w-[32rem]">
        <Input
          placeholder="Search city..."
          className="flex-1"
          defaultValue={city!}
        />
        <Button>Search</Button>
      </div>
    </div>
  );
};
