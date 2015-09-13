![Logo](http://i.imgur.com/Mba0WHy.png)Node Minecraft Chat
===
This project can be used to format messages for the Minecraft Client

Example Usage
===

```javascript
var Message = require('mc-chat');

new Message('hi!').setColor('red').setClickAction('run_command', '/spawn').json();
// => {"text": "hi!", "color": "red", "clickAction": {"action": "run_command", "value": "/spawn"}}
```

Why?
===
This is but a single piece of a large effort to create an entire Minecraft server written in Node.
