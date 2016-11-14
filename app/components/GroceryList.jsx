var React=require('react');
var GroceryItem=require('./GroceryItem.jsx');
var GroceryListItemAdd=require('./GroceryListItemAdd.jsx');

module.exports=React.createClass({
	render:function(){
	return (<div>
<h1>Grocery Listify</h1>
{
	this.props.items.map(function(item,index){
		return(<div>
			
			<GroceryItem item={item} key={'item '+index}/>
				</div>)
	})
}
<GroceryListItemAdd />
	</div>)
	}
})