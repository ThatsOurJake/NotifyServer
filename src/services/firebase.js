import path from 'path';

import * as admin from 'firebase-admin';

const creds = require(path.resolve('data', 'creds.json'));

const topics = {
  ALL_NOTIFICATIONS: 'ALL_NOTIFICATIONS'
};

export const registerToken = async ({ token }) => {
  console.log('Received token to register');

  try {
    const response = await admin.messaging().subscribeToTopic(token, topics.ALL_NOTIFICATIONS);
    console.log(`Success Register: `, response);
  } catch (error) {
    console.error(`Couldn't subscribe to topic: `, error);
  }
};

export const unregisterToken = async ({ token }) => {
  console.log('UnRegistering user');

  try {
    const response = await admin.messaging().unsubscribeFromTopic(token, topics.ALL_NOTIFICATIONS);
    console.log('Success: ', response);
  } catch(error) {
    console.error(`Couldn't unregister: `, error);
  }
};

export const sendMessage = async ({ title, body, colour }) => {
  try {
    const payload = {
      title,
      body,
    };

    if (colour) {
      payload.colour = colour;
    }

    const response = await admin.messaging()
      .sendToTopic(topics.ALL_NOTIFICATIONS, {
        data: payload
      });

    console.log(`Success sending: `, response);
  } catch(error) {
    console.error(`Error sending: `, error);
  }
};

export const initFirebase = () => {
  admin.initializeApp({
    credential: admin.credential.cert(creds),
    databaseURL: "https://notifications-api-645e0.firebaseio.com",
  });
};