// TASK 1
class Movie {
    constructor(name, category, startShow) {
        this.name = name;
        this.category = category;
        this.startShow = startShow;
    }

    watchMovie() {
        return `I watch the movie ${this.name}!`
    }
}

const movie1 = new Movie("Titanic", "drama", 1997);
const movie2 = new Movie("Troya", "historical", 2004);


// TASK 2
class Student {

    static studentBuilder() {
        return new Student("Ihor Kohut", "qc");
    }

    constructor(fullName, direction) {
        this._fullName = fullName;
        this._direction = direction;
    }

    showFullName() {
        return this._fullName;
    }

    nameIncludes(data) {
        return this.showFullName().includes(data, 0);
    }

    get direction() {
        return this._direction;
    }

    set direction(direction) {
        this._direction = direction;
    }

}

const stud1 = new Student("Ivan Petrenko", "web");
const stud2 = new Student("Sergiy Koval", "python");
const stud3 = Student.studentBuilder();

// console.log(stud1, stud2, stud3);
// console.log(stud2.direction);
// console.log(stud1.nameIncludes('Ihor'));
// console.log(stud1.nameIncludes('Ivan'));
// console.log(stud1.nameIncludes('Petrenko'));


// TASK 3
class Distributor {
    constructor() {
        this.products = {};
    }

    addProduct(id, name) {
        this.products[id] = name;
    }

    removeProduct(id) {
        delete this.products[id]
    }
}

const localDistributor = new Distributor();

class MyProduct {
    constructor(name) {
        this.name = name;
        this.id = Symbol(this.name);
    }

    distribute(distributor) {
        distributor.addProduct(this.id, this.name);
    }
}

// const product1 = new MyProduct('butter');
// product1.distribute(localDistributor)
// console.log(localDistributor.products);

// new MyProduct('bread').distribute(localDistributor);
// new MyProduct('bread').distribute(localDistributor);
// console.log(localDistributor.products);

// localDistributor.removeProduct(product1.id)
// console.log(localDistributor.products);


// TASK 4
function getMin(arr) {
    return Math.min.apply(Math, arr);
}
// console.log(getMin([1, 2, -4, 4]));


// TASK 5
const product = function () {
    return [].reduce.call(arguments, function (res, elem) {
        return res * elem;
    }, this.product);
};

const contextObj = {
    product: 10,
};

const getProduct = product.bind(contextObj, 2, 3);

// console.log(getProduct(4, 5));


// TASK 6
class Plane {

    constructor(model, fuelSupply, fuelConsumption) {
        this.model = model;
        this.fuelSupply = fuelSupply;
        this.fuelConsumption = fuelConsumption;
    }

    calcFlightRange() {
        return this.fuelSupply / this.fuelConsumption * 100;
    }

    static sortFlightRange(planesArray) {
        const res = planesArray.sort((a, b) => {
            return a.calcFlightRange() - b.calcFlightRange();
        });
        res.forEach((elem) => {
            console.log(`${elem.model}: ${elem.calcFlightRange()}`);
        });
    }
}

class TransportPlane extends Plane {

    constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
        super(model, fuelSupply, fuelConsumption);
        this.cargo = cargo;
        this.addTank = addTank;
    }

    calcFlightRange() {
        return (this.fuelSupply + this.addTank) / this.fuelConsumption * 100;
    }
}

class PassengerPlane extends Plane {

    constructor(model, fuelSupply, fuelConsumption, pasangers, refueling) {
        super(model, fuelSupply, fuelConsumption);
        this.pasangers = pasangers;
        this.refueling = refueling;
    }

    calcFlightRange() {
        return (this.fuelSupply + this.refueling) / this.fuelConsumption * 100;
    }
}

class WarPlane extends Plane {

    constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
        super(model, fuelSupply, fuelConsumption);
        this.missiles = missiles;
        this.aerodynamicsKoef = aerodynamicsKoef;
    }

    calcFlightRange() {
        return (this.fuelSupply * this.aerodynamicsKoef) / this.fuelConsumption * 100;
    }
}

