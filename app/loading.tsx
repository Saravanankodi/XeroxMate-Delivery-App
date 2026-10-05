export default function Loading() {
    return (
        <div className="flex min-h-dvh items-center justify-center bg-white">
            <div className="flex items-center gap-2">
                <span className="size-4 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
                <span className="text-sm font-medium text-gray-500">
                    Loading...
                </span>
            </div>
        </div>
    );
}