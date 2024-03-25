import { Svix } from "svix";


const svix = new Svix("AUTH_TOKEN");
await svix.endpoint.create("app_Xzx8bQeOB1D1XEYmAJaRGoj0", {
    url: "https://api.example.com/svix-webhooks/",
    version: 1,
    description: "My main endpoint",
});