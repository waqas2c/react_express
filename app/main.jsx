var GroceryList=require('./components/GroceryList.jsx');
var ReactDom=require('react-dom');
var React=require('react');
var groceryItemStore=require('./stores/GroceryItemStore.jsx')

console.log('groceryItemStore...',groceryItemStore);

var initials=groceryItemStore.getItems();
groceryItemStore.onChange(function(items){
initials=items;
render();

})
function render () {
	ReactDom.render(<GroceryList items={initials}/>,app)
}
render();


