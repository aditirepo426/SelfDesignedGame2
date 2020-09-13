class Form {
    constructor(){
        this.input = createInput("Name");
        this.greeting = createElement('h2');
        this.title = createElement('h1');

        

    }

    


    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display(){
        this.input.hide();
        this.title.html("MUSIC MANTRA");
        this.title.position(displayWidth/4 - 50, displayHeight/2+300);
        
        
    }
    
}