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
      * Stop all motors
     */
    //% block="Zatrzymnaj silniki"
    export function wszystkiesilnikiStop(): void {
        for (let idx = 1; idx <= 4; idx++) {
            motor.motorStop(idx);
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
    //% block="Odległość dokladnie"
    export function podajDystans():number {
        return Rangefinder.distance();
    }
    //% block="Odległość zgrubsza"
    export function podajDystansbig(): number {
        return Math.floor(Rangefinder.distance() / 100);
    }
    //% block="Odległość tylko male"
    export function podajDystanssmall(): number {
        return Rangefinder.distance()-Math.floor(Rangefinder.distance() / 100);
    }


}