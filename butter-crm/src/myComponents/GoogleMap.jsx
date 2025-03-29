import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 20.5937, // Default latitude (India center)
  lng: 78.9629,
};

// ✅ Replace with your actual API keys
const GOMAPS_API_KEY = "AlzaSyqz7s4IHfRYE62_EKRIxmOnN9TtjpF7sWp";
const GOOGLE_MAPS_API_KEY = "AIzaSyARJgKmf4_MU0MzlKEtTA9PwieoBoNdNHA";

const SearchableMap = () => {
  const [markers, setMarkers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [directions, setDirections] = useState(null);
  const mapRef = useRef(null);

  // ✅ Search Query ke base pe locations fetch karo
  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      try {
        const response = await fetch(
          `https://maps.gomaps.pro/maps/api/geocode/json?address=${query}&key=${GOMAPS_API_KEY}`
        );
        const data = await response.json();

        if (data.status === "OK") {
          // ✅ Suggestion list generate karo
          setSuggestions(
            data.results.map((result) => ({
              name: result.formatted_address,
              location: result.geometry.location,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching location: ", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  // ✅ Location select hone par map pe marker set karo
  const handleSelectPlace = (place) => {
    const newMarker = { lat: place.location.lat, lng: place.location.lng };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setSearchQuery("");
    setSuggestions([]);

    // ✅ Agar 2 se zyada markers hain toh route draw karo
    if (markers.length > 0) {
      setDirections({
        origin: markers[markers.length - 1],
        destination: newMarker,
      });
    }
  };

  // ✅ Markers update hone par map ko adjust karo
  useEffect(() => {
    if (mapRef.current && markers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((marker) => bounds.extend(marker));
      mapRef.current.fitBounds(bounds);
    }
  }, [markers]);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <div style={{ marginBottom: "10px", position: "relative" }}>
          <input
            type="text"
            placeholder="Enter country, state, or city"
            value={searchQuery}
            onChange={handleSearch}
            style={{ width: "300px", padding: "8px", marginBottom: "10px" }}
          />

          {/* ✅ Suggestions List */}
          {suggestions.length > 0 && (
            <ul
              style={{
                position: "absolute",
                background: "white",
                width: "300px",
                zIndex: 9999,
                listStyle: "none",
                padding: "5px",
                margin: 0,
                maxHeight: "200px",
                overflowY: "scroll",
                border: "1px solid gray",
              }}
            >
              {suggestions.map((place, index) => (
                <li
                  key={index}
                  style={{ padding: "5px", cursor: "pointer" }}
                  onClick={() => handleSelectPlace(place)}
                >
                  {place.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
          onLoad={(map) => (mapRef.current = map)}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}

          {directions && (
            <DirectionsService
              options={{
                destination: directions.destination,
                origin: directions.origin,
                travelMode: "DRIVING",
              }}
              callback={(result, status) => {
                if (status === "OK") {
                  setDirections(result);
                }
              }}
            />
          )}

          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default SearchableMap;
