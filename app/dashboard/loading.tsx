export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />

      <p className="mt-5 font-medium text-gray-600">
        Loading Dashboard...
      </p>
    </div>
  );
}