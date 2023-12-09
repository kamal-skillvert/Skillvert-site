import React, { memo, useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 12.9197,
    lng: 77.6717
};

const GoogleMapApi = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: ""
    });

    // eslint-disable-next-line
    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callBack(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callBack(map) {
        setMap(null);
    }, [])

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <></>
        </GoogleMap>
    ) : <></>
}
export default memo(GoogleMapApi);
