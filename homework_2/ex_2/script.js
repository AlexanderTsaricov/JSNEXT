const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const select = document.querySelector(".reviewBox_select");
const input = document.querySelector(".reviewBox_input");
const submitButton = document.querySelector(".rewiewBox_submit");

initialData.forEach((element) => {
    const optionTag = document.createElement("option");
    optionTag.value = element.product;
    optionTag.textContent = element.product;
    select.appendChild(optionTag);
});

function checkLength(reviewText) {
    const max = 500;
    const min = 50;
    if (reviewText.length < max && reviewText.length > min) {
        return true;
    } else {
        return false;
    }
}

function addReview(reviewText, productReview) {
    if (!checkLength(reviewText)) {
        throw new Error("Length review text must be more than 50 and less than 500 sumbols");
    }
    initialData.forEach((product) => {
        if (product.product == productReview) {
            let lastId = parseInt(product.reviews[product.reviews.length - 1].id);
            product.reviews.push({ id: `${lastId + 1}`, text: reviewText });
        }
    });
}

submitButton.addEventListener("click", function (e) {
    const reviewProduct = select.value;
    const reviewText = input.value;
    addReview(reviewText, reviewProduct);
});
