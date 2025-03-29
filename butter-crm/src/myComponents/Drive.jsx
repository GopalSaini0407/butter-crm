export default function Drive() {
    return (
      <div className="accounts">
        <h1>Drive</h1>
      </div>
    );
  }
  
// import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import Geocode from 'react-geocode';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// Geocode.setApiKey('YOUR_GOOGLE_MAPS_API_KEY');

// const containerStyle = {
//   width: '100%',
//   height: '500px',
// };

// const center = {
//   lat: 28.6139,
//   lng: 77.209,
// };

// export default function LocationSearchMap() {
//   const [location, setLocation] = useState('');
//   const [markers, setMarkers] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await Geocode.fromAddress(location);
//       const { lat, lng } = response.results[0].geometry.location;
//       setMarkers([...markers, { id: markers.length + 1, lat, lng }]);
//       setLocation('');
//     } catch (error) {
//       alert('Location not found!');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       <div className="flex gap-2">
//         <Input
//           type="text"
//           placeholder="Enter location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <Button onClick={handleSearch}>Search</Button>
//       </div>
//       <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//         <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
//           {markers.map((marker) => (
//             <Marker
//               key={marker.id}
//               position={{ lat: marker.lat, lng: marker.lng }}
//               label={`${marker.id}`}
//             />
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// }
