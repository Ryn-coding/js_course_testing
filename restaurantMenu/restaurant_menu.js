/**
 * Restaurant Menu Display
 * This application displays different menu categories (breakfast, main course, desserts)
 * using different array iteration methods: map, forEach, and for loop
 */

// Breakfast menu items with prices
const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];

// Main course menu items with prices
const mainCourseMenu = ['Steak - $28.99', 'Pasta - $18.50', 'Burger - $15.99', 'Salmon - $26.99'];

// Dessert menu items with prices
const dessertMenu = ['Cake - $8.99', 'Ice Cream - $6.50', 'Pudding - $5.99', 'Fruit Salad - $7.99'];


// Display breakfast menu using map method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;


// Display main course menu using forEach method
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


// Display dessert menu using traditional for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
