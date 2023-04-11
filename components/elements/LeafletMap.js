import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

export default function LeafletMap({ center, zoom, markers }) {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (center && Array.isArray(center) && center.length === 2 && zoom) {
            if (!mapInstanceRef.current && mapRef.current) {
                const map = L.map(mapRef.current).setView(center, zoom);
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution:
                        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                }).addTo(map);
                mapInstanceRef.current = map;
            }

            if (markers && mapInstanceRef.current) {
                markers.forEach((marker) => {
                    if (marker.latlng) {
                        L.marker(marker.latlng).addTo(mapInstanceRef.current);
                    }
                });
            }

            return () => {
                if (mapInstanceRef.current) {
                    mapInstanceRef.current.remove();
                    mapInstanceRef.current = null;
                }
            };
        }
    }, [center, zoom, markers]);

    return <div ref={mapRef} style={{ height: "660px" }} />;
};

