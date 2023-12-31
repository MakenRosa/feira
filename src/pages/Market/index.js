import {
	Container,
	Header,
	List,
} from './styles';

import market from './market.json';
import Product from 'components/Product';
import NavBar from './NavBar';
import { UserContext } from 'common/context/User';
import { useContext } from 'react';

function Market() {
	const { name, balance } = useContext(UserContext);
	return (
		<Container>
			<NavBar />

			<Header>
				<div>
					<h2>Hi, {name}!</h2>
					<h3>Balance: ${Number(balance).toFixed(2)}</h3>  
				</div>
        
				<p>Find the best organic products!</p>
			</Header>

			<List>
				<h2>Products:</h2>
        
				{market.map(product => (
					<Product 
						{...product}
						key={product.id}  
					/>
				))}
			</List>
		</Container>
	);
}

export default Market;