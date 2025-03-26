// MapDisplay.jsx
import { Loader2, MapPin } from "lucide-react";

const MapDisplay = ({ mapLoaded }) => {
  return (
    <div className="glassmorphism rounded-xl p-4 mb-6 h-[300px] relative overflow-hidden">
      {!mapLoaded ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
          <span className="ml-2 text-gray-600 dark:text-gray-300">Loading map...</span>
        </div>
      ) : (
        <div className="h-full w-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-gray-600 dark:text-gray-300">
              Map view would display here with markers for each healthcare service
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapDisplay;