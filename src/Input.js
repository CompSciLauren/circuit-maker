/**
 * Class to represent boolean inputs.
 */
class Input {
    constructor(binaryValue) {
        this.output = null;
        this.value = binaryValue;
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

    getValue() {
        return this.value;
    }
}

export default Input;