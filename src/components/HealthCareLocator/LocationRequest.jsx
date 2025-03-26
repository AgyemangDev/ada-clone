import { MapPin } from "lucide-react";

const LocationRequest = () => {
  return (
    <div className="glassmorphism rounded-xl p-6 mb-8 text-center">
      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
      <h2 className="text-xl font-semibold mb-2">Location Access Required</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Please allow access to your location to find healthcare services near you.
      </p>
      <button
        onClick={() => {if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                // In a real app, you would update the user location in context
              },
              (error) => {
                console.error("Error getting location:", error);
              },
            );
          }
        }}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
      >
        Enable Location
      </button>
    </div>
  );
};

export default LocationRequest;