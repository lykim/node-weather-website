const request = require('request')
const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicnVseSIsImEiOiJja2RiZmEybGMwbmpzMnhqcW9xYXFwbW5mIn0.AMp-neNSF2qhey6vi1GsGg&limit=1'
    request({ url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to Geocoding service!')
        } else if(!body.features || body.features.length === 0){
            callback('Unable to locate location')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    
    })
}

module.exports = geocode