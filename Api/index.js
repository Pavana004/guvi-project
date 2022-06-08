const result = document.querySelector(".card");
const Api = "https://api.artic.edu/api/v1/artworks";


fetch(Api)
    .then((res) => res.json())
    .then((data) => showData(data.data))
    .catch((error)=>console.log(error));

const showData = (data)=>{
    
    data.map(i=>{
        const div = document.createElement("div");
        div.className = "card text-center ";
        div.innerHTML = `  <h5 class="card-title">Id:${i.id}</h5>
         <div class="card-body">
           <h5 class="card-title1">Api_Model:${i.api_model}</h5>
           <h5 class="card-title1">Api_Link:${i.api_link}</h5>
         </div>`;
  
        result.appendChild(div)
    });
    
}