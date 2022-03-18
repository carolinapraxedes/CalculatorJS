class CalcController{
    
    constructor(){
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate; 
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){
        //Tudo que quiser que aconteça assim que começar
        // a calculadora, coloca nesse método initialize
        this.setDisplayDateTime();

        //fazer que a hora fique atualizando
        setInterval(()=>{
            //toda vez que ele atualizar, pegaremos:
            this.setDisplayDateTime();

        },1000); //o tempo em milisegundos

    }

    initButtonsEvents(){
        //eventos do botões
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");


        buttons.forEach((btn,index)=>{
            //ele vai percorrer para cada botão que encontrar na lista.
            // Vai receber o botão da vez e adiciono o evento no botão
            btn.addEventListener('click',e=>{
                console.log(btn.className.baseVal);
            });
        })

    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    };

    //vai mostrar a hora atualizada no display
    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    //vai mostrar a data atualizada no display
    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }



    get displayCalc(){
   
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return new Date();
    }
    set dataAtual(tempo){
        this._currentDate = tempo;
    }
        
}