module.exports = {
	// The configuration settings for the OAS3 flow-node: OpenWeatherMap API
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'IdRatherBeWriting-open-weather_map_api-2.5.2-resolved': {}
		}
	},
	// The following authorization credentials needed to use this service.
	// Please follow this guide to manually configure these credentials:
	// https://docs.axway.com/bundle/api-builder/page/docs/developer_guide/credentials/index.html
	authorization: {
		credentials: {
			'OpenWeatherMap API app_id': {
				type: 'apiKey',
				key: process.env.WEATHER_KEY
			}
		}
	}
};
