class Game{
    constructor(){
        this.gameWidth = document.getElementById("game");
        this.gameWidth = screen.width;
        this.gameWidth = screen.height;
    }
}
onload = new Game();






var click = 'x';
var title = document.querySelector('.title');


function clickSquer(id){
    var element = document.getElementById(id);
    if(click === 'x' && element.innerHTML == ''){
        
        element.innerHTML = 'X';
        click = 'o';
        title.innerHTML ='O';

    }else{
        element.innerHTML = 'O';
        click = 'x';
        title.innerHTML ='X';
    }

    winner();
}


function reload(){
    location.reload();
}






function winner(){
    let squers = [];
    for(var i=1; i<10; i++){
        squers[i] = document.getElementById("item"+i).innerHTML;
    }

    if(squers[1] == squers[2] && squers[2] == squers[3] && squers[1] != ''){
        title.innerHTML = `${squers[1]} Winner`;
        this.result(1,2,3);
    }
    else if(squers[4] == squers[5] && squers[5] == squers[6] && squers[4] != ''){
        title.innerHTML = `${squers[2]} Winner`;
        this.result(4,5,6);
    }
    else if(squers[7] == squers[8] && squers[8] == squers[9] && squers[7] != ''){
        title.innerHTML = `${squers[7]} Winner`;
        this.result(7,8,9);
    }
    else if(squers[1] == squers[4] && squers[4] == squers[7] && squers[4] != ''){
        title.innerHTML = `${squers[1]} Winner`;
        this.result(1,4,7);
    }
    else if(squers[2] == squers[5] && squers[5] == squers[8] && squers[2] != ''){
        title.innerHTML = `${squers[2]} Winner`;
        this.result(2,5,8);
    }
    else if(squers[3] == squers[6] && squers[6] == squers[9] && squers[3] != ''){
        title.innerHTML = `${squers[3]} Winner`;
        this.result(3,6,9);
    }
    else if(squers[1] == squers[5] && squers[5] == squers[9] && squers[1] != ''){
        title.innerHTML = `${squers[1]} Winner`;
        this.result(1,5,9);
    }
    else if(squers[3] == squers[5] && squers[5] == squers[7] && squers[3] != ''){
        title.innerHTML = `${squers[3]} Winner`;
        this.result(3,5,7);
    }
}


function result(number1 , number2, number3){

    document.getElementById("item"+number1 ).style.backgroundColor = 'brown';
    document.getElementById("item"+number1 ).style.color = 'white';
    document.getElementById("item"+number2).style.backgroundColor = 'brown';
    document.getElementById("item"+number2).style.color = 'white';
    document.getElementById("item"+number3).style.backgroundColor = 'brown';
    document.getElementById("item"+number3).style.color = 'white';
    title.style.color = 'white';

    setInterval(function(){
        title.innerHTML+= '.'
    } , 1000);
    setTimeout(function(){
        location.reload();
    } , 4000);
}


