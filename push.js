
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
e.preventDefault();

let happy = false;
if (form.elements.happy_hour.value == "yes"){
    happy = true;
}
const obj= {
    name:form.elements.name.value,
    price:Number(form.elements.price.value),
    happy_hour: happy,
};
console.log(obj);
post(obj);
}
)

const APIKEY="624fe7dc67937c128d7c95fc"
const endpoint ="https://pract-6590.restdb.io/rest/practise?max=2"

function post(payload){
    fetch(endpoint,{
        method: "POST",
        headers: {
            "x-apikey": APIKEY,
            "Content-Type":"application/json" 
        },
        body: JSON.stringify(payload),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}