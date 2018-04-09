import Connector from './Connector';

/**
 * Class to represent a binary gate.
 */
class Gate {
    constructor() {
        this.input1 = null;
        this.input2 = null;
        this.output = null;
    }

    /**
     * Sets the input of the {@link Gate}.
     * 
     * @param {Connector} input
     *      The input to connect. 
     */
    setInput(input) {
        this.input1 = input;
    }
}

export default Gate;