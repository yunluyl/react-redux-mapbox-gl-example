import React from 'react';
import mapboxgl from 'mapbox-gl';
import Mapbox from 'react-redux-mapbox-gl';
import mapAccessToken from './mapToken.js';

class MapContainer extends React.Component
{
	getMap = (map) =>
	{
		this.map = map;
	};

	componentWillMount()
	{
		this.mapOptions =
		{
			style : 'mapbox://styles/mapbox/streets-v9',
                        dragPan : true
		};
		this.mapStyle =
		{
                        position : 'absolute',
			width : 200,
			height : 300,
                        top : 200,
                        left : 200
		};
	}

	componentDidMount()
	{
		this.map.on('load', (e) =>
		{
			console.log('map loaded!');
		});
                this.map.addControl(new mapboxgl.Navigation({position: 'bottom-right'}));
                this.map.addControl(new mapboxgl.Geolocate({position: 'bottom-right'}));
	}

	render()
	{
		return (
			<Mapbox
				mapboxgl={mapboxgl}
				accessToken={mapAccessToken}
				getMap={this.getMap}
				style={this.mapStyle}
				options={this.mapOptions}
			>
			</Mapbox>
		);
	}
}

export default MapContainer;
