/* Configure P15 as input with the internal pulldown resistor enabled */
rpio.open(15, rpio.INPUT, rpio.PULL_DOWN);

/* Configure P16 as output with the initiate state set high */
rpio.open(16, rpio.OUTPUT, rpio.HIGH);

/* Configure P18 as output, but leave it in its initial undefined state */
rpio.open(18, rpio.OUTPUT);

var buf = new Buffer(10000);

/*
 * Set pin 16 low, then switch pin 16 to input mode and read its value 10,000
 * times, storing each bit value in buf.
 */
rpio.write(16, rpio.LOW);
rpio.readbuf(16, buf, buf.length, true);

