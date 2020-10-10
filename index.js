var cloudElement = document.getElementById("cloud-div")
var animatedElem = cloudElement.animate([
{ transform: 'translate(600px,0'},
{ transform: 'translate(0,0)'},



],{
    duration:5000,
    iterations: Infinity,
    playbackRate: -2  // it does less flickering
})

var planeElement = document.getElementById('plane-div')
var planeInAnimation = planeElement.animate(
    [
        { transform: 'translate(0,0'},
{ transform: 'translate(1600px,0)'},

],{
    duration:3000,
    iterations: Infinity,
    playbackRate: -2  // it does less flickering
})