'use strict';
//selecting elements
let activePlayer=0;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const Dice= document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const rolldice = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const cscore = document.getElementById(`current--${activePlayer}`);

let currentscore = 0;
score0.textContent =0;
score1.textContent =0;


//player switching ...........................................

const switchPlayer = function(){
        currentscore=0;
        document.getElementById(`current--${activePlayer}`).textContent = currentscore;
        
        if(activePlayer === 0)
        {   
            activePlayer = 1;
            
            
            document.getElementById(`current--${activePlayer}`).textContent = currentscore;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active'); 
        }
        else
        {   
            activePlayer = 0;
            
            
            document.getElementById(`current--${activePlayer}`).textContent = currentscore;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');

        }
}
//................................................................


//starting values........................................
let scores = [0,0];
Dice.classList.add('hidden');

//ROLL BUTTON
rolldice.addEventListener('click', function (){
    //random dice
    const d = Math.trunc(Math.random()*6)+1;
    console.log(d);
    
    //displaying the dice 
    Dice.classList.remove('hidden');
    Dice.src = `dice-${d}.png`;

    //check for rolled 1
    if (d !== 1)
    {
        currentscore = currentscore + d;
        document.getElementById(`current--${activePlayer}`).textContent = currentscore;
        
    }
    else 
    {   
        switchPlayer();
       
    }
})

//HOLD BUTTON 
btnhold.addEventListener('click', function(){
    console.log("hold");
    scores[activePlayer] = scores[activePlayer] + currentscore;
    console.log(scores[activePlayer]);
    if(activePlayer === 0)
    {
        score0.textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            document.getElementById('name--0').textContent="WINNER";
            
        }
    }
    else
    {
        score1.textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            document.getElementById('name--1').textContent="WINNER";
        }
    }
    

    //when holds, another player switches
    switchPlayer();
})


//NEW GAME BUTTON

btnNew.addEventListener('click', function(){
    currentscore = 0;
    document.getElementById('current--0').textContent = currentscore;
    document.getElementById('current--1').textContent = currentscore;
    //starting values
    score0.textContent='0';
    score1.textContent='0';
    Dice.classList.add('hidden');
    activePlayer=1;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active'); 

})