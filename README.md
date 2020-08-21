# TWD Discord Bot

**This is the bot for [The Worst Dev Discord](https://theworst.dev/discord)**

> It pairs nicely with the [Gated Discord Server Template](https://theworst.dev/discord-server-template)

## Current Functionality

- Ping command
- Assign a given role to member based on message reaction (good for gating off a server until CoC is accepted)
  - Currently looks for the ☑ (ballot_box_with_check) emoji.

## Running Locally

You'll need to define these env variables:

```bash
BOT_TOKEN=<BOT_TOKEN>
MESSAGE_ID=<ID of message to monitor>
ROLE_ID=<role to add to member>
SERVER_ID=<ID of the Discord server>
```

- Run `yarn` to install packages
- Run `yarn start` to start the server
