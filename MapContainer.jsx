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
			attributionControl : false
		};
		this.mapStyle =
		{
			width : '50%',
			height : '50%'
		};
	}

	componentDidMount()
	{
		this.map.on('load', (e) =>
		{
			console.log('map loaded!');
		});
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
