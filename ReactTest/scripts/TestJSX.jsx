///<reference path="_references.js"/>


function FormattedDate(props) {
	return
<h2>Time {props.date.toLocaleTimeString()}</h2>;
}


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(() =>this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({ date: new Date() });
	}

	render() {
		return (
			<div>
				<h1>Hello</h1>
				<FormattedDate date={this.state.date} />
			</div>
		);
	}
}

//ReactDOM.render(
//	<Clock/>,
//	document.getElementById("root")
//);


class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
		);
	}
}

//ReactDOM.render(
//	<Toggle/>,
//	document.getElementById("root")
//);


function UserGreeting(props) {
	return
<h1>Welcome Back!</h1>;
}

function GuestGreeting(props) {
	return
<h1>Please sign in.</h1>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn) {
		return
<UserGreeting />;
	}
	return <GuestGreeting />
}

//ReactDOM.render(
//	<Greeting isLoggedIn={false}/>,
//	document.getElementById("root")
//);
// above is testing code from ReactJS.org/below is for class work.
//--------------------------------------------------------------------------------------------------------------------------------------------

//Lesson 1 Hands-On
// HANDS ON PART ONE SAME RESULT 2 WAYS

//const tdH = {hd1:"FirstName", hd2:"Lastname"};
//const td1 = {firstN:"Janet", lastN:"James"};
//const td2 = {firstN:"John", lastN:"Jamesson"};

//const tblR1 = React.createElement("tr", null, React.createElement("th", null, tdH.hd1), React.createElement("th", null, tdH.hd2));
//const tblR2 = React.createElement("tr", null, React.createElement("td", null, td1.firstN), React.createElement("td", null, td1.lastN));
//const tblR3 = React.createElement("tr", null, React.createElement("td", null, td2.firstN), React.createElement("td", null, td2.lastN));
//ReactDOM.render(React.createElement("table", null, tblR1, tblR2, tblR3), document.getElementById("root"));

//ReactDOM.render(
//	React.createElement("table", null,
//		React.createElement("tr", null,
//			React.createElement("th", null, "Firstname"),
//			React.createElement("th", null, "Lastname")
//		),
//		React.createElement("tr", null,
//			React.createElement("td", null, "Janet"),
//			React.createElement("td", null, "James")
//		),
//		React.createElement("tr", null,
//			React.createElement("td", null, "John"),
//			React.createElement("td", null, "Jameson")
//		)
//	), document.getElementById("root")
//);

// HANDS ON PART TWO
//const hasCreds = (user) => { return user.name.length > 0 && user.password.length > 0 };

//const filterInvalidUsers = (users) => {
//	let validUsers = [];
//	for(let user of users) {
//		if(hasCreds(user)) { validUsers.push(user); }
//	}
//	return validUsers;
//}

//const userFormatedString = (user) => {
//	return `name: ${user.name} \nrole: ${user.role}`;
//}

//const users = [
//	{
//		name: 'Kirk Douglass',
//		password: 'iamspartacus',
//		role: 'revolutionary'
//	},
//	{
//		name: 'Charlie Chaplain',
//		password: '',
//		role: 'tramp'
//	},
//	{
//		name: 'Harrison Ford',
//		password: 'AnythingButSnakes',
//		role: 'archaeologist'
//	}
//];

//const validUsers = filterInvalidUsers(users);

//for(let valid of validUsers) {
//	console.log(userFormatedString(valid));
//}


//----------------------------------------------------------------------------------------

// Lesson 2 Hands-On
// HANDS-ON PART ONE

//const StringH1 = props => (<h1>Tips for breaking down a new concept</h1>);
//const StringL1 = props => (<li>Many concepts can't be tackled all at once</li>);
//const StringULS1 = props => (
//	<ul>
//		<li>Work with the parts you can understand</li>
//		<li>Take breaks to stay fresh</li>
//	</ul>
//);
//const StringL2 = props => (<li>Develop a plan to learn the parts you don't know</li>);
//const StringULS2 = props => (
//	<ul>
//		<li>Start with the parts that you know</li>
//		<li>Build new concepts on top</li>
//	</ul>	
//);

//const TopUL = props => (
//	<div>
//		<ul>
//			<StringL1/>
//			<StringULS1/>
//			<StringL2/>
//			<StringULS2/>
//		</ul>
//	</div>
//);

//const topDIV =(
//	<div>
//		<StringH1/>
//		<TopUL/>
//	</div>	
//);

