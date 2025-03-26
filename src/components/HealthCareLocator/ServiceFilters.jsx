import { Search, Hospital, Pill, User, Filter } from "lucide-react";

const ServiceFilters = ({
  serviceType,
  setServiceType,
  searchRadius,
  setSearchRadius,
  searchQuery,
  setSearchQuery,
  fetchNearbyServices,
  handleServiceTypeChange,
}) => {
  return (
    <div className="rounded-xl p-6 mb-6 bg-blue-50 dark:bg-blue-900"> {/* Blue background */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search healthcare services..."
            className="w-full p-3 pl-10 rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" // Blue borders and focus ring
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-blue-400 dark:text-blue-300" /> {/* Blue icon */}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-blue-800 dark:text-blue-200">Service Type</h3> {/* Blue text */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => handleServiceTypeChange("hospital")}
            className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors duration-200 ${
              serviceType === "hospital"
                ? "bg-blue-600 text-white border-blue-600 shadow-md" // Blue active button
                : "bg-blue-100 dark:bg-blue-800 border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-700 shadow-sm" // Blue inactive button
            }`}
          >
            <Hospital
              className={`h-6 w-6 ${
                serviceType === "hospital"
                  ? "text-white"
                  : "text-blue-600 dark:text-blue-300" // Blue icon
              }`}
            />
            <span className="text-xs mt-1 text-blue-800 dark:text-blue-200">Hospitals</span> {/* Blue text */}
          </button>
          <button
            onClick={() => handleServiceTypeChange("pharmacy")}
            className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors duration-200 ${
              serviceType === "pharmacy"
                ? "bg-blue-600 text-white border-blue-600 shadow-md" // Blue active button
                : "bg-blue-100 dark:bg-blue-800 border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-700 shadow-sm" // Blue inactive button
            }`}
          >
            <Pill
              className={`h-6 w-6 ${
                serviceType === "pharmacy"
                  ? "text-white"
                  : "text-blue-600 dark:text-blue-300" // Blue icon
              }`}
            />
            <span className="text-xs mt-1 text-blue-800 dark:text-blue-200">Pharmacies</span> {/* Blue text */}
          </button>
          <button
            onClick={() => handleServiceTypeChange("specialist")}
            className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors duration-200 ${
              serviceType === "specialist"
                ? "bg-blue-600 text-white border-blue-600 shadow-md" // Blue active button
                : "bg-blue-100 dark:bg-blue-800 border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-700 shadow-sm" // Blue inactive button
            }`}
          >
            <User
              className={`h-6 w-6 ${
                serviceType === "specialist"
                  ? "text-white"
                  : "text-blue-600 dark:text-blue-300" // Blue icon
              }`}
            />
            <span className="text-xs mt-1 text-blue-800 dark:text-blue-200">Specialists</span> {/* Blue text */}
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-blue-800 dark:text-blue-200">Search Radius</h3> {/* Blue text */}
        <div className="flex items-center">
          <input
            type="range"
            min="1000"
            max="20000"
            step="1000"
            value={searchRadius}
            onChange={(e) => setSearchRadius(Number.parseInt(e.target.value))}
            className="w-full h-2 bg-blue-200 dark:bg-blue-700 rounded-lg appearance-none cursor-pointer shadow-sm" // Blue range slider
          />
        </div>
        <div className="flex justify-between text-sm text-blue-600 dark:text-blue-400 mt-1"> {/* Blue text */}
          <span>1 km</span>
          <span>{searchRadius / 1000} km</span>
          <span>20 km</span>
        </div>
      </div>

      {serviceType === "specialist" && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3 text-blue-800 dark:text-blue-200">Specialties</h3> {/* Blue text */}
          <div className="space-y-2">
            {["Cardiology", "Optometry", "Dermatology", "Pediatrics", "Orthopedics"].map((specialty) => (
              <div key={specialty} className="flex items-center">
                <input
                  type="checkbox"
                  id={specialty}
                  className="h-4 w-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500 shadow-sm" // Blue checkbox
                />
                <label htmlFor={specialty} className="ml-2 text-sm text-blue-700 dark:text-blue-300"> {/* Blue text */}
                  {specialty}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => fetchNearbyServices(serviceType, searchRadius)}
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center shadow-md" // Blue button
      >
        <Filter className="h-4 w-4 mr-2 text-white" />
        Apply Filters
      </button>
    </div>
  );
};

export default ServiceFilters;