const setofWords = [
    "My name is Tushar Giri and I am a Software Engineer",
    "Hope you are having fun this is a single game you can make"
]

const msg=document.getElementById('msg');
const myword=document.getElementById('mywords');
const btn=document.getElementById('btn');
let startTime , endTime;

const playGame= () =>{
    let randomNumber =Math.floor(Math.random()*setofWords.length);
    msg.innerText=setofWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";    
}

const endPlay= () => {
    let date = new Date();
    endTime= date.getTime();
    let totalTime = ((endTime - startTime)/ 1000);
    console.log(totalTime);

    let totalStr= myword.value;
    let wordCount= wordCounter(totalStr);

    let speed= Math.round((wordCount / totalTime) * 60);

    let finalMsg =" You typed total at " +speed+ " words per minute. ";
    finalMsg += compareWords(msg.innerText,totalStr);

    msg.innerText=finalMsg;
}

const compareWords = (str1, str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item,index){
        if(item==words2[index]){
            cnt++;
        }
        
    });

    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + "words and the total number of error are "+ errorWords + ".");

}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}


btn.addEventListener('click',function(){
    if(this.innerText =='Start'){
        myword.disabled =false;
        playGame();
    }else if(this.innerText == "Done"){
        myword.disabled = true;
        btn.innerText ="Start";
        endPlay();
    }
})

