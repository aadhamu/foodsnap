import FoodUploader from "../components/FoodUploader";
import useNetworkStatus from "../hooks/useNetworkStatus";

function Scan() {
  const isOnline = useNetworkStatus();

  return (
    <div className="p-6">
      {!isOnline && (
        <p className="text-red-600 text-center mb-4">
          ⚠️ You are offline. API scanning won’t work.
        </p>
      )}
      <FoodUploader />
    </div>
  );
}

export default Scan;
