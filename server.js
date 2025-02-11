const {createUser,getUsers,updateUser,deleteUser} = require('./userController');

const express = require('express');

const run = async () => {
    await createUser();
    await getUsers();
    await updateUser();
    await deleteUser();
};

run();