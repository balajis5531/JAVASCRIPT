const users = ['Alice', 'Bob', 'Charlie', 'David'];
const index = 2; // remove element at index 2 (which is 'Charlie')

const beforeIndex = users.slice(0, index); // ['Alice', 'Bob']
const afterIndex = users.slice(index + 1); // ['David']
const newUsers = [...beforeIndex, ...afterIndex]; // ['Alice', 'Bob', 'David']

console.log(newUsers);



// edite function;



deleteButton.addEventListener("click", e => {
    let index = users.findIndex(obj => obj.email === profile_check);

    if (index !== -1) {
        users = [...users.slice(0, index), ...users.slice(index, +1)];

        localStorage.setItem("users", JSON.stringify(users));

    }


});