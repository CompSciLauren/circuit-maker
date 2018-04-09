/**
 * Class to connect gates and inputs.
 */
class Connector {
    constructor() {
        this.input = null;
        this.output = null;
    }

    setInput(input) {
        this.input = input;
    }

    setOutput(output) {
        this.output = output;
    }
}

export default Connector;