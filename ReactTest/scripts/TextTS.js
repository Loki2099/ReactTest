//alert("reached script");
//const hasCreds = (user) => { return user.name.length > 0 && user.password.length > 0 };

//const filterInvalidUsers = (users) => {
//	let validUsers = [];
//	for(let user of users) {
//		if(hasCreds(user)) { validUsers.push(user); }
//	}
//	return validUsers;
//}

//const userFormatedString = (user) => {
//	return "name: ${user.name} \nrole: ${user.role}";
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

//const log = () => {
//	for(let valid of validUsers) {
//		console.log(userFormatedString(valid));
//	}
//}

alert("Code Stop");
const arr = [
	{ "name": "chevy", "count": 2 },
	{ "name": "ford", "count": 5 },
	{ "name": "acura", "count": 3 },
	{ "name": "honda", "count": 16 },
];

const newArr = [];

function filterArr(query) {
	arr.filter((make) =>
		newArr.push(make.name.includes('ford'))
	)
}

//for(let i = 0, l = arr.length; i < l; i++) {
//	if(arr[i].name === "ford") {
//		newArr.push(arr[i]);
//	}
//}

console.log("Filter results:", newArr);
//-------------------------------------------
// Combine Arrays
const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

function addNewStudent(array, newArray) {
	for(let i = 0; i < newArray.length; i++) {
		array.push(newArray[i]);
	}
}

addNewStudent(arr, newStudents);