const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
    const CardSkeleton = () => (
        <div className="card animate-pulse-slow">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        </div>
    );

    const ListSkeleton = () => (
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg animate-pulse-slow">
            <div className="w-16 h-16 bg-gray-200 rounded"></div>
            <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
        </div>
    );

    const TableSkeleton = () => (
        <div className="space-y-2 animate-pulse-slow">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-lg">
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    <div className="h-4 bg-gray-200 rounded flex-1"></div>
                </div>
            ))}
        </div>
    );

    const skeletons = {
        card: CardSkeleton,
        list: ListSkeleton,
        table: TableSkeleton,
    };

    const SkeletonComponent = skeletons[type] || CardSkeleton;

    return (
        <>
            {[...Array(count)].map((_, i) => (
                <SkeletonComponent key={i} />
            ))}
        </>
    );
};

export default LoadingSkeleton;
