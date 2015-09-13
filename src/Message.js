var VALID_COLORS = [
    'black',
    'dark_blue',
    'dark_green',
    'dark_aqua',
    'dark_red',
    'dark_purple',
    'gold',
    'gray',
    'dark_gray',
    'blue',
    'green',
    'aqua',
    'red',
    'light_purple',
    'yellow',
    'white',
    'obfuscated',
    'bold',
    'strikethrough',
    'underline',
    'italic',
    'reset'
];

var VALID_CLICK_ACTIONS = [
    'open_url',
    'open_file',
    'run_command',
    'suggest_command'
];

var VALID_HOVER_ACTIONS = [
    'show_text',
    'show_achievement',
    'show_item'
];

/**
 * Creates a new message
 * @param text the text to send or blank for no text
 * @param translation true if the text is a translation
 * @constructor
 */
function Message(text, translation) {
    if (translation) {
        this.translataion = text;
    } else {
        this.text = text;
    }
}

/**
 * Appends another message to this message
 * @param extra the extra message to add, either a string or Message
 * @returns {Message}
 */
Message.prototype.addExtra = function (extra) {
    if (extra) {
        if (this.extra) {
            this.extra.push(extra);
        } else {
            this.extra = [extra];
        }
    }
    return this;
};

/**
 * Sets this message bold
 * @param bold if the message should be bold
 * @returns {Message}
 */
Message.prototype.setBold = function (bold) {
    this.bold = !!bold;
    return this;
};

/**
 * Sets this message italic
 * @param italic if the message should be italic
 * @returns {Message}
 */
Message.prototype.setItalic = function (italic) {
    this.italic = !!italic;
    return this;
};

/**
 * Sets this message underlined
 * @param underlined if the message should be underlined
 * @returns {Message}
 */
Message.prototype.setUnderline = function (underlined) {
    this.underlined = !!underlined;
    return this;
};

/**
 * Adds a strikethrough to this message
 * @param strikethrough if the message should have a strikethrough
 * @returns {Message}
 */
Message.prototype.setStrikeThrough = function (strikethrough) {
    this.strikethrough = !!strikethrough;
    return this;
};

/**
 * Sets this message obfuscated
 * @param obfuscate if the message should be obfuscated
 * @returns {Message}
 */
Message.prototype.setObfuscated = function (obfuscate) {
    this.obfuscated = !!obfuscate;
    return this;
};

/**
 * Sets the color of this message
 * @param color the color to set
 * @returns {Message}
 */
Message.prototype.setColor = function (color) {
    color = color ? color.toLowerCase() : color;
    if (VALID_COLORS.indexOf(color) < 0) {
        throw new Error('Invalid color "' + color + '"!');
    }
    this.color = color;
    return this;
};

/**
 * Adds a click event to this message
 * @param action the action to respond to
 * @param value the value that corresponds to the action
 * @returns {Message}
 */
Message.prototype.setClickEvent = function (action, value) {
    action = typeof action == 'string' ? action.toLowerCase() : action;
    if (VALID_CLICK_ACTIONS.indexOf(action) < 0) {
        throw new Error('Invalid action "' + action + '"!');
    }
    this.clickEvent = {
        action: action,
        value: value
    };
    return this;
};

/**
 * Adds a hover event to this message
 * @param action the action to respond to
 * @param value the value that corresponds to the action
 * @returns {Message}
 */
Message.prototype.setHoverEvent = function (action, value) {
    action = typeof action == 'string' ? action.toLowerCase() : action;
    if (VALID_HOVER_ACTIONS.indexOf(action) < 0) {
        throw new Error('Invalid action "' + action + '"!');
    }
    if (value instanceof Message) {
        value = value.toJSON();
    }
    this.hoverEvent = {
        action: action,
        value: value
    };
    return this;
};

/**
 * Sets the text that is inserted into chat when the message is shift clicked
 * @param insertion the insertation to insert
 * @returns {Message}
 */
Message.prototype.setInsertion = function (insertion) {
    if (typeof insertion != 'string') {
        throw new Error('Insertion should be a string');
    }
    this.insertion = insertion;
    return this;
};

/**
 * Converts this message to a JSON string
 * @type {String}
 */
Message.prototype.toJSON = Message.prototype.json = Message.prototype.toString = function () {
    return JSON.stringify(this);
};

module.exports = Message;
