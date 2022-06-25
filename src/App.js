// import React,{useState} from 'react'

// function App() {
//   const [cont , setCont ] = useState('')

//   return (
//     <div className="App">
//      <h1>{`mohamed${cont}`}</h1>
//      <button onClick={() => setCont('ahmed')}>Change Name</button>
//     </div>
//   );
// }

// export default App;

import {useState,useEffect}from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";




const App = () => {



	const [searchField, setSearchField] = useState("");
	const [ title,setTitle ] = useState()
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters ] = useState(monsters);
	// const [stringField, setStringField] = useState('');
useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
				.then((response) => response.json())
				.then((users) => setMonsters(users))
},[]);
useEffect(() => {
const newFilteredMonsters = monsters.filter((monster) => {
	return monster.name.toLocaleLowerCase().includes(searchField);
});
setFilteredMonsters(newFilteredMonsters)
},[monsters,searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};
	const onTitleChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setTitle(searchFieldString);
	};

	// const onStringChange = (event) => {
	// 	setStringField(event.target.value)
	// }

	return (
		<div className="App">
			<h1 className="app-title">{title}</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder="search"
				className="monsters-search-box"
			/>
			<SearchBox
				onChangeHandler={onTitleChange}
				placeholder="set title"
				className="monsters-search-box"
			/>

			<CardList monsters={filteredMonsters} />

			{/* {filteredMonsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})} */}
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: "",
// 		};
// 	}
// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(
// 					() => {
// 						return { monsters: users };
// 					},
// 					() => {
// 						// console.log(this.state);
// 					},
// 				),
// 			);
// 	}
// 	onSearchChange = (event) => {
// 		const searchField = event.target.value.toLocaleLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};
// 	render() {
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;
// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className="App">
//         <h1 className="app-title">Monsters</h1>
// 				<SearchBox
// 					onChangeHandler={onSearchChange}
// 					placeholder="search"
// 					className="monsters-search-box"
// 				/>
// 				<CardList monsters={filteredMonsters} />

// 				{/* {filteredMonsters.map((monster) => {
// 					return <h1 key={monster.id}>{monster.name}</h1>;
// 				})} */}
// 			</div>
// 		);
// 	}
// }
export default App;
