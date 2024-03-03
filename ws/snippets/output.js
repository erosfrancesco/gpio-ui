rpio.write(13, rpio.HIGH);

/* Write 1 0 1 0 1 0 1 0 to Pin 13 */
var buf = new Buffer(8).fill(rpio.LOW);
buf[0] = buf[2] = buf[4] = buf[6] = rpio.HIGH;
rpio.writebuf(13, buf);