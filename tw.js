class cloud09 {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "getparameterbyurl",
            "name": "Get parameter by url",
            "blocks": [
                        {
                            "opcode": "getParameterByURL",
                            "blockType": "reporter",
                            "text": "Get parameter by url [parameter]",
                            "arguments": {
                                "parameter": {
                                    "type": "string",
                                    "defaultValue": "api"
                                },
                            }
                        }
                ],
        };
    }
    
    getParameterByURL({parameter}) {
        this.getParameterByName = (name) => {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
            var results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return eval(decodeURIComponent(results[2].replace(/\+/g, " ")));
        }
        return this.getParameterByName(parameter);
    }
}

Scratch.extensions.register(new cloud09())