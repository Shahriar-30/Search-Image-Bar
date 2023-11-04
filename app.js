let imgAll = document.querySelectorAll(".shop_all img");
let input = document.querySelector(".search_input");
let submit = document.querySelector(".search");
let error = document.querySelector(".search_bar");

submit.addEventListener("click", search); // Call the search function when the button is clicked

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        search();
    }
});

function search() {
    let value = input.value;
    let imgLen = imgAll.length;
    // Remove any existing error message
    const existingError = error.querySelector('.error-message');
    if (existingError) {
        error.removeChild(existingError);
    }

    if (value === '') {
        let text = "*input can't be null";
        let p = document.createElement('p');
        p.textContent = text;
        p.className = 'error-message'; // Add a class for easy removal
        error.appendChild(p);
    } else {
        for (let i = 0; i < imgLen; i++) {
            let ele = imgAll[i].getAttribute("data-keyword");
            if (value === ele) {
                imgAll[i].style.display = "block";
            } else {
                imgAll[i].style.display = "none";
            }
        }
    }
    
}
