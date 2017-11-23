alert("reached script");
var hasCreds = function (user) { return user.name.length > 0 && user.password.length > 0; };
var filterInvalidUsers = function (users) {
    var validUsers = [];
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (hasCreds(user)) {
            validUsers.push(user);
        }
    }
    return validUsers;
};
var userFormatedString = function (user) {
    return "name: ${user.name} \nrole: ${user.role}";
};
var users = [
    {
        name: 'Kirk Douglass',
        password: 'iamspartacus',
        role: 'revolutionary'
    },
    {
        name: 'Charlie Chaplain',
        password: '',
        role: 'tramp'
    },
    {
        name: 'Harrison Ford',
        password: 'AnythingButSnakes',
        role: 'archaeologist'
    }
];
var validUsers = filterInvalidUsers(users);
var log = function () {
    for (var _i = 0, validUsers_1 = validUsers; _i < validUsers_1.length; _i++) {
        var valid = validUsers_1[_i];
        console.log(userFormatedString(valid));
    }
};
//# sourceMappingURL=TestTS.js.map