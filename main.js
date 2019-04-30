const container = document.querySelector("#content");

class mainContainer{
    constructor(time, startAuto){
        this.time = time;
        this.currentSeconds = time;
        this.startAuto = startAuto;
        this.interval = null;
        this.render();
        this.checStartProgres();
    }

    

    displayTime(){
        const minutes = Math.round(this.currentSeconds / 60);
        const seconds = Math.round(this.currentSeconds % 60);
        this.createtimersmall.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    lifeInterval(){
        if (this.interval !== null) return;
         this.interval = setInterval(() =>{
             const curentWidth = this.linedown.offsetWidth;
             const parsent = (this.width / 100);
             this.currentSeconds = this.currentSeconds - 0.1;
             const percent = (this.currentSeconds / this.time )*100;
             this.displayTime()
            //прикріпляєм таймер зворотнього відліку до лінії
             this.linedown.style.width = `${ percent}%`;
              if (this.currentSeconds <= 0){
                   this.progresStop();    
               }
               
         }, 100)
     }   

    createProgresBar(){
        this.linedown = document.createElement("div");
        this.linedown.classList.add("line-timer");
        return this.linedown;
    }

    createTimersmall(){
        this.createtimersmall = document.createElement("div");
        this.createtimersmall.classList.add("timenumber-one");
        return this.createtimersmall;
    }

    progresStop(){
       clearInterval(this.interval);
       this.interval = null;
    }

    progresStart(){
        this.lifeInterval();
    }

     checStartProgres() {
        if (this.startAuto === false) {
            this.button.textContent = "Stop";
            this.progresStop();
        }
        else {
            this.button.textContent = "Stop";
            this.progresStart();
        }
    }

    render(){
        container.classList.add("wrapper")
        this.mainContainer = document.createElement("div");
        this.mainContainer.classList.add("main-content");

        this.button = document.createElement("button");
        this.button.classList.add("stop-button");
        this.button.textContent="stop";

        this.buttonStart = document.createElement("button");
        this.buttonStart.classList.add("start-button");
        this.buttonStart.textContent="start";

        container.append(this.createTimersmall());
        container.append(this.button);
        container.append(this.buttonStart);

        container.append(this.createProgresBar());
        container.append(this.mainContainer);
        this.button.addEventListener("click", this.progresStop.bind(this));
        this.buttonStart.addEventListener("click", this.progresStart.bind(this));
        this.displayTime()
        this.width = this.linedown.offsetWidth; 
    }
}

 new mainContainer(10, false);
 new mainContainer(200, true);

