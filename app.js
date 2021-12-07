
let teamOnePoints = 0
let teamTwoPoints = 0


function teamOne() {
  teamOnePoints++
  document.getElementById("teamonepoints").innerText = teamOnePoints.toString()
}

function teamTwo(){
  teamTwoPoints++
  document.getElementById("teamtwopoints").innerText = teamTwoPoints.toString()

}

function teamonedec(){
  teamOnePoints--
  document.getElementById("teamonepoints").innerText = teamOnePoints.toString()
}

function teamtwodec(){
  teamTwoPoints--
  document.getElementById("teamtwopoints").innerText = teamTwoPoints.toString()
}


