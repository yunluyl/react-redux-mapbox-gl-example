import React from 'react';
import mapboxgl from 'mapbox-gl';
import Mapbox from 'react-redux-mapbox-gl';

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
				accessToken='pk.eyJ1IjoibHV5dW4xOTg5OTMiLCJhIjoiY2lwanczdmVnMDF6NHRlbTQ0dHdkemJ3ZCJ9.jmWyDcYef7dh8fxuXP3nZg'
				getMap={this.getMap}
				style={this.mapStyle}
				options={this.mapOptions}
			>
			</Mapbox>
		);
	}
}

export default MapContainer;