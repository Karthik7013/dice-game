var refresh_btn = document.getElementById("refresh")
refresh_btn.addEventListener("click", rand)



const list = ["", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]
function rand() {
    // player 1
    var num1 = Math.floor(Math.random() * 6 + 1)
    var temp = document.getElementById("player1")
    temp.setAttribute("src", list[num1])



    // player 2
    var num2 = Math.floor(Math.random() * 6 + 1)
    var temp2 = document.getElementById("player2")
    temp2.setAttribute("src", list[num2])



    if (num1 > num2) {
        var result = document.getElementById("status")
        result.innerHTML = "player_1 wins"
    } else if (num1 < num2) {
        var result = document.getElementById("status")
        result.innerHTML = "player_2 wins"
    } else {
        var result = document.getElementById("status")
        result.innerHTML = "Draw"
    }


}


