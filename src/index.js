require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  Client,
  IntentsBitField,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ComponentType,
} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const CHANNEL_ID = process.env.CHANNEL_ID;
const ROLE_ID = process.env.ROLE_ID;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

client.once("ready", () => {
  console.log("Bot is ready");

  const channel = client.channels.cache.get(CHANNEL_ID);
  const roleButton = new ButtonBuilder()
    .setLabel("Check Your Role")
    .setStyle(ButtonStyle.Primary)
    .setCustomId("connect_wallet_button");

  const checkRoleButtonRow = new ActionRowBuilder().addComponents(roleButton);

  channel.send({
    content: "Connect Your Wallet and Check Your role",
    components: [checkRoleButtonRow],
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  // Check if the button custom ID matches your button's custom ID
  if (interaction.customId === "connect_wallet_button") {
    // Get the user ID who clicked the button
    const userId = interaction.user.id;
    console.log(`User ${userId} clicked the Connect Wallet button.`);

    app.get("/", (req, res) => {
      res.send({ userId: userId });
    });

    app.post("/holders", async (req, res) => {
      // Access POST data from the request body
      const holderId = req.body.holderId;

      // Process the data or perform any desired operations
      console.log("Received POST data:", holderId);

      const roleId = ROLE_ID;
      const guild = client.guilds.cache.get(GUILD_ID);
      // const holder = channel.client.users.cache.get(holderId);
      // const role = channel.guild.roles.cache.get(roleId);
      // const holder = guild.client.users.cache.get(holderId);
      const holder = await guild.members.fetch(holderId);
      const role = guild.roles.cache.get(roleId);

      await holder.roles.add(role);

      // Send a response
      res.status(200).send("POST request received successfully");
    });

    const connectWalletButton = new ButtonBuilder()
      .setURL("http://localhost:3000")
      .setLabel("Connect Wallet")
      .setStyle(ButtonStyle.Link);

    await interaction.reply({
      content: `User ${userId}, click the Connect Wallet button to connect your wallet and check your role.`,
      components: [new ActionRowBuilder().addComponents(connectWalletButton)],
    });
  }
});

client.login(TOKEN);
