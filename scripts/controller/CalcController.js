class CalcController{
    
    constructor(){
        this._operation = [];
        //estou guardando a operação que vai acontecer
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

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            //ele está passando cada um dos eventos
            element.addEventListener(event,fn,false);
                    //quando o evento for disparado, o false vai fazer que ele so aconteça uma vez
        });
    }

    //métodos de ações para a calculadora
    clearAll(){
        this._operation = [];
        //vai esvaziar o array
    }

    clearEntry(){
        this._operation.pop();
        //o pop vai apagar o ultimo elemento do array
        
    }

    addOperation(value){
        this._operation.push(value);
        //push adiciona mais um elemento no final do array
        //tudo que for numero, ele adiciona
        console.log(this._operation);
    }
    
    setError(){
        this.displayCalc = "Error";
    }



    //lógica da calculadora
    execBtn(value){
        switch(value){
            //ac = limpa tudo
            case 'ac':

            break;
            //ce = cancela a ultima entrada
            case 'ce':

            break;
            case 'soma':

            break;
            case 'subtracao':

            break;
            case 'divisao':

            break;
            case 'multiplicacao':

            break;
            case 'porcento':

            break;
            case 'igual':

            break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':    
                this.addOperation(parseInt(value));
            break;

            default:
                this.setError();
            break;
        }               
    }

    initButtonsEvents(){
        //eventos do botões
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");


        buttons.forEach((btn,index)=>{

            this.addEventListenerAll(btn,'click drag ',e =>{
                let textBtn = console.log(btn.className.baseVal);

                this.execBtn(textBtn);
                //Vai executar a ação desse botão. A ação que vai ser tomada 
            //está sendo decidida pelo o switch
            });
            this.addEventListenerAll(btn,'mouseover mouseup mousedown',e =>{
                btn.style.cursor = "pointer";
                // o mouse estiver em cima do btn, o cursor mudará
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