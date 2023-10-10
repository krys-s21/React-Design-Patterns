import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';
import {
  RegularList
} from './RegularList';

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];
export const RegularListWrapper = () => {
  return (
	<>
		<RegularList 
			items={people}
			resourceName="person"
			itemComponent={SmallPersonListItem}
		/>
		<RegularList 
			items={people}
			resourceName="person"
			itemComponent={LargePersonListItem}
		/>
	</>
  );
}

export default RegularListWrapper;