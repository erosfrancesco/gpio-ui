rpio.open(15, rpio.INPUT, rpio.PULL_UP);

function pollcb(pin)
{
        /*
         * Wait for a small period of time to avoid rapid changes which
         * can't all be caught with the 1ms polling frequency.  If the
         * pin is no longer down after the wait then ignore it.
         */
        rpio.msleep(20);

        if (rpio.read(pin))
                return;

        console.log('Button pressed on pin P%d', pin);
}

rpio.poll(15, pollcb, rpio.POLL_LOW);


function nuke_button(pin)
{
        console.log('Nuke button on pin %d pressed', pin);

        /* No need to nuke more than once. */
        rpio.poll(pin, null);
}

function regular_button(pin)
{
        /* Watch pin 15 forever. */
        console.log('Button event on pin %d, is now %d', pin, rpio.read(pin));
}

/*
 * Pin 15 watches for both high and low transitions.  Pin 16 only watches for
 * high transitions (e.g. the nuke button is pushed).
 */
rpio.poll(15, regular_button);
rpio.poll(16, nuke_button, rpio.POLL_HIGH);

rpio.close(15);
rpio.close(16, rpio.PIN_RESET);
rpio.close(13, rpio.PIN_PRESERVE);