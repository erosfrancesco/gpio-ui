/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
rpio.open(16, rpio.OUTPUT, rpio.LOW);

/*
 * The sleep functions block, but rarely in these simple programs does
 * one care about that.  Use a setInterval()/setTimeout() loop instead
 * if it matters.
 */
for (var i = 0; i < 5; i++) {
        /* On for 1 second */
        rpio.write(16, rpio.HIGH);
        rpio.sleep(1);

        /* Off for half a second (500ms) */
        rpio.write(16, rpio.LOW);
        rpio.msleep(500);
}


//led flash

/* Configure P15 as an output pin, setting its initial state to low */
rpio.open(15, rpio.OUTPUT, rpio.LOW);

/* Set the pin high every 10ms, and low 5ms after each transition to high */
setInterval(function() {
        rpio.write(15, rpio.HIGH);
        setTimeout(function() {
                rpio.write(15, rpio.LOW);
        }, 5);
}, 10);