//ReactDOM.render(
//	topDIV, document.getElementById("root")	
//);

//HANDS-ON PART 2


//const libraries = [
//  {
//	title: 'React',
//	description: 'A JavaScript library for building user interfaces'
//  },
//  {
//	title: 'Redux',
//	description: 'A predictable state container for JavaScript apps'
//  },
//  {
//	title: 'Reselect',
//	description: 'A simple selector library for Redux'
//  }
//];

//const MakeDescriptions = libraries => (
//	<div>
//		{listItems}
//	</div>
//);

//const listItems = libraries.map(lib => (<p>{lib.title}: {lib.description}</p>));

//const output = MakeDescriptions(libraries);

//ReactDOM.render(output, document.getElementById('root'));

//HANDS-ON PART THREE

//alert("Code Stop");

//const makeBody = props => (
//	<div>
//		<p>Author: {props.author}</p>
//		<p>{props.year}</p>
//	</div>
//);

//const makeHeader = props =>(
//	<h1 id={props.id}>{props.text}</h1>
//);

//const makeSong = props =>(<div></div>);

//const header = makeHeader({ id: 'title', text: "Major General's Song" });
//const author = makeBody({ author: 'Gilbert and Sullivan', year: 1879 });
////const majorGeneral = makeSong(header, lyrics);

//const output = (
//	<div>
//		<div>
//			{header}
//			<div>
//				{author}
//			</div>
//		</div>
//	</div>
//);

//ReactDOM.render(output, document.getElementById('root'));

//-----------------------------------------------------------------------------------------------

//Lesson 3 Hands-On

//HANDS-ON PART ONE

//alert("Stop Code");

//class TodoList extends React.Component{
//	render(){
//		return(
//			<div>
//				<h1>{this.props.title}</h1>
//				<ul>
//					<ListMap items={this.props.items}/>
//				</ul>
//			</div>
//		);	
//	}
//}

//const ListMap = props => {
//	return props.items.map((itm) => (<li>{itm}</li>));
//}

//TodoList.propTypes = {
//	title: PropTypes.string,
//	items: PropTypes.array
//};

//const rendToDo = <TodoList title="Student todo" items={["Sign up for code review", "Finish TodoList component", "Get lots of sleep"]}/>;

//ReactDOM.render(
//	rendToDo,
//	document.getElementById('root')
//);

//---------------------------------------------------
// Lesson 4 HandsOn

//HANDS-ON PART ONE

//alert("Stop Code");
//class List extends React.Component {

//	shouldComponentUpdate(nextProps, nextState) {
//		if(this.props.items !== nextProps.items) { return true; }
//		return false;
//	}

//	render() {
//		console.log("List's render function"); // this should not happen if the exact same props are provided a second time
//		const list = this.props.items.map(item => (<li key={item}>{item}</li>));

//		return (
//			<ul>
//				{list}
//			</ul>
//		);
//	}
//}

//const list1Items = ['Eggs', 'Bread', 'Artisinal cheese'];
//const list2Items = ['Trains', 'Planes', 'Automobiles'];

//const render = (items) => {
//	console.log("outer render function");
//	ReactDOM.render(
//		<List items={items} />,
//		document.getElementById('root')
//	);
//}

//document.addEventListener('keydown', event => {
//	// this checks if the 1 key is pressed
//	if(event.key === '1') { 
//		render(list1Items);
//	}
//  // this checks if the 2 key is pressed
//	else if (event.key === '2') {
//		render(list2Items);
//	}
//	}
//);

//render(list1Items);
//----------------------------------
//Lesson 5 Project
//Filter
//alert("Code Stop");
//const arr = [
//	{ "name": "chevy", "count": 2 },
//	{ "name": "ford", "count": 5 },
//	{ "name": "acura", "count": 3 },
//	{ "name": "honda", "count": 16 },
//];

//const newArr = arr.filter((make) => make.name.includes('ford'));

//console.log("Filter results:", newArr);

//__________________________________________
// Combine Arrays
//alert("Stop Code");
//const current = ['Bill', 'Joe', 'Emily', 'Andrea']
//const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];
//const arrAll = [...current, ...newStudents];
//console.log(...arrAll);

//---------------------------------------------------

//React final Update display of repos.

//See React Docs "State and Lifecycle" and also "Lifting State Up"
//Download and install devTools from => https://github.com/facebook/react-devtools

this.setState((prevState, props) =>({repos: props.repos}));

JSON.stringify(props.repos, ['name']);