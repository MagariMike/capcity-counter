let countEl = document.getElementById("count-el");
let saveEl= document.getElementById("save-el");
let count = 0; 

const increment = () => {
    count += 1;
    countEl.textContent = count;
}

const save = () => {

    let countStr = " " + count + " - ";
    saveEl.textContent += countStr
    countEl.textContent = 0;
    count = 0;
};

// Add the ability to be warned when you are approaching max cap and then when you have hit it. 