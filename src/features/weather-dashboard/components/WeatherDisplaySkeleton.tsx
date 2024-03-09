import { Skeleton } from "@/components/ui/skeleton";

export const WeatherDisplaySkeleton = () => (
  <div className="w-full flex-1">
    <div className="flex flex-col gap-4 pt-4 p-6">
      <div className="flex flex-col justify-center gap-1.5 h-[66px]">
        <h2>
          <Skeleton className="h-[30px] w-[350px] max-w-full" />
        </h2>
        <p>
          <Skeleton className="h-[20px] w-[100px] max-w-full" />
        </p>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="flex flex-row items-center gap-4">
          <Skeleton className="bg-gray-200 rounded-full dark:bg-gray-800 w-[80px] h-[80px]" />
          <div className="grid gap-1.5">
            <p>
              <Skeleton className="w-[200px] h-[40px] max-w-full" />
            </p>
            <div className="flex flex-row items-center gap-4">
              <p>
                <Skeleton className="w-[120px] h-[20px] max-w-full" />
              </p>
              <p>
                <Skeleton className="w-[100px] h-[20px] max-w-full" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex flex-row items-center gap-4">
              <Skeleton className="w-[32px] h-[32px]" />
              <p>
                <Skeleton className="w-[80px] h-[32px] max-w-full" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
