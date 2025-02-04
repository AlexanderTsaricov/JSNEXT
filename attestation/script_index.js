const inputs = document.querySelectorAll(".addReviewBox_input");
const button = document.querySelector(".addReviewBox_button");
let data = JSON.parse(localStorage.getItem("reviews"));

function hasProduct(name) {
    let result = false;
    if (data != undefined) {
        data.forEach((element) => {
            if (element.product == name) {
                result = true;
            }
        });
    }
    return result;
}

function save(inputData) {
    let id = 0;
    if (data == undefined) {
        data = [];
    } else {
        const id = data[data.length];
    }
    inputData.id = id;
    if (hasProduct(inputData.product)) {
        data.forEach((element) => {
            if (inputData.product == element.product) {
                element.reviews.push(inputData.review);
            }
        });
    } else {
        data.push({ product: inputData.product, reviews: [inputData.review], id: inputData.id });
    }
    const jsonData = JSON.stringify(data);
    localStorage.setItem("reviews", jsonData);
}

button.addEventListener("click", (e) => {
    const inputData = {};
    inputs.forEach((element) => {
        const parent = element.parentElement;
        const errorEl = parent.querySelector(".addReviewBox_error");
        if (element.value == "") {
            errorEl.classList.remove("invisible");
        } else {
            errorEl.classList.add("invisible");
            inputData[element.name] = element.value;
        }
    });
    if (Object.keys(inputData).length > 1) {
        save(inputData);
    }
});
