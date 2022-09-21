const getUsers = () => {

    const response = fetch('http://localhost:3000/api/users')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data =>
            data.querySelectorAll('user').forEach(user => {
                const liId = document.createElement('li');
                const liEmail = document.createElement('li');
                const liName = document.createElement('li');
                const br = document.createElement('br');


                liId.innerHTML = `Id: ${user.querySelector('id').innerHTML}`;
                liEmail.innerHTML = `Email: ${user.querySelector('email').innerHTML}`;
                liName.innerHTML = `Name: ${user.querySelector('name').innerHTML}`;
                document.querySelector('#users').appendChild(liId);
                document.querySelector('#users').appendChild(liEmail);
                document.querySelector('#users').appendChild(liName);
                document.querySelector('#users').appendChild(br);

                
            })
        );




}
    

getUsers()









