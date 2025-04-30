

// auth services for local resident


const { User } = require('../models/userModel');
const { Community } = require('../models/communityModel');
const {EventType} = require('../models/eventTypeModel');

const {RiskPool} = require('../models/riskPoolModel');
const {Policy} = require('../models/policyModel');


export const registerUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error registering user: ' + error.message);
    }
}

export app = require('express')();
const express = require('express');
const cors = require('cors  ');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    const userRoutes = require('./routes/userRoutes').default;
    app.use('/api/users', userRoutes);
    console.log('Registered: User routes');
} catch(error) {
  console.error('Error loading models:', error);
}

try {
    const communitiesRoutes = require('./routes/communityRoutes').default;
    app.use('api/routes/community', communitiesRoutes);
} catch (e){
    console.error('Error loading models:', e);
}