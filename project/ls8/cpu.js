/**
 * LS-8 v2.0 emulator skeleton code
 */

const fs = require('fs');

// Instructions

// !!! IMPLEMENT ME
// HTL
const HLT  = 0b00000001; // Halt CPU
// LDI
const LDI  = 0b00000000; // Load immediate
// MUL
const MUL  = 0b00000000; // Multiply R R
// PRN
const PRN  = 0b00000000; // Print

/**
 * Class for simulating a simple Computer (CPU & memory)
 */
class CPU {

    /**
     * Initialize the CPU
     */
    constructor(ram) {
        this.ram = ram;

        this.reg = new Array(8).fill(0); // General-purpose registers
        
        // Special-purpose registers
        this.reg.PC = 0; // Program Counter
        this.reg.IR = 0; // Instruction Register

		this.setupBranchTable();
    }
	
	/**
	 * Sets up the branch table
	 */
    // !!! IMPLEMENT ME
	setupBranchTable() {
		let bt = {};

        // HLT
        bt[HLT] = this.HLT;
        // LDI
        bt[LDI] = this.LDI;
        // MUL
        bt[MUL] = this.MUL;
        // PRN
        bt[PRN] = this.PRN;

		this.branchTable = bt;
	}

    /**
     * Store value in memory address, useful for program loading
     */
    poke(address, value) {
        this.ram.write(address, value);
    }

    /**
     * Starts the clock ticking on the CPU
     */
    startClock() {
        const _this = this;

        this.clock = setInterval(() => {
            _this.tick();
        }, 1);
    }

    /**
     * Stops the clock
     */
    stopClock() {
        clearInterval(this.clock);
    }

    /**
     * ALU functionality
     * 
     * op can be: ADD SUB MUL DIV INC DEC CMP
     */
    alu(op, regA, regB) {
        switch (op) {
            case 'MUL':
                // !!! IMPLEMENT ME
                break;
        }
    }

    /**
     * Advances the CPU one cycle
     */
    tick() {
        // !!! IMPLEMENT ME
        // Load the instruction register (IR) from the current PC
        this.reg.IR = this.mem[this.reg.PC];

        // Debugging output
        // console.log(`${this.reg.PC}: ${this.reg.IR.toString(2)}`);

        // Based on the value in the Instruction Register, locate the
        // appropriate hander in the branchTable
        // !!! IMPLEMENT ME
        let handler = this.branchTable[this.reg.IR];

        // Check that the handler is defined, halt if not (invalid
        // instruction)
        // !!! IMPLEMENT ME
        if (handler === undefined) {
            console.log(`Uknown code: ${this.reg.IR}`);
            this.stopClock(); // Exit with Error
            return;
        }

        // We need to use call() so we can set the "this" value inside
        // the handler (otherwise it will be undefined in the handler)
        let operandA = this.ram.read(this.reg.PC + 1); // The first Operand is one line after the Instruction.
        let operandB = this.ram.read(this.reg.PC + 2); // The second Operand is two lines after the Instruction.
        handler.call(this, operandA, operandB);

        // Increment the PC register to go to the next instruction
        // !!! IMPLEMENT ME
        this.reg.PC += ((this.reg.IR >> 6) & 0b00000011) + 1;
    }

    // INSTRUCTION HANDLER CODE:

    /**
     * HLT
     */
    HLT() {
        this.stopClock();
    }

    /**
     * LDI R,I
     */
    LDI(reg, value) {
        // !!! IMPLEMENT ME
        this.reg[reg] = value & 255;
    }

    /**
     * MUL R,R
     */
    MUL(regA, regB) {
        // !!! IMPLEMENT ME
        // Call the ALU
        this.alu('MUL', regA, regB);
    }

    /**
     * PRN R
     */
    PRN(regA) {
        // !!! IMPLEMENT ME
        console.log(this.reg[regA]);
    }
}

module.exports = CPU;
