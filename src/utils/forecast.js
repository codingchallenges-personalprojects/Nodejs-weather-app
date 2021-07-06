const request = require("request");


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a7391983e2ed7721c89b39219db669a9&query=37.8267,-122.4233';
    
    request({url, json : true },(error , {body}) => {
        if(error){

            callback('can not connect to the server!', undefined)
        }else if (body.error) {
            callback('it didnt find the location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast;