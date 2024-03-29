/**
 * GratyTaty blocks.
 */

//% color=#ab0707 weight=80 icon="\uf2db"
namespace GratyTaty {
    /**
         * Opis
    */
    let obrotmin;
    let obrotmax;
    let obrotstart=[2];

    export enum kierunekJazdy {
        doPrzodu,
        doTylu,
        wlewo,
        wprawo,
        obrot_L,
        obrot_P,
        skos_LP,
        skos_LT,
        skos_PP,
        skos_PT,
        luk_L,
        luk_P
    }
    export enum kierunekSkrecania {
        wlewo,
        wprawo
    }
   
    /**
      * Rotation calibration
     */
    //% block="Kalibrój obracanie"
    export function RotateCalibrate(): void {
        obrotstart[0]=input.magneticForce(Dimension.Z);
        obrotstart[1] = input.magneticForce(Dimension.X);
        obrotmin = 0;
        obrotmax = 0;
        jedzWKierunku(kierunekJazdy.obrot_P,50);
        control.waitMicros(100);
        while(1){
            if (obrotstart[0] == input.magneticForce(Dimension.Z)&&obrotstart[1] == input.magneticForce(Dimension.X)){
            break;    
            }
        }
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
           
            motor.MotorRun(motor.Motors.M1, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Jak_wskazowki, predkosc);
            return;
        }
        if (gdzie == 1) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            return;
        }
        if (gdzie == 2) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            return;
        }
        if (gdzie == 3) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Jak_wskazowki, predkosc);
            return;
        }
        if (gdzie == 4) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            return;
        }
        if (gdzie == 5) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M2, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Jak_wskazowki, predkosc);
            return;
        }
        if (gdzie == 6) {
            for (let idx = 1; idx <= 4; idx++) {
                motor.motorStop(idx);
            }
            motor.MotorRun(motor.Motors.M1, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Jak_wskazowki, predkosc);
            return;
        }
        if (gdzie == 7) {
            for (let idx = 1; idx <= 4; idx++) {
                motor.motorStop(idx);
            }
            motor.MotorRun(motor.Motors.M2, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            return;
        }
        if (gdzie == 8) {
            for (let idx = 1; idx <= 4; idx++) {
                motor.motorStop(idx);
            }
            motor.MotorRun(motor.Motors.M2, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Jak_wskazowki, predkosc);
            return;
        }
        if (gdzie == 9) {
            for (let idx = 1; idx <= 4; idx++) {
                motor.motorStop(idx);
            }
            motor.MotorRun(motor.Motors.M1, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M3, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            return;
        }
        if (gdzie == 10) {
            for (let idx = 1; idx <= 4; idx++) {
                motor.motorStop(idx);
            }
            motor.MotorRun(motor.Motors.M1, motor.Dir.Jak_wskazowki, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            return;
        }
         if (gdzie == 11) {
             for (let idx = 1; idx <= 4; idx++) {
                 motor.motorStop(idx);
             }
            motor.MotorRun(motor.Motors.M1, motor.Dir.Odwrotnie_do_wskazowek, predkosc);
            motor.MotorRun(motor.Motors.M4, motor.Dir.Jak_wskazowki, predkosc);
            return;
        }
    }

    /**
     * Serwo S1 jest odpowiedzialne za skręcanie kół
     */

    //% block="Skręć %gdzie jak mocno %kat"
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
   
    //% block="Skrędć %gdzie jak mocno %kat"
    //% kat.min=0 kat.max=90
    //% kat.fieldOptions.precision=1
    export function czekajms(kat: number) {
        let i=0;
        while (i < 1000) {
            control.waitMicros(kat);
            i++;
        }
    }
}