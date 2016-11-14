var dispatcher=require("./../dispatcher.js");


function GroceryItemStore() {
	var items=[{
	name:'Smoked Chicken'
},{
	name:'Chicken Burger Peti',
	purchased:true
},{
	name:'Beef Sausage',
	purchased:true
},{
	name:'Chicken roll',
},{
	name:'drump sticks'
}];


	var listeners=[];
function getItems(){
	return items;
}
function onChange(listener){
	listeners.push(listener);
}

function triggerListeners(){
listeners.forEach(function(listener){
	listener(items);
})
}
function addGroceryItem(payload){
	items.push(payload);
	triggerListeners();
}
dispatcher.register(function(event){
	var split=event.type.split(':');
	if(split[0]==='Grocery Item'){
		switch (split[1]) {
			case 'add':
				addGroceryItem(event.payload)
				break;
		
		}
	}
})



return {
	onChange:onChange,
	getItems:getItems
}


}
module.exports=GroceryItemStore();