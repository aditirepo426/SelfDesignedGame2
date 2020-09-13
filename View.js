class View {
    constructor(){
        this.intro = createA('http://p5js.org/', 'this is a link');
    }

    display(){
        this.intro.position(displayWidth-100,50);
    }
}