const request = require('request')
const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4b8367d84927ba59ee5979c3e360ce65&query='+lat+','+long

    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!!')
        } else if(body.error){
            callback('unable to find location')
        } else{
            const {weather_descriptions, temperature, feelslike } = body.current
            callback(undefined, weather_descriptions[0]+ '. It is currently ' + temperature + ' degress out. It feels like '+ feelslike + ' degress out')
        }
    })
}
module.exports = forecast