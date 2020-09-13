class Welcome{
    constructor(){

    }

    display(){
        var intro = createA();
        intro.href = 'View.js';
        intro.html("Introduction");
       

        var musicalNotes = createElement('h4');
        musicalNotes.html("Musical Notes");
        var lesson = createElement('h4');
        lesson.html("Lessons");

        var displayPosition = 100;
        intro.position(100,displayPosition);
        musicalNotes.position(100,displayPosition+50);
        lesson.position(100,displayPosition+100);

        
    }
}