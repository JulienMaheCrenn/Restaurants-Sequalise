const {
    connection,
    Restaurant,
    Menu,
    MenuItem
} = require("./sequelize-connect.js");

async function main() {
    try {
        await start();
        const objects = await createRows();
        await runQueries(objects);
        await updateRows(objects);
        await deleteRows(objects);
    } catch (e) {
        throw new Error(e.message);
    };
};

async function start() {
    await connection.sync({
        logging: false,
        force: true,
    });
};

main().catch((e) => console.log(`Caught error: ${e}`));

async function createRows() {
    const juliensPizzeria = await Restaurant.create({
        name: "Julien's Pizzeria",
        imagelink: "http://julienspizzeria/image.jpg",
    });

    const breakfastMenu = await Menu.create({
        title: "Breakfast menu",
    });

    const chocolatePizza = await MenuItem.create({
        name: "Chocolate Pizza",
        price: 5.49
    });

    await juliensPizzeria.addMenu(breakfastMenu);
    await breakfastMenu.addMenuItem(chocolatePizza);

    return [juliensPizzeria];
};

async function runQueries(objects) {
    [juliensPizzeria] = objects;

    const restaurants = await Restaurant.findAll({});
    const menus = await juliensPizzeria.getMenus();

    console.log(`*** Found all restos: ${JSON.stringify(restaurants)}`);
    console.log(`*** Found all menus: ${JSON.stringify(menus)}`);
};

async function updateRows(objects) {
    [juliensPizzeria] = objects;

    await juliensPizzeria.update({ name: "Julien's Burger Place"}, {
        where: {
            name: "Julien's Pizzeria"
        }
    });
};

async function deleteRows(objects) {
    [juliensPizzeria] = objects;

    const menu = await Restaurant.findAll

    await chocolatePizza.destroy({
        where: {
            name: "Chocolate Pizza"
        }
    });
};