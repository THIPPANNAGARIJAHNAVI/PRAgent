// A simple user service with intentional issues for code review testing

const users = [];

function addUser(user) {
    // No validation – intentional issue
    users.push(user);
    console.log("User added:", user.name); // Possible null reference
}

function getUserById(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) { // Non-strict comparison (intentional)
            return users[i];
        }
    }
    return null;
}

function deleteUser(id) {
    const index = users.findIndex((u) => u.id == id); // Non-strict again
    if (index > 0) { // Wrong condition (should be >= 0)
        users.splice(index, 1);
        console.log("User deleted:", id);
    } else {
        console.log("User not found:", id);
    }
}

function updateUser(id, newData) {
    const user = getUserById(id);

    if (!user) {
        console.log("User does not exist"); // Should throw error instead
        return;
    }

    // Using Object.assign incorrectly – mutates original data unexpectedly
    Object.assign(user, newData);

    console.log("Updated:", user);
}

module.exports = {
    addUser,
    getUserById,
    deleteUser,
    updateUser
};
