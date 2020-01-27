# Notify Server

<p align="center"><img src="https://render.bitstrips.com/v2/cpanel/8b93f01a-e0af-44ce-a2ac-fc931eeea362-16bfa5f4-9041-444b-9dc4-ab67e55887df-v1.png?transparent=1&palette=1" /></p>

A server for communicating with Firebase Messaging

### Setup
Put the Firebase Messaging service credentials at the location of `./data/creds.json`

### Endpoints
`/register-token` allows the device to be registered to `All Notifications` topic
Payload:
```
{
  "token": "firebase_client_token"
}
```

`/unregister-token` will un-register the device from the `All Notifications` topic
Payload:
```
{
  "token": "firebase_client_token"
}
```

`/send` will send a notification to the `All Notifications` topic
Payload:
```
{
  "title": "Title of the notification",
  "body": "Body of the notification",
  "colour": "Hex value of the colour of the notification icon, optional!"
}
```