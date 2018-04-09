/**
 * Class to connect gates and inputs.
 */
class Connector {
    constructor() {
        this.input = null;
        this.output = null;
    }

    /**
     * Sets the input of the {@link Connector}.
     * 
     * @param {Input} input 
     *      The input to connect.
     */
    setInput(input) {
        this.input = input;
    }

    /**
     * Sets the output of the {@link Connector}.
     * 
     * @param {Gate} output 
     *      The output to connect.
     */
    setOutput(output) {
        this.output = output;
    }
}

export default Connector;