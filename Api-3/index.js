const result = document.querySelector(".card");
const Api = "https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10";


fetch(Api)
    .then((res) => res.json())
    .then((data) => showData(data.verses))
    .catch((error)=>console.log(error));

const showData = (data)=>{
    
    data.map(i=>{
        const div = document.createElement("div");
        div.className = "card text-center ";
        div.innerHTML = `  <h5 class="card-title">Books-Id : ${i.book_id}</h5>
         <div class="card-body">
           <h5 class="card-title1">Book-Name : ${i.book_name}</h5>
           <h5 class="card-title1">Chapter : ${i.chapter}</h5>
         </div>`;
  
        result.appendChild(div)
    });
    
}