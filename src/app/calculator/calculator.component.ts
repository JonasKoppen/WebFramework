import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';


@Component({
selector: 'app-calc',
templateUrl: './calculator.component.html',
styleUrls: ['./calculator.component.scss']
}) 
export class CalcComponent{
    title = 'CalcComponent';
    display : string = "";
    error : string;
    
    keyPress(key: HTMLButtonElement){
        this.display += key.value;
    }
    
    clearScreen(){
        this.display = "";
    }

    back(){
        this.display = this.display.substr(0,this.display.length-1);
    }

    calculate(){
        try{
            this.display = eval(this.display)
        }
        catch(a){
            this.error = (<Error>a).message
            setTimeout(()=> this.error = "", 2000)
        }
    }


}