const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const content = document.querySelector("#content");
let from=0;
let to=10;

const data=[];

async function apiCall(){
    const response =await fetch(`https://api.unsplash.com/search/photos?query=nature&client_id=Wt7nId4MXJTdw5Sye8qYzbK2wxVryWqAJKzDxy1Xl1k&per_page=16`);
    const result = await response.json();
    // console.log(result.results); 
    // data.push(result.results);
    result.results.forEach((e)=>{
        data.push(e.urls.thumb);
    })
    // display();
}
apiCall();

window.addEventListener("load",()=>{
    apiCall();
    display(data.slice(from,to));
})

function display(data){
//    console.log(data)
content.innerHTML=" ";
   const imgDiv = document.createElement("div");
    data.forEach((e)=>{
     const img = document.createElement("img");
     img.src= e;
     imgDiv.append(img)
     content.append(imgDiv)
    });
}


prev.addEventListener("click",()=>{
if(from ==0){
    return;
}
to=from;
from-=10;
display(data.slice(from,to))
})


next.addEventListener("click",()=>{
    if(to ==40){
      return;
    }
    from=to;
    to+=10;
    display(data.slice(from,to))
})




