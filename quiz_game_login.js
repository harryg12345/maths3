 function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("p1_key", player1_name);
    localStorage.setItem("p2_key", player2_name);

    window.location = "quiz_game_page.html";
}
        
