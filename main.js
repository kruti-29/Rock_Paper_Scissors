const main_box=document.getElementById('main');
const user_score_span=document.getElementById('user_score');
const com_score_span=document.getElementById('com_score');
const result_show=document.getElementById('result_text');
const rock_div=document.getElementById('rock')
const paper_div=document.getElementById('paper')
const scissors_div=document.getElementById('scissors')
const final=document.getElementById('round_result')

let urscore=0;
let cmscore=0;

function computerchoice()
{
    let choice = ['rock','paper','scissors']
    let comp_choice=Math.floor(Math.random()*3)
    return choice[comp_choice];
}



function startGame(userchoice){
    let comchoice=computerchoice();

    if(userchoice==comchoice)
    {
        result_show.textContent = `Computer and You both have same choice${comchoice}.....so it's a Draw!!!!`
        return 'draw';
    }
    else if((userchoice=='scissors' && comchoice=='paper')||(userchoice=='rock' && comchoice=='scissors')||(userchoice=='paper' && comchoice=='rock'))
    {
        result_show.textContent=`Computer has ${comchoice} so Computer failed against ${userchoice}.....Youuuu Wonnnn!!!!`
        urscore++;
        user_score_span.textContent=urscore;
        return 'win';
    }
    else if((userchoice=='scissors' && comchoice=='rock')||(userchoice=='rock' && comchoice=='paper')||(userchoice=='paper' && comchoice=='scissors'))
    {
        result_show.textContent=`You have ${userchoice} so you failed against ${comchoice}.....Computerrr Wonnnn!!!!` 
        cmscore++;
        com_score_span.textContent=cmscore;
        return 'loss';
    }
}



function roundresult()
{
    console.log(urscore)
    console.log(cmscore);
    if(urscore>=5)
    {
        final.textContent="Yeeeee....You won the Game"
        urscore=0;
        cmscore=0;
    }
    else if(cmscore>=5)
    {
        final.textContent="Ooopss....You lost the Game"
        urscore=0;
        cmscore=0;
    }
    // setTimeout(()=>{final.textContent=""},5000)
}

/*
function result_style(result, e) {
    if (result == 'win') {
        e.classList.add("win")
        setTimeout(() => { e.classList.remove('win') }, 1000);
    }
    else if (result == 'draw') {
        e.classList.add("draw")
        setTimeout(() => { e.classList.remove('draw') }, 1000);
    }
    else{
        e.classList.add("lose")
        setTimeout(() => { e.classList.remove('lose') }, 1000);
    }
} */


rock_div.onclick=(e)=>{
    let result=startGame('rock');
    // result_text();
    roundresult();
    // result_style(result,rock_div);
}
paper_div.onclick=(e)=>{
    let result=startGame('paper');
    // result_text();
    roundresult();
    // result_style(result,paper_div);
}
scissors_div.onclick=(e)=>{
    let result=startGame('scissors');
    // result_text();
    roundresult();
    // result_style(result,scissors_div);
}

