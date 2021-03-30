class Screen{

    constructor(){
        this.button = createButton('play');
        this.title = createElement('h2');
        this.greeting = createElement('h2');
    }
    hide(){
        this.button.hide();
        this.title.hide();
        this.greetinjg.hide();
    }

    display(){
        this.title.html("Dungeon Quest");
        this.title.position(400,0);

        this.button.position(430,200);
    }
}