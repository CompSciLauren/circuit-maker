/**
 * Class to represent boolean inputs.
 */
class Input {
    constructor() {
        this.output = null;
    }
    /**
     * Sets the output of the {@link Input}.
     * 
     * @param {Connector} output
     *      The input to connect.
     */
    setOutput(output) {
        this.output = output;
    }
}

export default Input;