function Circle(x,y,radius){
    this.x=x
    this.y=y
    this.radius=radius
}
/*function CreateCircle(){
    let ctx= document.getElementById('myCanvas').getContext('2d')
    let circle=new Circle(500,500,80)
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI)
    ctx.fill()
}
CreateCircle()*/
// ve hinh tron voi ban kinh co dinh
/*function CreateCircle(){
    let ctx= document.getElementById('myCanvas').getContext('2d')
    let radius = Math.floor(Math.random() * 80)
    let circle=new Circle(500,500,radius)
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI)
    ctx.fill()
}
CreateCircle()*/
// ve hinh tron voi ban kinh ngau nhien
/*function CreateCircle(){
    let ctx= document.getElementById('myCanvas').getContext('2d')
    let radius= Math.floor(Math.random()*80)
    let circle=new Circle(500,500,radius)
    let color = getRandomColor()
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI)
    ctx.fillStyle= color
    ctx.fill()
}
function getRandomhex(){
    return Math.floor(Math.random()*255)
}
function getRandomColor(){
    let red= getRandomhex()
    let blue= getRandomhex()
    let green= getRandomhex()
        return "rgb("+ red + ','+blue+','+green+")"
}
CreateCircle()*/
// ve hinh tron mau random
/*function CreateCircle(){
    let ctx= document.getElementById('myCanvas').getContext('2d')
    let radius= Math.floor(Math.random()*80)
    let x= Math.random()*window.innerWidth
    let y= Math.random()*window.innerHeight
    let circle=new Circle(x,y,radius)
    let color = getRandomColor()
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI)
    ctx.fillStyle= color
    ctx.fill()
}
function getRandomhex(){
    return Math.floor(Math.random()*255)
}
function getRandomColor(){
    let red= getRandomhex()
    let blue= getRandomhex()
    let green= getRandomhex()
    return "rgb("+ red + ','+blue+','+green+")"
}
CreateCircle()
CreateCircle()*/
// ve 2 hinh tron random mau va vi tri
function CreateCircle(){
    let ctx= document.getElementById('myCanvas').getContext('2d')
    let radius= Math.floor(Math.random()*80)
    let x= Math.random()*window.innerWidth
    let y= Math.random()*window.innerHeight
    let circle=new Circle(x,y,radius)
    let color = getRandomColor()
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI)
    ctx.fillStyle= color
    ctx.fill()
}
function getRandomhex(){
    return Math.floor(Math.random()*255)
}
function getRandomColor(){
    let red= getRandomhex()
    let blue= getRandomhex()
    let green= getRandomhex()
    return "rgb("+ red + ','+blue+','+green+")"
}
function CreateMultipleCircle(){
    for ( let i=0;i<1000;i++){
        CreateCircle()
    }
}
CreateMultipleCircle()
//ve 1000 hinh tron random mau va vi tri