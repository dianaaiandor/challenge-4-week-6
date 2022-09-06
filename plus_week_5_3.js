//2
/*function displayComments(response) {
  console.log(response.data);
}
let apiUrl = "https://jsonplaceholder.typicode.com/comments";
*/

//3
function displayComments(response) {
  console.log(response.data.email);
}
let apiUrl = "https://jsonplaceholder.typicode.com/comments/1";

axios.get(apiUrl).then(displayComments);

// перелічити усі

function displayUsers(response) {
  let h1 = document.querySelector("h1");
  response.data.forEach((user) => {
    console.log(user.username);
  });

  h1.innerHTML = `Hey ${response.data[0].username}`;
}

let apiUrlUsers = "https://jsonplaceholder.typicode.com/users";

axios.get(apiUrlUsers).then(displayUsers);
