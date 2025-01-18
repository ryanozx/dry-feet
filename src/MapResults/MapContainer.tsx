import * as React from 'react';
import Box from '@mui/material/Box';
import Map, { Layer, Source } from 'react-map-gl';
//import mapboxgl from 'mapbox-gl';

export default function MapContainer({ points }) {
    const geojson = {
        id: 'route',
        type: 'geojson',
        data: {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: points
            }
        }
    }

    const initialViewState = points?.[0] ?  {longitude: points[0][0], latitude: points[0][1]} : {longitude: 103.7734587, latitude: 1.2965065}

    return (
        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgColor: "lightblue" }}>
            <Map
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                initialViewState={{
                    ...initialViewState,
                    zoom: 17
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {
                    points &&
                    <Source 
                        {...geojson}
                    >
                        <Layer
                            id='route'
                            type='line'
                            source='route'
                            layout={{
                                'line-join': 'round',
                                'line-cap': 'round'
                            }}
                            paint={{
                                'line-color': '#F00',
                                'line-width': 8
                            }}
                        />
                    </Source>
                }
            </Map>
        </Box>
    )
}