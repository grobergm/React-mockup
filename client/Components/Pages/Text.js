import React from 'react';
import cupcake from './Photos/cupcake.jpg';
import vegi from './Photos/vegi.jpg';
import meat from './Photos/meat.jpg';
import table from './Photos/table.jpg';

const Text=(props)=>{
if (props.tab==="Appetizer"){
return (
<div className="view">
	<img className="img-fluid" src={vegi} alt="Appetizer"/>
	 <div className="content vegi">
		<h1>Appetizer</h1>
			<p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>
			<p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.</p>
			<p>Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.</p>
	 </div>
</div>
)};
if (props.tab==="Main Course"){
return (
<div className="view">
	<img className="img-fluid" src={meat}/>
	 <div className="content meat">
	 	<h1>Main Course</h1>
	 		<p>Spicy jalapeno bacon burgdoggen flank turkey capicola frankfurter turducken. Shoulder alcatra shank leberkas hamburger shankle, ground round cupim turkey capicola pork belly. T-bone alcatra hamburger bacon turducken pancetta short ribs swine ham. Beef ribs leberkas chuck turkey, cow doner hamburger. Spare ribs sausage chuck venison rump prosciutto tongue chicken tri-tip pork belly short ribs boudin jowl turkey. Beef ribs filet mignon spare ribs porchetta.</p>
	 		<p>Rump pork chop spare ribs bresaola. Sausage salami alcatra, beef pork chop chuck andouille sirloin cupim meatloaf tail swine. Turkey jowl tri-tip jerky. Meatball swine pork chop cupim shankle cow.</p>
	 		<p>Tenderloin sirloin beef, pancetta doner meatball cupim pork loin tongue jerky flank corned beef boudin prosciutto ribeye. Porchetta ham frankfurter ball tip hamburger capicola tail. Jowl shankle filet mignon leberkas beef ribs buffalo picanha pancetta frankfurter. Filet mignon tri-tip picanha hamburger pork chop meatball turkey kevin rump swine pork loin tail. Ball tip corned beef frankfurter shank. Flank venison ribeye shankle boudin frankfurter capicola tail meatloaf doner andouille leberkas chuck sausage. Frankfurter shank jerky bacon turkey chuck meatball cow ground round doner brisket kevin pork chop shoulder.</p>
	 </div>
</div>
)};
if (props.tab==="Dessert"){
return (
<div className="view">
	<img className="img-fluid" src={cupcake}/>
	 <div className="content cupcake">
		<h1>Dessert</h1>
		<p>I love fruitcake I love ice cream. Candy cheesecake toffee gummies marshmallow. Cake sugar plum sweet roll. Jujubes I love powder chocolate cake tiramisu I love pastry. Gummies bear claw lemon drops jelly beans tiramisu brownie tootsie roll sugar plum. Candy canes chocolate bar toffee soufflé sweet. Lemon drops gummies brownie I love pastry cookie tiramisu tootsie roll bonbon.</p>
		<p>Muffin gingerbread brownie halvah apple pie I love sweet. I love gummies toffee tart liquorice lemon drops pastry lollipop. Marzipan gummies sweet roll. Cookie oat cake I love tootsie roll jelly beans. Sweet I love jelly beans I love oat cake I love donut candy canes biscuit. Pudding tiramisu pie sesame snaps. Marshmallow caramels marzipan powder gummi bears. Pie carrot cake cookie jelly danish chupa chups pie lemon drops sweet. Tootsie roll topping topping. Bonbon powder sweet sweet roll tootsie roll lollipop icing jelly beans sweet.</p>
		<p>Carrot cake macaroon lemon drops sweet roll icing cupcake soufflé chocolate bar. Topping bonbon halvah icing chocolate cake croissant. Biscuit gummi bears lemon drops danish. Gingerbread pastry macaroon oat cake carrot cake cake. I love biscuit jelly. Jelly beans tiramisu liquorice cotton candy pudding. Chupa chups chocolate cake ice cream cake cupcake sesame snaps topping.</p>
	 </div>
</div>
)};
return(<div className="view">
	<img className="img-fluid" src={table}/>
	 <div className="content">
		<h1>Easily Digestible Content</h1>
	</div>
</div>)

}
export default Text;