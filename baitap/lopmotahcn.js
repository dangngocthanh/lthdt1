function Rectangle(height, width) {
    this.height = height
    this.width = width
    this.perimeter = function () {
        return 'chu vi: ' + (this.height + this.width) * 2
    }
    this.area = function () {
        return 'dien tich: ' + this.height * this.width
    }
    this.setRectangle = function (height, width) {
        this.height = height
        this.width = width
    }
    this.drawCanvas = function () {
        let ctx = document.getElementById('myCanvas').getContext('2d')
        ctx.fillRect(20, 20, this.width, this.height)
    }
    this.clear = function () {
        let ctx = document.getElementById('myCanvas').getContext('2d')
        ctx.clearRect(0, 0, 1368, 768,)

    }
}

let get = new Rectangle(140, 70)
get.drawCanvas()
if (confirm()) {
    get.setRectangle(200, 120)
    get.clear()
    get.drawCanvas()
    document.getElementById('perimeter').innerHTML=get.perimeter()
    document.getElementById('area').innerHTML=get.area()
}





