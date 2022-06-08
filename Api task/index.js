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


// const Api_2="https://emojihub.herokuapp.com/api/all";
// const emoji = document.querySelector(".emoji");

// fetch(Api_2)
// .then((res)=> res.json())
// .then((data)=>showEmoji(data))
// // .catch((error)=>console.log(error));

// const showEmoji = (data)=>{
    
//     data.map(item=>{
//         const div = document.createElement("div");
//         div.className = "card text-center ";
//         div.innerHTML = `  <h5 class="card-title">Name:${item.name}</h5>
//          <div class="card-body">
          
//          </div>`;
  
//          result.appendChild(div)
//     });
    
// }

