document.addEventListener("DOMContentLoaded", function () {
    const userProfilesContainer = document.getElementById('user-profiles');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-profile-card';

                // Generate a placeholder avatar
                const avatarUrl = `https://robohash.org/${user.username}.png?size=150x150`;

                userCard.innerHTML = `
                    <img src="${avatarUrl}" alt="${user.name}'s avatar">
                    <h2>${user.name}</h2>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;

                userProfilesContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            userProfilesContainer.innerHTML = '<p>Failed to load user profiles. Please try again later.</p>';
        });
});
