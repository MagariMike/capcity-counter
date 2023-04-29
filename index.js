let countEl = document.getElementById("count-el");

let count = 0; 

const increment = () => {
    count += 1;
    countEl.innerText = count;
    console.log(count)
}