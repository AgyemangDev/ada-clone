import { motion } from "framer-motion";
import { Phone, Star, Clock, MapPin,Loader2 } from "lucide-react";

const ServiceResults = ({ isLoading, error, filteredServices, selectedService, handleServiceSelect, serviceType }) => {

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-gray-300 fill-current" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </div>
        </div>,
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return <div className="flex">{stars}</div>;
  };

  const getServiceTypeIcon = (type) => {
    switch (type) {
      case "hospital":
        return <MapPin className="h-5 w-5" />;
      case "pharmacy":
        return <MapPin className="h-5 w-5" />;
      case "specialist":
        return <MapPin className="h-5 w-5" />;
      default:
        return <MapPin className="h-5 w-5" />;
    }
  };

  const getDirections = (service) => {
    // In a real app, you would open Google Maps with directions
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${service.address}`, "_blank");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          {isLoading ? "Searching..." : `${filteredServices.length} Results Found`}
        </h2>
        <div className="text-sm text-gray-600 dark:text-gray-400">Sorted by distance</div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-40">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
          <span className="ml-2 text-gray-600 dark:text-gray-300">Searching for healthcare services...</span>
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-500">{error}</p>
        </div>
      ) : filteredServices.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-300">
            No healthcare services found. Try adjusting your filters.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`glassmorphism rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                selectedService?.id === service.id ? "border-2 border-primary" : "hover:shadow-md"
              }`}
              onClick={() => handleServiceSelect(service)}
            >
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-primary/10 mr-3">{getServiceTypeIcon(serviceType)}</div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{service.name}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{service.distance}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{service.address}</p>
                  <div className="flex items-center mb-2">
                    {renderStars(service.rating)}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      {service.rating.toFixed(1)}
                    </span>
                  </div>
                  {service.specialties && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {service.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                  {service.hours && (
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.hours}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                <a
                  href={`tel:${service.phone}`}
                  className="flex items-center text-primary hover:text-primary/80 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="h-4 w-4 mr-1" />
                  {service.phone}
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    getDirections(service);
                  }}
                  className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors duration-200"
                >
                  Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceResults;