var totalDrums = document.getElementsByClassName("drum");
var sounds = ['crash','kick-bass','snare','tom-1','tom-2','tom-3','tom-4'];

for(let i=0;i<totalDrums.length;i++)
{
        totalDrums[i].addEventListener("click",function(){

        new Audio("/sounds/"+sounds[i]+".mp3").play();
        this.style.color = "white";

        setTimeout(() => {
            this.style.color = "red";
        },150);
    
    })

    // totalDrums[i].addEventListener("m",function(){

    //     new Audio("/sounds/"+sounds[i]+".mp3").play();
    //     this.style.color = "white";

    //     setTimeout(() => {
    //         this.style.color = "red";
    //     },150);
    
    // })
}

// function playSound(key)
// {
//     var button = document.querySelector(".key");
//     if(button != null)
//     {

//     }
//     switch (key) {
//         case 'w':
//             new Audio("/sounds/"+sounds[0]+".mp3").play();
//             break;
//         case 'a':
//             new Audio("/sounds/"+sounds[1]+".mp3").play();
//             break;
//         case 's':
//             new Audio("/sounds/"+sounds[2]+".mp3").play();
//             break;
//         case 'd':
//             new Audio("/sounds/"+sounds[3]+".mp3").play();
//             break;
//         case 'j':
//             new Audio("/sounds/"+sounds[4]+".mp3").play();
//             break;
//         case 'k':
//             new Audio("/sounds/"+sounds[5]+".mp3").play();
//             break;
//         case 'l':
//             new Audio("/sounds/"+sounds[6]+".mp3").play();
//             break;
    
//         default:
//             console.log(a);
//             break;
//     }
// }

document.addEventListener("keydown", function(event){
    var button = document.querySelector("."+event.key);
    if(button != null)
        button.click();
    console.log(event);
})