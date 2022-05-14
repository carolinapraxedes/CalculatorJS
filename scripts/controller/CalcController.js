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



    //métodos de ações para a calculadora
    
    clearAll(){
        this._operation = [];
        //vai esvaziar o array
    }

    clearEntry(){
        this._operation.pop();
        //o pop vai apagar o ultimo elemento do array
        
    }

    getLastOperation(){
        //pegando o ultimo elemento do array
        return  this._operation[this._operation.length-1]

        //isso é necessário para juntar os números até 
        //o momento que a pessoa aperta um botão não-numérico(NaN)
    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;
        //o ultimo elemento vai ser igual ao operador do momento
        //ele apenas trocou os elementos

    }

    isOperator(value){
        //verifica se existe ai dentro o value que foi passado
        return (['+','-','*','/','%'].indexOf(value) > -1);
            //o indexOf vai buscar o valor do value dentro do array. 
            //Se ele achar, vai retornar o index do elemento 
            //se nao encontrar, ele vai retornar -1

    }

    addOperation(value){
        //isNaN verifica se nao é um numero
        
        

        //vai verificar se o ultimo botão apertado é 
        //um número ou nao-numero
        if(isNaN(this.getLastOperation())){
            //Vai entrar aqui se for string
            if(this.isOperator(value)){
                //troca o operador
                this.setLastOperation(value);

            }else if(isNaN(value)){

                console.log(value);
                //não é operador(+,-,*,/)
            }else{
                this._operation.push(value);
            }

        }else{
            //vem pra cá se for um número
            let newValue = this.getLastOperation().toString() + value.toString();
            //vou juntar os numeros, ex:
            //"1"+"1" = "11"
            this.setLastOperation(parseInt(newValue));

            //adicionando o novo valor no array
        }

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
                this.clearAll();
                break;
            //ce = cancela a ultima entrada

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':

                break;
            case 'ponto':
                this.addOperation('.');
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


    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            //o split vai tornar as strings em elementos de um array
            //ele está passando cada um dos eventos
            element.addEventListener(event,fn,false);
                    //quando o evento for disparado, o false vai fazer que ele so aconteça uma vez
        });
    }

    initButtonsEvents(){
        //eventos do botões
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");


        buttons.forEach((btn,index)=>{

            this.addEventListenerAll(btn,'click drag ',e=>{
                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);
            });
            //o evento addEvent Listener é nativo do js e só suporta um evento por vez
            // e por isso criamos o nosso metodo addEentListenerAll

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
                btn.style.cursor = "pointer";
            });

        })
    }

    setDisplayDateTime(){       
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

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