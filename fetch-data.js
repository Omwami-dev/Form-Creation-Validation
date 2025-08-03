//  Define an asynchronous function
async function fetchUserData() {
    // API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container for displaying data
    const dataContainer = document.getElementById('api-data');

    try {
        //  Fetch user data from API
        const response = await fetch(apiUrl);
        const users = await response.json();

        //  Clear loading message
        dataContainer.innerHTML = '';

        // Create and append list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle fetch errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Call fetchUserData when DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
