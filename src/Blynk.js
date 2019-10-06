window.Blockly.defineProcedures = function() {
    var funcnames = [];        
    var procs = Blockly.Procedures.allProcedures(Blockly.getMainWorkspace());
    procs[0].forEach(function(f) {
        if (f.length > 0) {
            funcnames.push(f[0]);
        }
    });  
    procs[1].forEach(function(f) {
        if (f.length > 0) {
            funcnames.push(f[0]);
        }
    });    
    return funcnames; 
};

// Block __Blynk_Start
var __Blynk_Start_json = {
  "type": "blynkstart",
  "message0": "%{BKY_BLYNK_START}",
  "args0": [
    {
      "type": "input_value",
      "name": "auth_token",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#23c48e"
};

window['Blockly'].Blocks['__Blynk_Start'] = {
    init: function() {
        this.jsonInit(__Blynk_Start_json);
    }
};

window['Blockly'].Python['__Blynk_Start'] = function(block) {
    var auth_token = Blockly.Python.valueToCode(block, 'auth_token', Blockly.Python.ORDER_NONE);
    return `import BlynkLib
BLYNK_AUTH = ${auth_token}
blynk = BlynkLib.Blynk(BLYNK_AUTH)

@timerSch.event('__blynk_timer')
def __blink_timer():
  blynk.run()
timerSch.run('__blynk_timer', 2, 0x00)
` + "\n";
};

// Block __Blynk_Input
window['Blockly'].Blocks['__Blynk_Input'] = {
    init: function() {
        this.jsonInit(this._init());
    },
    _init: function() {
        return {
            message0: "%{BKY_BLYNK_INPUT}",
            args0: [
                {
                    type: "input_value",
                    name: "pin",
                    check: "Number"
                },
                {
                    type: "field_dropdown",
                    name: "call",
                    options: function() {
                        const fns = window.Blockly.defineProcedures().map(f => [f, f]);
                        return fns.length <= 0 ? [[Blockly.Msg["BLYNK_CREATE_FUNC"], ""]] : fns;
                    }
                },
            ],
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            colour: "#23c48e"
        }
    }
};

window['Blockly'].Python['__Blynk_Input'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);    
    var call = Blockly.Python.variableDB_.getName(block.getFieldValue('call'), Blockly.Procedures.NAME_TYPE);
    return `@blynk.VIRTUAL_WRITE(${pin})
def v${pin}_write_handler(args): 
    globals()["${call}"](*args)` + "\n";
};

// Block __Blynk_Output
var __Blynk_Output_json = {
    "type": "blynkoutput",
    "message0": "%{BKY_BLYNK_OUTPUT}",
    "args0": [
      {
        "type": "input_value",
        "name": "pin",
        "check": "Number"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "value"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#23c48e"
};

window['Blockly'].Blocks['__Blynk_Output'] = {
    init: function() {
        this.jsonInit(__Blynk_Output_json);
    }
};

window['Blockly'].Python['__Blynk_Output'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    return `blynk.virtual_write(${pin}, ${value})` + "\n";
};

// Block __Blynk_Event
window['Blockly'].Blocks['__Blynk_Event'] = {
    init: function() {
        this.jsonInit(this._init());
    },
    _init: function() {
        return {
            message0: "%{BKY_BLYNK_EVENT}",
            args0: [
                {
                    type: "input_value",
                    name: "event",
                    check: "String"
                },
                {
                    type: "field_dropdown",
                    name: "call",
                    options: function() {
                        const fns = window.Blockly.defineProcedures().map(f => [f, f]);
                        return fns.length <= 0 ? [[Blockly.Msg["BLYNK_CREATE_FUNC"], ""]] : fns;
                    }
                },
            ],
            previousStatement: null,
            nextStatement: null,
            inputsInline: true,
            colour: "#23c48e"
        }
    }
};

window['Blockly'].Python['__Blynk_Event'] = function(block) {
    var event = Blockly.Python.valueToCode(block, 'event', Blockly.Python.ORDER_ATOMIC);    
    var call = Blockly.Python.variableDB_.getName(block.getFieldValue('call'), Blockly.Procedures.NAME_TYPE);
    return `@blynk.on(${event})
def __blynk_on_${event.slice(1, -1)}(args): 
    globals()["${call}"](*args)` + "\n";
};

// Block __Blynk_PushNotification
var __Blynk_PushNotification_json = {
    "type": "blynkpushnotification",
    "message0": "%{BKY_BLYNK_PUSH}",
    "args0": [
        {
        "type": "input_value",
        "name": "text",
        "check": "String"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#23c48e"
};

window['Blockly'].Blocks['__Blynk_PushNotification'] = {
    init: function() {
        this.jsonInit(__Blynk_PushNotification_json);
    }
};

window['Blockly'].Python['__Blynk_PushNotification'] = function(block) {
    var text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    return `blynk.notify(${text})` + "\n";
};

// Block __Blynk_Connect
var __Blynk_Connect_json = {
    "type": "blynkconnect",
    "message0": "%{BKY_BLYNK_CONNECT}",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "codes"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#23c48e"
};

window['Blockly'].Blocks['__Blynk_Connect'] = {
    init: function() {
        this.jsonInit(__Blynk_Connect_json);
    }
};

window['Blockly'].Python['__Blynk_Connect'] = function(block) {
    var codes = Blockly.Python.statementToCode(block, 'codes');
    var globalVar = '';
    if (window.Blockly.defineGlobal().length > 0) {
        globalVar = "  global " + window.Blockly.defineGlobal().join(", ") + "\n";
    }
    return `@blynk.on('connected')
def __blynk_on_connected():
${globalVar}${codes}  pass` + "\n";
};

// Block __Blynk_Disconnect
var __Blynk_Disconnect_json = {
    "type": "procedures_defnoreturn", // for skip BlocklyEditorService.prototype.checkDisabled
    "message0": "%{BKY_BLYNK_DISCONNECT}",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "codes"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#23c48e"
};

window['Blockly'].Blocks['__Blynk_Disconnect'] = {
    init: function() {
        this.jsonInit(__Blynk_Disconnect_json);
    }
};

window['Blockly'].Python['__Blynk_Disconnect'] = function(block) {
    var codes = Blockly.Python.statementToCode(block, 'codes');
    var globalVar = '';
    if (window.Blockly.defineGlobal().length > 0) {
        globalVar = "  global " + window.Blockly.defineGlobal().join(", ") + "\n"
    }
    return `@blynk.on('disconnected')
def __blynk_on_disconnected():
${globalVar}${codes}` + "\n";
};

if (window.Blockly.Msg["FUNCTIONS"] === "関数") {
    window.Blockly.Msg["BLYNK_START"] = "Blynkスタート トークン %1";
    window.Blockly.Msg["BLYNK_INPUT"] = "Blynk V %1 からの入力を %2 で処理";
    window.Blockly.Msg["BLYNK_CREATE_FUNC"] = "先に関数を作ってください";
    window.Blockly.Msg["BLYNK_OUTPUT"] = "Blynk V %1 へ %2 %3 を出力";
    window.Blockly.Msg["BLYNK_EVENT"] = "Blynkで %1 が発生したら %2 で処理";
    window.Blockly.Msg["BLYNK_PUSH"] = "Blynkへ %1 をプッシュ通知";
    window.Blockly.Msg["BLYNK_CONNECT"] = "Blynkが接続された %1 %2";
    window.Blockly.Msg["BLYNK_DISCONNECT"] = "Blynkから切断された %1 %2";
} else {
    window.Blockly.Msg["BLYNK_START"] = "Blynk Start with AuthToken: %1";
    window.Blockly.Msg["BLYNK_INPUT"] = "Blynk Read from V %1 on %2";
    window.Blockly.Msg["BLYNK_CREATE_FUNC"] = "Please create a function first";
    window.Blockly.Msg["BLYNK_OUTPUT"] = "Blynk Output to V %1 with %2 %3";
    window.Blockly.Msg["BLYNK_EVENT"] = "Handle Blynk Event %1 on %2";
    window.Blockly.Msg["BLYNK_PUSH"] = "Blynk Push Notification with %1";
    window.Blockly.Msg["BLYNK_CONNECT"] = "Blynk Connected %1 %2";
    window.Blockly.Msg["BLYNK_DISCONNECT"] = "Blynk Disconnected %1 %2";
}