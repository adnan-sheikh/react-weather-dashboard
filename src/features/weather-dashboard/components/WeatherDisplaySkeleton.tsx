import { Skeleton } from "@/components/ui/skeleton";
import { SVGSkeleton } from "./Skeleton";

export const WeatherDisplaySkeleton = () => (
  <>
    <div className="grid gap-4 pt-4 p-6">
      <div className="flex flex-col gap-1.5">
        <h2>
          <Skeleton className="w-[64px] max-w-full" />
        </h2>
        <p>
          <Skeleton className="w-[104px] max-w-full" />
        </p>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="flex flex-row items-center gap-4">
          <SVGSkeleton className="bg-gray-200 rounded-full overflow-hidden dark:bg-gray-800 w-[100px] h-[100px]" />
          <div className="grid gap-1.5">
            <p>
              <Skeleton className="w-[32px] max-w-full" />
            </p>
            <div className="flex flex-row items-center gap-4">
              <p>
                <Skeleton className="w-[120px] max-w-full" />
              </p>
              <p>
                <Skeleton className="w-[104px] max-w-full" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-4">
            <SVGSkeleton className="w-[24px] h-[24px]" />
            <p>
              <Skeleton className="w-[56px] max-w-full" />
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <SVGSkeleton className="w-[24px] h-[24px]" />
            <p>
              <Skeleton className="w-[56px] max-w-full" />
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <SVGSkeleton className="w-[24px] h-[24px]" />
            <p>
              <Skeleton className="w-[136px] max-w-full" />
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <SVGSkeleton className="w-[24px] h-[24px]" />
            <p>
              <Skeleton className="w-[88px] max-w-full" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);
