const readline = require("readline-sync");

program();

function display_pizzas(list_of_pizza) {
    let id = 1;
    for (const flavour of list_of_pizza) {
        console.log(`#${id} = ${flavour}.`);
        ++id;
    }
}

function add_pizza(list_of_pizza) {
    let flavour = readline.question("give a name to your flavour: ");

    list_of_pizza.push(flavour);
}

function remove_pizza(list_of_pizza) {

    const choice = Number(readline.question("Enter your action !!! : ")) - 1;
    let new_list = [];

    //0       1        2       3
    //[jambon, fromage, ananas, salami]


    for(let i = 0; i < list_of_pizza.length; ++i)
    {
        if(i !== choice)
        {
            new_list.push(list_of_pizza[i]);
        }
    }

    return new_list;
}

function program() {
    const menu =
        "Hello welcom to pizza :\n Please choose what to do !!!\n 1 : List\n 2 : Add\n 3 : Remove\n 4 : Exit\n\n";

    let pizza_list = [];

    let go_on = true;

    while (go_on === true) {
        console.log(menu);

        const choice = Number(readline.question(`What do you wanna do ? : `));

        if (choice === 1) {
            display_pizzas(pizza_list);
        }
        else if (choice === 2) {
            add_pizza(pizza_list);
        }
        else if (choice === 3) {
            pizza_list = remove_pizza(pizza_list);
        }
        else if (choice === 4) {
            go_on = false;
        }
    }

}