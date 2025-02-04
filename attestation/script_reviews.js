const reviewsBox = document.querySelector(".reviewsBox");

function load() {
    let data = JSON.parse(localStorage.getItem("reviews"));

    if (data == undefined) {
        const nonReviews = document.createElement("p");
        nonReviews.textContent = "There are currently no reviews";
        nonReviews.classList.add("reviewsBox_nonReviews");
        reviewsBox.appendChild(nonReviews);
    } else {
        data.forEach((product) => {
            const productName = product.product;
            const reviews = product.reviews;

            const productBox = document.createElement("div");
            productBox.classList.add("productBox");

            const productHeaderText = document.createElement("h2");
            productHeaderText.textContent = productName;
            productHeaderText.classList.add("productBox_header");
            productBox.appendChild(productHeaderText);

            const productReviewBox = document.createElement("div");
            productReviewBox.classList.add("productBox_productReviewBox");
            productBox.appendChild(productReviewBox);

            reviews.forEach((review) => {
                const reviewText = document.createElement("p");
                reviewText.textContent = review;
                reviewText.classList.add("reviewBox_reviewText");
                productReviewBox.appendChild(reviewText);

                const reviewTextButton = document.createElement("button");
                reviewTextButton.classList.add("reviewBox_button");
                reviewTextButton.id = review;
                reviewTextButton.textContent = "delete";
                reviewText.appendChild(reviewTextButton);

                reviewTextButton.addEventListener("click", (e) => {
                    if (product.reviews.length > 1) {
                        product.reviews = product.reviews.filter((item) => item !== review);
                        localStorage.setItem("reviews", JSON.stringify(data));
                        reviewsBox.innerHTML = "";
                        load();
                    } else {
                        data = data.filter((item) => item.product !== productName);
                        localStorage.setItem("reviews", JSON.stringify(data));
                        reviewsBox.innerHTML = "";
                        load();
                    }
                });
            });
            productReviewBox.classList.add("displayNone");
            reviewsBox.appendChild(productBox);
        });
    }
}

load();

reviewsBox.addEventListener("click", function (e) {
    if (e.target.classList.contains("productBox_header")) {
        const targetElement = e.target;
        const parent = targetElement.parentElement;
        const reviews = parent.querySelector(".productBox_productReviewBox");
        if (reviews.classList.contains("displayNone")) {
            reviews.classList.remove("displayNone");
        } else {
            reviews.classList.add("displayNone");
        }
    }
});
