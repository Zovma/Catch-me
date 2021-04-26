
let t = 60;
let counter = 0;

window.onload = function () {
    document.getElementById('butn1').onclick = chengeNum
    document.getElementById('butn2').onclick = chengeNum
    document.getElementById('butn3').onclick = chengeNum
    document.getElementById('butn4').onclick = chengeNum
    document.getElementById('butn5').onclick = chengeNum
    document.getElementById('butn6').onclick = chengeNum
    document.getElementById('butn7').onclick = chengeNum
    document.getElementById('butn8').onclick = chengeNum
    document.getElementById('butn9').onclick = chengeNum
    document.getElementById('butn10').onclick = chengeNum
    let comment = document.getElementById('comment')
    
}

window.addEventListener('load', function () {
    setInterval(randomChange, 100);
}, false);

window.addEventListener('click', deleteClassName)

function randomChange() {
    let array = document.getElementsByTagName('input')
    for (let i = 0; i < array.length; i++) {
        let num1 = getRandomArbitrary(-35, 35)
        let num2 = getRandomArbitrary(-35, 35)
        let position = array[i].getBoundingClientRect()
        let left = position.x + num1
        let top = position.y + num2
        while (left < 0) {
            let num1 = getRandomArbitrary(0, +35)
            left += num1
        }
        while (top < 0) {
            let num2 = getRandomArbitrary(0, +35)
            top += num2
        }
        while (left > 393) {
            let num1 = getRandomArbitrary(-35, 0)
            left += num1

        }
        while (left > 393 || top > 768) {
            let num2 = getRandomArbitrary(-35, 0)
            top += num2
        }
        array[i].style.left = left + "px"
        array[i].style.top = top + "px"



    }
}



function chengeNum() {
    soundClick()
    counter++

    document.getElementById('num').innerHTML = counter
    if (counter == 5) {
        document.getElementById('comment').innerHTML = 'Что-то в тебе есть...'
    }
    else if (counter == 10) {
        document.getElementById('comment').innerHTML = 'Жми, жми! на кнопки...'
    }
    else if (counter == 15) {
        document.getElementById('comment').innerHTML = 'Вау, идём на рекорд!'
    }
    else if (counter == 20) {
        document.getElementById('comment').innerHTML = 'Меткость твоё второе имя!'
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = './Sound_11084.wav'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}



function deleteClassName() {
    console.log("run");
    let buttons = document.getElementsByTagName('input')
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
        console.log(i);
        buttons[i].classList.remove('notVisible')
    }
    setInterval(function () {
        if (t == 0) {
            // alert('Пойманых кнопок ' + [counter] + ', Cпасибо за игру!')
            document.write("<h2>Это была великолепная игра! " + '<br>' + " Пойманых кнопок " + [counter] + "</h2>")
        }
        t -= 1
        document.getElementById('timer').innerHTML = t
    }, 1000)

    document.getElementById('click').innerHTML = ''

    this.removeEventListener("click", deleteClassName)

}
