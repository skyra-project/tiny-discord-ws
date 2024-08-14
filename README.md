# tiny-discord-ws

A tiny WebSocket client for Discord's Gateway API, written in JavaScript. This is
used to temporarily connect an application to the Discord gateway, which will
trigger an update to the application's profile on all clients rather than staying
broken.

To start this client, you will need to copy `.env.example` to `.env` and fill in
the required field. Then run `yarn run start`.
