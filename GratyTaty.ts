/**
 * GratyTaty blocks.
 */

//% color=#ab0707 weight=80 icon="\uf2db"
namespace GratyTaty {
    /**
         * Opis
    */
    export enum kierunekJazdy {
        doPrzodu,
        doTylu,
        wlewo,
        wprawo
    }
    export enum kierunekSkrecania {
        wlewo,
        wprawo
    }
    /**
     * Pokaż na wyswietlaczu poziom w wartosiach od 0 do 15 
     */

    //% block="Pokaż pozopn %poziom"
    //% poziom.min=0 poziom.max=15
    //% kat.fieldOptions.precision=1
    export function pokazpoziom(poziom: number){
        switch(poziom){
            case 0:
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `);
                break;
            case 1:
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                `);
                break;
            case 2:
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                `);
                break;
            case 3:
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `);
                break;
            case 4:
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                # # # # #
                `);
                break;
            case 5:
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                # # # # #
                `);
                break;
            case 6:
                basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `);
                break;
            case 7:
                basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                # # # # #
                # # # # #

                `);
                break;
            case 8:
                basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                # # # # #
                # # # # #
                `);
                break;
            case 9:
                basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `);
                break;
            case 10:
                basic.showLeds(`
                . . . . .
                . . # . .
                # # # # #
                # # # # #
                # # # # #

                `);
                break;
            case 11:
                basic.showLeds(`
                . . . . .
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                `);
                break;
            case 12:
                basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `);
                break;
            case 13:
                basic.showLeds(`
                . . # . .
                # # # # #
                # # # # #
                # # # # #
                # # # # #

                `);
                break;
            case 14:
                basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `);
                break;
            case 15:
                basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `);
                break;

        }
    }
    //% block="Jedź %gdzie z prędkością %predkosc "
    //% predkosc.min=0 predkosc.max=255
    //% predkosc.fieldOptions.precision=1 
    export function jedzWKierunku(gdzie: GratyTaty.kierunekJazdy, predkosc:number) {
        if (gdzie == 0) {
            basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `);
            motor.MotorRun(motor.Motors.M1, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            return;
        }
        if (gdzie == 1) {
            basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `);
            motor.MotorRun(motor.Motors.M1, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Jak_wskazowki, predkosc);
            return;
        }
        if (gdzie == 2) {
            basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `);
            motor.MotorRun(motor.Motors.M1, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            return;
        }
        if (gdzie == 3) {
            basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `);
            motor.MotorRun(motor.Motors.M1, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Jak_wskazowki, predkosc);
            return;
        }
    }

    /**
     * Serwo S1 jest odpowiedzialne za skręcanie kół
     */

    //% block="Skrść %gdzie jak mocno %kat"
    //% kat.min=0 kat.max=90
    //% kat.fieldOptions.precision=1
    export function Skrec(gdzie: GratyTaty.kierunekSkrecania, kat: number) {
        let skret=90;
        if (gdzie==1){
            skret+=kat;
        }else{
            skret-=kat;
        }
        motor.servo(motor.Servos.S1, skret)

    }
    //% block="Włącz miernik odległości"
    export function DystansInit(){
         Rangefinder.init();
    }
    //% block="Odległość"
    export function podajDystans():number {
        return Rangefinder.distance();
    }

    

}