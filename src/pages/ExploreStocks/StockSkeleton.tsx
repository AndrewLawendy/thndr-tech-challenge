import { forwardRef } from "react";

type StockSkeletonProps = {
  className?: string;
};

const StockSkeleton = forwardRef<HTMLDivElement, StockSkeletonProps>(
  ({ className = "" }: StockSkeletonProps, ref) => (
    <div
      ref={ref}
      className={`${className} overflow-hidden bg-white border-gray-200 shadow-sm animate-pulse`}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="w-full">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="mt-3">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  ),
);

export default StockSkeleton;
