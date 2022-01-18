const time = document.getElementById('time');
const date = document.getElementById('date');
const currentWeatherItems = document.getElementById('current-weather-items')
const timeZone = document.getElementById('time-zone');
const country = document.getElementById('country');
const weatherForcast = document.getElementById('weather-forcast');
const currentForcast = document.getElementById('current-temp');

// Open Weather API Key //

const API_KEY = '931cc3981cded5769e98a1e88cfea8f8'

// Setting the current time and date using new Date//

setInterval(() => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const newTime = new Date();
    const month = newTime.getMonth();
    const newDate = newTime.getDate();
    const day = newTime.getDay();
    const hour = newTime.getHours();
    const hourIn12Format = hour >= 13 ? hour % 12 : hour;
    const minute = newTime.getMinutes();
    const amPm = hour >= 12 ? 'PM' : 'AM';

    time.innerHTML = (hourIn12Format < 10 ? '0' + hourIn12Format : hourIn12Format) + ':' + (minute < 10 ? '0' + minute : minute) + ' ' + `<span id="am-pm">${amPm}</span>`
    date.innerHTML = days[day] + ',' + newDate + ' ' + months[month]

}, 1000);

