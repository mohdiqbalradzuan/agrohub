import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { Container } from "@mui/material";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import myGeoJsonData from "@data/my-geo.json"; // Example: importing local data
import myStatesData from "@data/my-states.json"; // Example: importing local data

delete L.Icon.Default.prototype._getIconUrl;

const customIcon = new L.Icon({
    iconUrl: require("@images/location-pin.png"), // Path to your custom icon image
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon corresponding to the marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
    shadowSize: [32, 32], // Size of the shadow
    shadowAnchor: [16, 32], // Point of the shadow corresponding to the marker's location
});

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function MapPage({ users }) {
    const [myStates] = useState(myStatesData);

    return (
        <Container
            sx={{
                maxWidth: "1300px !important",
                height: "80vh",
                paddingTop: "120px",
            }}
        >
            <MapContainer
                center={[4.54, 108.7]}
                zoom={6}
                style={{ height: "80vh", width: "100%" }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <GeoJSON
                    data={myGeoJsonData}
                    style={(geoObject) => {
                        return myStates.find(
                            (state) => state.geoId === geoObject.properties.id
                        ).style;
                    }}
                />

                {users
                    .filter((u) => u.role === "User")
                    .map((user) => (
                        <Marker
                            key={user.id}
                            position={[user.latitude, user.longitude]}
                            icon={customIcon}
                        >
                            <Popup>
                                <strong>{user.name}</strong>
                                <br />
                                {user.email}
                                <br />
                                {user.product} - {user.quantity} units
                            </Popup>
                        </Marker>
                    ))}
            </MapContainer>
        </Container>
    );
}
