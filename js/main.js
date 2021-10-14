var app = new Vue({
    el: '#box',
    data: {
        city: '',
        weatherList:[]
    },
    methods: {
        searchWeather: function () {
            // console.log(this.city);
            const that=this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city).then(function (response) {
                // console.log(response);
                that.weatherList=response.data.data.forecast;
                // console.log(that.weatherList);
                that.city='';
            }).catch(function (err) {
                console.log(err);
            })
        },
        cityChange:function(city){
            this.city=city;
            this.searchWeather(); 
            this.city='';

        },
        searchCity:function(){
            this.searchWeather();
        }
    }
})