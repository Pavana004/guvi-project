
const result = document.querySelector(".card");
const Api_2="https://emojihub.herokuapp.com/api/all";


fetch(Api_2)
.then((res)=> res.json())
.then((data)=>showEmoji(data))
.catch((error)=>console.log(error));

const showEmoji = (data)=>{
    
    data.map(item=>{
        
        const div = document.createElement("div");
        div.className = "card text-center ";
        div.innerHTML = `  <h5 class="card-title">Name : ${item.name}</h5>
         <div class="card-body">
          <p>Category : ${item.category}</p>
          <p>Group : ${item.group}</p>
         </div>`;
  
         result.appendChild(div)
    });
    
}

