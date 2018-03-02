## Exercises

Explain the following to someone in class, or in your house, or on the
phone. If no one is available, any house plant will do.

(The answers to the below questions aren't necessarily in the above text.)

* In industry terms, how many months does it take for the number of transistors
  on a chip to double?
  * Moore's Law: overall processing power for computers will double every two years. 

* Why are registers necessary? Why not use RAM?
  * Registers, like RAM, are temporary storage. The difference is that registers are stored directly on the CPU and therefore are significantly faster than RAM.
  * Additionally, there are registers that are set aside for specific tasks. There are only a few of these on any given processor. - Some specialized registers include base register, stack register, flags register, program counter, and some addressing registers. 
  * RAM is located external to the CPU. Generally speaking, data has to be loaded into a CPU register from memory before the CPU can process it.
  * RAM is much slower than registers, but comes in far greater quantity.
  * Memory can be addressed on a byte boundary, where registers may not be able to access all the bytes in a register
  * Ultimately, registers are temporary storage in the CPU that holds the data the processor is currently working on, while RAM holds the program instructions and the data the program requires. 

* Why is cache useful?
  * Increase the speed of the average memory access without taking up as much physical space as the lower elements of the memory hierarchy.
  * They ameliorate the (performance critical) memory access time by leveraging spatial and temporal locality. 

* Why are interrupts useful?
  * It allows the CPU to focus on its main tasks without sending regular checks to peripherals to make request checks. This way it can handle those in real time.

* What are some examples of interrupts that might occur?
  * I/O devices: keyboard, mouse
  * Power failure interrupt: The circuit monitor will send a power failure interrupt and the CPU will transfer all the program state to nonvolitile memory in a few milliseconds before the power ceases. 

* Describe what a CPU word is. 
  * A word is a fixed-sized piece of data handled as a unit by the instruction set or the hardware of the processor. 
  * The number of bits in a word (the word size, word width, or word length) is an important characteristic of any specific processor design or computer architecture.

* Describe what the system bus is and what size it is.
  * The system bus is a pathway composed of cables and connectors used to carry data between a computer microprocessor and the main memory. 
  * The bus provides a communcation path for the data and control signals moving between the major components of the computer system.
  * Common bus sizes are: 4 bits, 8 bits, 12 bits, 16 bits, 24 bits, 32 bits, 64 bits, 80 bits, 96 bits, and 128 bits. 

* Describe what a CPU instruction is.
  * The instruction set, also called instruction set architecture (ISA), is part of a computer that pertains to programming, which is basically machine language. 
  * The instruction set provides commands to the processor, to tell it what it needs to do.

* Describe what the CPU clock represents.
  * The clock speed typically refers to the frequency at which a chip like a CPU (one core of a multi-core processor) is running and is used as an indicator of the processor's speed. 

* Describe what a CPU interrupt is.
  * AN interrupt is a signal to the processor emitted by hardware or software indicating an event that needs immediate attention. An interrupt alerts the processor to a high priority condition requiring the interruption of the current code the procesor is executing. 

* Describe what kinds of pins enter and exit the CPU.
  * Reference: [clickity](https://www.reenigne.org/blog/what-are-all-those-pins-for/comment-page-1/)
  * In modern CPUs, the pins are now "lands" since they are just flat conducting areas that touch pins in the socket
  * Pin types include:
    * Power:
      * VSS, VCC, VCCPLL, VTTA, VTTD, VDDQ
    * Memory:
      * DDR0,DDR1,DDR2, others
    * other:
      * QPI data, reserved, other

* Describe what DMA is.
  * Initialism for Direct Memory Access, DMA the ability provided by some computer bus architectures that allows data to be sent directly from an attached device (such as a disk drive) to the memory on the computer's motherboard. 

* Say which peripherals are connected to the DMA bus.
  * CPU: (CPU --> DMA Bus)
  * RAM (RAM <--> DMA Bus)
  * Hard Disk (DMA Bus --> Hard Disk)
  * GPU (DMA Bus --> GPU)

* Say which peripherals are connected to the I/O bus.
  * CPU (inputs to the I/O Bus)
  * PCIx Bus (outputs from the I/O Bus)

* Describe what L1, L2, and L3 caches are.
  ###### L stands for "Level"
  1. L1 is extremely fast but relatively small, and is usually embedded in the CPU. 
  2. L2 is often larger than L1; it may be located on the CPU or on a separate chip or coprocessor with a high-speed alternative system bus interconnecting the cache to the CPU, so as not to be slowed by traffic on the main system bus.
  3. L3 is typically specialized in memory that works to improve the performance of L1 and L2. It can be significantly slower than L1 or L2, but is usually double the speed of RAM. In the case of multicore processors, each core may have its own dedicated L1 and L2 cache, but share a common L3 cache. When an instruction is referenced in the L3 cache, it is typically elevated to a higher tier cache. 

* Describe caching and storage from L1 through cloud storage.
  * There are multiple levels of cache between the CPU and RAM, so data passes through those levels on its way to RAM. Eventually a network card needs to read the RAM to send the data over a network.

* Describe what RAM is and its reponsibility in the system.
  * RAM stores data and machine code currently being used. RAM allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory. 

* Describe what the hard disk is and its responsibility in the system.
  * Hard disks are data storage solutions using rapidly rotating disks called platters coated with magnetic materials. 
  * Hard disk data is also accessed in a random-access manner.

* Describe what the network interface card is responsible for in the system.
  * The NIC connects a computer to a computer network.

* Describe what the graphics card is responsible for in the system.
  * The GPU generates a feed of output images to a display.
  * GPUs can be discrete or dedicated. 

* Suggest the role that graphics cards play in machine learning.
  * As first demonstrated in the Google v Stanford net comparisons, GPUs allow for a vastly less expensive alternative to build computing farms. 
  * While the CPU can run faster, the GPU can take more information per "trip." Consider moving freight with either a Ferrari or a freight truck. Obviously the Ferrari is faster in speed, but this will take far longer in the long run than with the freight truck. 

  ## Sprint Quesitons:

  * Convert 11001111 binary..
    * to hex: 1100 1111 >>->> 1100 = C & 1111 = F >>->> = 0xCF
    * to decimal: 128 + 64 + 8 + 4 + 2 + 1 = 207
  
  * Convert 4C hex..
    * to binary: 4 = 0100 & C = 1100 >>->> Group both >>->> 0b01001100
    * to decimal: 4 & C >>->> 4x16^1 & Cx16^0 >>->> 4 * 16 = 64 & 12 * 1 = 12 >>->> 64 + 12 = 0x76

  * Convert 68 decimal..
    * to binary: 
      * 68/2 = 34, remainder is 0
      * 34/2 = 17, remainder is 0
      * 17/2 = 8, remainder is 1
      * 8/2 = 4, remainder is 0
      * 4/2 = 2, remainder is 0
      * 2/2 = 1, remainder is 0
      * 1/2 = 0, remainder is 1
      * reading from bottom (MSB) to top (LSB) as 0b1000100
    * to hex: 
      * Divide 68 by 16 until the quotient is 0:
      * 68 / 16 = 4, remainder is 4
      * 4 / 16 = 0, remainder is 4
      * Read from bottom (MSB) to top (LSB) as 44 = 0x44

  #### Architecture

  * Explain how the CPU provides concurrency: 
    * Concurrency is a form of computing which allows several operations to be execuded in parralel, or concurrently, instead of sequentially. 
    * The first way the CPU helps in this is by using Interrupt Handlers. The CPU continues on with whatever process it needs to operate on and can instantly pause what it's doing when an interruption occurs from another part of the computer.
    * The second way is through individual process stacks. By using additional CPU threads to simultaneously execute on a same stack without affecting each other. 
  
  * Describe assembly language and machine language: 
    * Machine code is only in binary which is very unreadable to humans. It is executed directly by the CPU.
    * Assembly code is the plain-text (more human-readable than machine) version of the machine code. This is accomplished using mnemonics for the actual instructions/registers/etc resources. Examples of this would include things like HLT (halt), JMP (jump), MULT (multiply), and plenty more. Unlike Machine Code, the CPU does not understand Assembly Code. 

  * Suggest the role that graphics cards play in machine learning:
    * Reason # 1. GPUs are super inexpensive compared to good CPUs. The cost of this was first proven a decade or more ago when two colleges built neural networks and one used CPUs costing something like $300,000. Then another school did it with GPUs for only $30,000. 10%. *Edit Notes: Removed a curse word. I did copypasta from a private slack chat explaining it to someone else, then just used my explanation to them cause I liked it. Oops!  :)*
    * Reason # 2. The other is speed of trips. The CPU is like a Ferrari during a move. Sure it's faster, but it can't hold very much per trip and it's going to have to make a LOT of trips. The smarter mover would find a large truck to ship everything at once more slowly, but ultimately more quickly
    
