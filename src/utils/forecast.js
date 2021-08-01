const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fd21031852b2152fffb70e3ad4c69720&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services.", undefined);
    } else if (body.error) {
      callback("Unable to find location, try another search.", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ". It is currently " +
          body.current.temperature +
          " degrees out. There is a " +
          body.current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
