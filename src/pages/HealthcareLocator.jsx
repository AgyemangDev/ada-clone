"use client";

import { useState, useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import { SymptomContext } from "../context/SymptomContext";
import { MapPin, Loader2, Filter } from "lucide-react";
import ServiceFilters from "../components/HealthCareLocator/ServiceFilters";
import ServiceResults from "../components/HealthCareLocator/ServiceResults";
import LocationRequest from "../components/HealthCareLocator/LocationRequest";
import MapDisplay from "../components/HealthCareLocator/MapDisplay";

const HealthcareLocator = () => {
  const { nearbyServices, userLocation, isLoading, error, fetchNearbyServices } =
    useContext(SymptomContext);

  const [serviceType, setServiceType] = useState("hospital");
  const [searchRadius, setSearchRadius] = useState(5000);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Filter services based on search query
  useEffect(() => {
    if (nearbyServices) {
      setFilteredServices(
        nearbyServices.filter(
          (service) =>
            service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (service.specialties &&
              service.specialties.some((s) =>
                s.toLowerCase().includes(searchQuery.toLowerCase())
              ))
        )
      );
    }
  }, [nearbyServices, searchQuery]);

  // Fetch services when component mounts or when service type changes
  useEffect(() => {
    if (userLocation) {
      fetchNearbyServices(serviceType, searchRadius);
    }
  }, [userLocation, serviceType, searchRadius]);

  // Initialize Google Maps (mock implementation)
  useEffect(() => {
    // In a real app, you would load the Google Maps API here
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleServiceTypeChange = (type) => {
    setServiceType(type);
    setSelectedService(null);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    // In a real app, you would center the map on the selected service
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Healthcare Services Locator</h1>

        {!userLocation && !isLoading && <LocationRequest />}

        {userLocation && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search and Filters */}
            <div className="lg:col-span-1">
              <ServiceFilters
                serviceType={serviceType}
                setServiceType={setServiceType}
                searchRadius={searchRadius}
                setSearchRadius={setSearchRadius}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                fetchNearbyServices={fetchNearbyServices}
                handleServiceTypeChange={handleServiceTypeChange}
              />
            </div>

            {/* Map and Results */}
            <div className="lg:col-span-2">
              <MapDisplay mapLoaded={mapLoaded} />
              <ServiceResults
                isLoading={isLoading}
                error={error}
                filteredServices={filteredServices}
                selectedService={selectedService}
                handleServiceSelect={handleServiceSelect}
                serviceType={serviceType}
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default HealthcareLocator;