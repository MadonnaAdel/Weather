
var imges =
[
        {"url":"images/pexels-baskin-creative-studios-1766838.jpg"},
        {"url":"images/pexels-eberhard-grossgasteiger-1287145.jpg"},
        {"url":"images/pexels-eberhard-grossgasteiger-640947.jpg"},
        {"url":"images/pexels-quang-nguyen-vinh-2649403.jpg"},
        {"url":"images/pexels-francesco-ungaro-2835436.jpg"},
        {"url":"images/pexels-life-of-pix-7919.jpg"},
        {"url":"images/pexels-pixabay-326055.jpg"},
];

var imgeIndex = 0;
var cityInput = document.querySelector(".searchInput");
var btn = document.querySelector(".btn");
var icon = document.querySelector(".icon");
var error = document.querySelector(".error");
var apiKey = "6de5a17de3345f49f0f40ffde10f9695";
var urlApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;


async function getDataApi(city){
        const dataApi = await fetch(urlApi + city + `&appid=${apiKey}`);

        if(dataApi.status == 404)
        {
            error.style.display="block";
            cityInput.addEventListener("focus", ()=>{
                error.style.display="none";
            })
        }
        else
        {
            const response = await dataApi.json();

        document.querySelector(".city").innerHTML= response.name;
        document.querySelector(".temp").innerHTML= Math.round(response.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML= response.main.humidity +"%";
        document.querySelector(".win").innerHTML= response.wind.speed+"km/h";

        if(response.weather[0].main == "Clouds")
        {
            icon.src="images/clouds.png"
            document.querySelector(".main .weather .col").style.transform="matrix3d(1, 0, 1,0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 20, 6, 1)";
            document.querySelector(".main .weather .col").style.transition="6s ease-out";
            document.querySelector(".main .weather .col").style.opacity="1";

        }else if(response.weather[0].main == "Rain")
        {
            icon.src="images/rain.png"
            document.querySelector(".main .weather .icon").style.transform=" translate3d(-63px, -109px, 39px)";
            document.querySelector(".main .weather .icon").style.transition="6s ease-out";
            document.querySelector(".main .weather .icon").style.opacity="1";
        }else if(response.weather[0].main == "Clear")
        {
            icon.src="images/clear.png"
            document.querySelector(".main .weather .icon").style.transform="rotate(360deg)";
            document.querySelector(".main .weather .icon").style.opacity="1";
            document.querySelector(".main .weather .icon").style.transition="6s ease-out";
        }else if(response.weather[0].main == "Snow")
        {
            icon.src="images/snow.png"
            document.querySelector(".main .weather .icon").style.transform=" translate3d(-63px, -109px, 39px)";
            document.querySelector(".main .weather .icon").style.opacity="1";
            document.querySelector(".main .weather .icon").style.transition="6s ease-out";
        }else if(response.weather[0].main == "Drizzle")
        {
            icon.src="images/drizzle.png"
            document.querySelector(".main .weather .icon").style.transform="matrix3d(1, 0, 1,0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 20, 6, 1)";
            document.querySelector(".main .weather .icon").style.transition="6s ease-out"
            document.querySelector(".main .weather .icon").style.opacity="1";
        }else if(response.weather[0].main == "Mist")
        {
            icon.src="images/mist.png"
            document.querySelector(".main .weather .icon").style.transform=" translate3d(-63px, -109px, 39px)";
            document.querySelector(".main .weather .icon").style.transition="6s ease-out";
            document.querySelector(".main .weather .icon").style.opacity="1";
        }
        }
};

    function changImg(){
    console.log(imgeIndex);
    if(imgeIndex == imges.length)
    {
        imgeIndex=0;
    }
    document.body.style.background = `no-repeat center url(${imges[imgeIndex].url})`;
    document.body.style.backgroundSize = `cover`;
    document.querySelector(".weather").style.height = "fit-content";
    document.querySelector(".weather").style.transition = "8s";
    document.querySelector(".weather").style.margin = "20px";
    document.querySelector(".weather").style.padding = "5px";
    document.querySelector(".weather").style.trans = "block";
    document.querySelector(".col").style.opacity="1";
    document.querySelector(".col0").style.opacity="1";
    document.querySelector(".col").style.transition="10s";
    document.querySelector(".col0").style.transition="10s";
    imgeIndex = imgeIndex + 1 ;
};

btn.addEventListener("click",()=>{
    changImg();
    getDataApi(cityInput.value);
});

cityInput.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        changImg();
        getDataApi(cityInput.value)
    }
});