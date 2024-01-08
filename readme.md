# Discord Bot

## Node js Version
* v18.16.x

## Create Discord Bot, Server, Channel

* Turn on development mode

> Go to the user profile setting (Discord server owner profile setting)

> Advanced / Turn on Developer Mode

* Create Discord Bot

> Go to https://discord.com/developers/applications

> Click "New Application" / Choose your application name

> Go to "Bot" / Add Bot 

> Bot Setting
>>
    Turn off Authorization Flow / PUBLIC BOT
    Turn on Privileged Gateway Intents / PRESENCE INTENT
    Turn on Privileged Gateway Intents / SERVER MEMBERS INTENT
    Turn on Privileged Gateway Intents / MESSAGE CONTENT INTENT
    Save Changes
    
> Go to OAuth2 / URL Generator
>>
    SCOPES / select bot, applications.commands
    BOT PERMISSIONS / GERNERAL PERMISSIONS / select Administrator
    
> Copy the generated url and turn on in the new tab(in the browser that your discord account logged in.)
>>
    select the server / Authorise
    
> Check the Discord Bot imported to your server

> Reset Token
>> 
    https://discord.com/developers/applications/ Go to Bot / Reset Token
    Copy this token, Replace to TOKEN of .env file

* Create Discord Server (If you have already Discord Server, that's ok) and assign Bit Permissions

> Bottom of the left NavBar / "+" (add a server)

> Choose the Server Name

> Check GUILD_ID
>> 
    Right Click Server Name and copy Server ID
    Replace this to GUILD_ID of .env file
    
> Assign Bot Permissions
>> 
    Server Settings / Roles / Click Bot / Permissions
    Add Permissions : View Channels, Manage Channels, Manage Roles

* Create LABB Holder Role

>  Server Settings / Roles / Create Role

> Check ROLE_ID
>>
    Server Settings / Roles / Right Click Role and Copy
    Replace this to ROLE_ID of .env file

* Create Role Channel and assign Bot Permissions

> Click Server Name /  Create Channel 

> Check CHANNEL_ID
>>
    Right Click the channel name and copy the channel ID
    Replace this to CHANNEL_ID of .env file

> Assign Bot Permissions
>>  
    Go Channel / Settings / permissions / select Bot
    Add Permittions : View Channel, Manage Channel
    
## .env file format

>>
    PORT = 5000
    TOKEN = 
    GUILD_ID = 
    CHANNEL_ID = 
    ROLE_ID = 

## Project Run

>>
    npm i
    npm i -g nodemon
    nodemon

    
    
    


    

