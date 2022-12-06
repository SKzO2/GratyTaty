/**
 * GratyTaty blocks.
 */
//% color=#5C0091 weight=101 icon="\uf205"
namespace GratyTaty {
    /**
         * Opis
    */

    //% block="zrob cos %x %y"
    export function cos(x: number, y: number) {
        led.plot(x,y);
    }

}