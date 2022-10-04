// .section h2::after{
//     content: '';
//     display: block;
//     border-bottom: 3px solid #2980b9;
//     width: 100px;
//     margin: 15px auto;
// }

let playbtn = document.getElementById('playbtn')

let userChoice = document.getElementById('userChoice')
let compChoice = document.getElementById('compChoice')
let result = document.getElementById('final_result')


const game = a => {
    let value = a.toLowerCase()
    if (value === 's') {
        return 'stone'
    }
    else if (value === 'p') {
        return 'paper'
    }
    else if (value === 'k') {
        return 'scissors'
    }
}

const Play = () => {
    alert('Rules: s - stone, p - paper, k - scissors')
    var user = game(prompt('What You Choose? - s, p, k'))  // Use var, if used let then it won't work


    while (user != 'stone' && user != 'paper' && user != 'scissors') {
        alert('Please Enter the correct value!')
        var user = game(prompt('What You Choose? - s, p, k'))
    }


    let compChoices = ['stone', 'paper', 'scissors']
    let comp = compChoices[Math.floor(Math.random() * compChoices.length)]
    userChoice.innerHTML = user
    compChoice.innerHTML = comp
    var score
    var score1 = Number.parseInt(score)


    let compare = (c1, c2) => {
        if(c1 === c2){
            return 'tie'
        }
        else if(c1 === 'stone'){
            if(c2 === 'scissors'){
                return 'You Win'
            }
            else{return 'You Lose'}
        }
        else if(c1 === 'scissors'){
            if(c2 === 'paper'){
                return 'You Win'
            }
            else{return 'You Lose'}
        }
        else if(c1 === 'paper'){
            if(c2 === 'stone'){
                return 'You Win'
            }
            else{return 'You Lose'}
        }
    }
    let res = compare(user, comp)
    if(res === 'tie'){
        result.innerHTML = res
        result.style.color = 'yellow'
    }
    else if(res === 'You Win'){
        result.innerHTML = res
        result.style.color = 'green'
    }
    else if(res === 'You Lose'){
        result.innerHTML = res
        result.style.color = 'red'
    }
}