// console.log("Unsorted range of planes:");
// const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);
// console.log("An-225 Mriya: ", plane1.calcFlightRange());
// const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);
// console.log("Boeing-747:", plane2.calcFlightRange());
// const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);
// console.log("F-22 Raptor:", plane3.calcFlightRange());

// console.log("Sorted range of planes:");
// const planesArray = [plane1, plane2, plane3];
// Plane.sortFlightRange(planesArray);


// TASK 7*
const pizzaMenu = {
    SIZE_S: { param: "SIZE_S", price: 60, calorie: 300 },
    SIZE_M: { param: "SIZE_M", price: 90, calorie: 450 },
    SIZE_L: { param: "SIZE_L", price: 110, calorie: 600 },
    KIND_MEAT: { param: "KIND_MEAT", price: 55, calorie: 230 },
    KIND_FISH: { param: "KIND_FISH", price: 70, calorie: 150 },
    KIND_CHEESE: { param: "KIND_CHEESE", price: 50, calorie: 200 },
    KIND_VEGETARIAN: { param: "KIND_VEGETARIAN", price: 35, calorie: 50 },
    INGREDIENT_TOMATOES: { param: "INGREDIENT_TOMATOES", price: 15, calorie: 5 },
    INGREDIENT_PEPPER: { param: "INGREDIENT_PEPPER", price: 18, calorie: 5 },
    INGREDIENT_BACON: { param: "INGREDIENT_BACON", price: 25, calorie: 40 },
    INGREDIENT_OLIVES: { param: "INGREDIENT_OLIVES", price: 20, calorie: 0 }
};

class PizzaMaker {

    constructor(size, kind) {
        this.size = size;
        this.kind = kind;

        this.param = {
            size: size,
            kind: kind,
            ingredient: [],
        }
    }

    addIngredient(ingredient) {
        let currentIngredient = this.param.ingredient;
        let isPresent = 0;

        for (let i = 0; i < currentIngredient.length; i++) {
            if (currentIngredient[i].param === ingredient.param) {
                isPresent++;
            }
        }

        if (!isPresent) {
            currentIngredient.push(ingredient);
            console.log(`${ingredient.param} has been added`);
        } else {
            console.log("Such ingredient already exists!");
        }
    }

    deleteIngredient(ingredient) {
        let currentIngredient = this.param.ingredient;

        for (let i = 0; i < currentIngredient.length; i++) {
            if (currentIngredient[i].param === ingredient.param) {
                currentIngredient.splice(i, 1);
                console.log(`${ingredient.param} has been deleted`);
            }
        }
    }

    getIngredients() {
        return this.param.ingredient;
    }

    getSize() {
        return this.param.size;
    }

    getKind() {
        return this.param.kind;
    }

    calculatePrice() {
        let currentParams = this.params;
        let totalPrice;
        let basePrice = currentParams.size.price;
        let kindPrice = currentParams.kind.price;
        let ingredientPrice = 0;

        for (let i = 0; i < currentParams.length; i++) {
            ingredientPrice += currentParams.ingredient[i].price;
        }
        totalPrice = basePrice + kindPrice + ingredientPrice;

        return totalPrice;
    }

    calculateCalories() {
        let currentParams = this.params;
        let totalCalories;;
        let basePrice = currentParams.size.price;
        let kindPrice = currentParams.kind.price;
        let ingredientPrice = 0;

        for (let i = 0; i < currentParams.length; i++) {
            ingredientPrice += currentParams.ingredient[i].price;
        }
        totalCalories = basePrice + kindPrice + ingredientPrice;

        return totalCalories
    }
}

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("Size:", pizza.getSize());
console.log("Kind:", pizza.getKind());
console.log("calculatePrice:", pizza.calculatePrice());
// console.log("calculateCalories:", pizza.calculateCalories());
// console.log("getIngredients:", pizza.getIngredients());
// pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
// pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);
// console.log("getIngredients:", pizza.getIngredients());
// pizza.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);
// console.log("getIngredients:", pizza.getIngredients());
// console.log("calculatePrice:", pizza.calculatePrice());
// console.log("calculateCalories:", pizza.calculateCalories());
