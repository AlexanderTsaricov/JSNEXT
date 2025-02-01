const cooks = new Map([
    ["pizza", "Victor"],
    ["sushi", "Olga"],
    ["deserts", "Dmitriy"],
]);
const dishes = new Map([
    ['pizza "margarita"', "Victor"],
    ['pizza "peperony"', "Victor"],
    ['sushi "filadelfia"', "Olga"],
    ['sushu "kalifornia"', "Olga"],
    ["tiramisu", "Dmitriy"],
    ["cheescacke", "Dmitry"],
]);

const orders = new Map([
    ["Aleksi", ['pizza "peperony"', "tiramisu"]],
    ["Maria", ['sushi "kalifornia"', 'pizza "margarita"']],
    ["Irina", ["cheescacke"]],
]);

function addCooks(name, specializaion) {
    cooks.set(specializaion, name);
}
function addDishes(dish) {
    const temp = dish.split(" ");
    dishes.set(dish, cooks.get(temp[0]));
}

function setOrder(order, client) {
    order.forEach((element) => {
        if (!dishes.has(element)) {
            console.log(`Блюда ${element} в меню нет`);
            order = order.filter((dishOrder) => dishOrder !== element);
        }
    });
    if (order.length > 0) {
        orders.set(client, order);
    }
}
