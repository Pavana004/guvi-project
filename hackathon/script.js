
let Api = "AIzaSyD6qmuXCwu0Q0ALsFy5lJm_Nqwy2S5dVYo";


let http = "https://www.googleapis.com/youtube/v3/videos?";


fetch(http + new URLSearchParams({
    key: Api, part: "snippet", chart: "mostPopular", maxResults: 1, regionCode: "IN"
}))
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });

