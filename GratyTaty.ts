/**
 * GratyTaty blocks.
 */

//% color=#ab0707 weight=80 icon="\uf2db"
namespace GratyTaty {
    /**
         * Opis
    */
    export enum kierunek {
        doPrzodu,
        doTylu,
        wlewo,
        wprawo
    }

    //% block="Jedź %gdzie "
    export function cos(gdzie: GratyTaty.kierunek) {
        if (gdzie == 0) {
            basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        }
    }

}