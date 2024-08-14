import { REST } from "@discordjs/rest";
import { WebSocketManager, WebSocketShardEvents } from "@discordjs/ws";

const token = process.env.DISCORD_TOKEN;
if (!token) throw new Error("No token provided");

const rest = new REST().setToken(token);
const ws = new WebSocketManager({ intents: 0, rest, token });

ws.on(WebSocketShardEvents.Ready, () => {
  console.log("Ready!");
});

await ws.connect();
