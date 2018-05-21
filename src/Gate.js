import Connector from './Connector';

/**
 * Class to represent a binary gate.
 */
class Gate {
    constructor(gateType) {
        this.input1 = null;
        this.input2 = null;
        this.output = null;
        this.gateType = gateType;
    }

    evaluateInputs() {
        switch (this.gateType) {
            case 'AND':
                return this.input1.getValue() && this.input2.getValue();
            case 'OR':
               return this.input1.getValue() || this.input2.getValue();
        }
        
    }

    getValue() {
        return this.evaluateInputs();
    }

    /**
     * Sets the input of the {@link Gate}.
     * 
     * @param {Connector} input
     *      The input to connect.
     */
    setInput(input) {
        // Make sure same connector isn't connected more than once.
        if (this.input1) {
            if (input.connectorID == this.input1.connectorID) {
                throw "This connector is already connected!";
            }
            else {
                this.input2 = input;
                this.output = this.evaluateInputs();
            }
        }
        else if (!this.input1) {
            this.input1 = input;
        }
    }
}

export default Gate;