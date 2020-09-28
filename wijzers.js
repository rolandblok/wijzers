

class Wijzers {

    constructor(three_scene) {

      this.wijzers = {}

      for (let x = -15; x < 16; x++) {
        for (let y = -8; y< 9; y++) {
          this.wijzers[this.wi(x,y)]= new Wijzer(three_scene, new THREE.Vector3( x, y, 0))
        }
      }

    }

    update(d_time_ms) {
        for (let key in this.wijzers) {
            this.wijzers[key].update(d_time_ms)
        }
    }

    wi(x,y) {  // wijzer index
        return "" + x + "_" + y
    }

    /**
     * get wijzer at position
     * @param {*} x 
     * @param {*} y 
     */
    w(x,y) {    
        return this.wijzers[this.wi(x,y)]
    }
    /**
     * get wijzer wrt offset
     */
    wo(xo,yo, x, y ) {
        return this.wijzers[this.wi(xo+x,yo+y)]
    }

    erase_number(x, y) {
        for(let xi = 0; xi < 4; xi++) {
            for(let yi = 0; yi < 6; yi++)
                this.wo(x,y,xi,yi).random_speed()
        }
        return this.character_width() 
    }

    character_width() {
        return 4
    }
    write(n, x, y) {
        if (typeof n == "number") { n = ''+n }

        if (n == '0') { return this.zero(x,y) }
        if (n == '1') { return this.one(x,y) }
        if (n == '2') { return this.two(x,y) }
        if (n == '3') { return this.three(x,y) }
        if (n == '4') { return this.four(x,y) }
        if (n == '5') { return this.five(x,y) }
        if (n == '6') { return this.six(x,y) }
        if (n == '7') { return this.seven(x,y) }
        if (n == '8') { return this.eight(x,y) }
        if (n == '9') { return this.nine(x,y) }
        if (n == ':') { return this.double_dot(x,y) }
        if (n == 'e') { return this.E(x,y) }
        if (n == 'h') { return this.H(x,y) }
        if (n == 'l') { return this.L(x,y) }
        if (n == 'o') { return this.zero(x,y) }
    }

    zero(x,y) {
       
        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, d)
        this.wo(x,y, 1, 4).target(d, r)
        this.wo(x,y, 2, 4).target(l, d)
        this.wo(x,y, 3, 4).target(u, d)

        this.wo(x,y, 0, 3).target(u, d)
        this.wo(x,y, 1, 3).target(u, d)
        this.wo(x,y, 2, 3).target(u, d)
        this.wo(x,y, 3, 3).target(u, d)

        this.wo(x,y, 0, 2).target(u, d)
        this.wo(x,y, 1, 2).target(u, d)
        this.wo(x,y, 2, 2).target(u, d)
        this.wo(x,y, 3, 2).target(u, d)

        this.wo(x,y, 0, 1).target(u, d)
        this.wo(x,y, 1, 1).target(u, r)
        this.wo(x,y, 2, 1).target(l, u)
        this.wo(x,y, 3, 1).target(u, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)

        return this.character_width()
    }

    one(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, d)
        this.wo(x,y, 3, 5).target(dl, dl)

        this.wo(x,y, 0, 4).target(u, r)
        this.wo(x,y, 1, 4).target(l, d)
        this.wo(x,y, 2, 4).target(u, d)
        this.wo(x,y, 3, 4).target(dl, dl)

        this.wo(x,y, 0, 3).target(dl, dl)
        this.wo(x,y, 1, 3).target(u, d)
        this.wo(x,y, 2, 3).target(u, d)
        this.wo(x,y, 3, 3).target(dl, dl)

        this.wo(x,y, 0, 2).target(dl, dl)
        this.wo(x,y, 1, 2).target(u, d)
        this.wo(x,y, 2, 2).target(u, d)
        this.wo(x,y, 3, 2).target(dl, dl)

        this.wo(x,y, 0, 1).target(d, r)
        this.wo(x,y, 1, 1).target(l, u)
        this.wo(x,y, 2, 1).target(u, r)
        this.wo(x,y, 3, 1).target(l, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    }
    two(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, r)
        this.wo(x,y, 1, 4).target(l, r)
        this.wo(x,y, 2, 4).target(l, d)
        this.wo(x,y, 3, 4).target(u, d)

        this.wo(x,y, 0, 3).target(d, r)
        this.wo(x,y, 1, 3).target(l, r)
        this.wo(x,y, 2, 3).target(l, u)
        this.wo(x,y, 3, 3).target(u, d)

        this.wo(x,y, 0, 2).target(u, d)
        this.wo(x,y, 1, 2).target(d, r)
        this.wo(x,y, 2, 2).target(l, r)
        this.wo(x,y, 3, 2).target(u, l)

        this.wo(x,y, 0, 1).target(u, d)
        this.wo(x,y, 1, 1).target(u, r)
        this.wo(x,y, 2, 1).target(l, r)
        this.wo(x,y, 3, 1).target(l, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    }
    three(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, r)
        this.wo(x,y, 1, 4).target(l, r)
        this.wo(x,y, 2, 4).target(l, d)
        this.wo(x,y, 3, 4).target(u, d)

        this.wo(x,y, 0, 3).target(d, r)
        this.wo(x,y, 1, 3).target(l, r)
        this.wo(x,y, 2, 3).target(l, u)
        this.wo(x,y, 3, 3).target(u, d)

        this.wo(x,y, 0, 2).target(u, r)
        this.wo(x,y, 1, 2).target(l, r)
        this.wo(x,y, 2, 2).target(l, d)
        this.wo(x,y, 3, 2).target(u, d)

        this.wo(x,y, 0, 1).target(d, r)
        this.wo(x,y, 1, 1).target(l, r)
        this.wo(x,y, 2, 1).target(l, u)
        this.wo(x,y, 3, 1).target(u, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    }

    four(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, d)
        this.wo(x,y, 2, 5).target(d, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, d)
        this.wo(x,y, 1, 4).target(u, d)
        this.wo(x,y, 2, 4).target(u, d)
        this.wo(x,y, 3, 4).target(u, d)

        this.wo(x,y, 0, 3).target(u, d)
        this.wo(x,y, 1, 3).target(u, r)
        this.wo(x,y, 2, 3).target(l, u)
        this.wo(x,y, 3, 3).target(u, d)

        this.wo(x,y, 0, 2).target(u, r)
        this.wo(x,y, 1, 2).target(l, r)
        this.wo(x,y, 2, 2).target(l, d)
        this.wo(x,y, 3, 2).target(u, d)

        this.wo(x,y, 0, 1).target(dl, dl)
        this.wo(x,y, 1, 1).target(dl, dl)
        this.wo(x,y, 2, 1).target(u, d)
        this.wo(x,y, 3, 1).target(u, d)

        this.wo(x,y, 0, 0).target(dl, dl)
        this.wo(x,y, 1, 0).target(dl, dl)
        this.wo(x,y, 2, 0).target(u, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    }

    five(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, d)
        this.wo(x,y, 1, 4).target(d, r)
        this.wo(x,y, 2, 4).target(l, r)
        this.wo(x,y, 3, 4).target(l, u)

        this.wo(x,y, 0, 3).target(u, d)
        this.wo(x,y, 1, 3).target(u, r)
        this.wo(x,y, 2, 3).target(l, r)
        this.wo(x,y, 3, 3).target(l, d)

        this.wo(x,y, 0, 2).target(u, r)
        this.wo(x,y, 1, 2).target(l, r)
        this.wo(x,y, 2, 2).target(l, d)
        this.wo(x,y, 3, 2).target(u, d)

        this.wo(x,y, 0, 1).target(d, r)
        this.wo(x,y, 1, 1).target(l, r)
        this.wo(x,y, 2, 1).target(l, u)
        this.wo(x,y, 3, 1).target(u, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    }

    six(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, d)
        this.wo(x,y, 1, 4).target(d, r)
        this.wo(x,y, 2, 4).target(l, r)
        this.wo(x,y, 3, 4).target(l, u)

        this.wo(x,y, 0, 3).target(u, d)
        this.wo(x,y, 1, 3).target(u, r)
        this.wo(x,y, 2, 3).target(l, r)
        this.wo(x,y, 3, 3).target(l, d)

        this.wo(x,y, 0, 2).target(u, d)
        this.wo(x,y, 1, 2).target(d, r)
        this.wo(x,y, 2, 2).target(l, d)
        this.wo(x,y, 3, 2).target(u, d)

        this.wo(x,y, 0, 1).target(u, d)
        this.wo(x,y, 1, 1).target(u, r)
        this.wo(x,y, 2, 1).target(l, u)
        this.wo(x,y, 3, 1).target(u, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    }

    seven(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, r)
        this.wo(x,y, 1, 4).target(l, r)
        this.wo(x,y, 2, 4).target(l, d)
        this.wo(x,y, 3, 4).target(u, d)

        this.wo(x,y, 0, 3).target(dl, dl)
        this.wo(x,y, 1, 3).target(d, r)
        this.wo(x,y, 2, 3).target(l, u)
        this.wo(x,y, 3, 3).target(u, d)

        this.wo(x,y, 0, 2).target(dl, dl)
        this.wo(x,y, 1, 2).target(u, d)
        this.wo(x,y, 2, 2).target(d, r)
        this.wo(x,y, 3, 2).target(l, u)

        this.wo(x,y, 0, 1).target(dl, dl)
        this.wo(x,y, 1, 1).target(u, d)
        this.wo(x,y, 2, 1).target(u, d)
        this.wo(x,y, 3, 1).target(dl, dl)

        this.wo(x,y, 0, 0).target(dl, dl)
        this.wo(x,y, 1, 0).target(u, r)
        this.wo(x,y, 2, 0).target(l, u)
        this.wo(x,y, 3, 0).target(dl, dl)
        return this.character_width()
    }

    eight(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, d)
        this.wo(x,y, 1, 4).target(d, r)
        this.wo(x,y, 2, 4).target(l, d)
        this.wo(x,y, 3, 4).target(u, d)

        this.wo(x,y, 0, 3).target(u, d)
        this.wo(x,y, 1, 3).target(u, r)
        this.wo(x,y, 2, 3).target(l, u)
        this.wo(x,y, 3, 3).target(u, d)

        this.wo(x,y, 0, 2).target(u, d)
        this.wo(x,y, 1, 2).target(d, r)
        this.wo(x,y, 2, 2).target(l, d)
        this.wo(x,y, 3, 2).target(u, d)

        this.wo(x,y, 0, 1).target(u, d)
        this.wo(x,y, 1, 1).target(u, r)
        this.wo(x,y, 2, 1).target(l, u)
        this.wo(x,y, 3, 1).target(u, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    }

    nine(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, d)
        this.wo(x,y, 1, 4).target(d, r)
        this.wo(x,y, 2, 4).target(l, d)
        this.wo(x,y, 3, 4).target(u, d)

        this.wo(x,y, 0, 3).target(u, d)
        this.wo(x,y, 1, 3).target(u, r)
        this.wo(x,y, 2, 3).target(l, u)
        this.wo(x,y, 3, 3).target(u, d)

        this.wo(x,y, 0, 2).target(u, r)
        this.wo(x,y, 1, 2).target(l, r)
        this.wo(x,y, 2, 2).target(l, d)
        this.wo(x,y, 3, 2).target(u, d)

        this.wo(x,y, 0, 1).target(d, r)
        this.wo(x,y, 1, 1).target(l, r)
        this.wo(x,y, 2, 1).target(l, u)
        this.wo(x,y, 3, 1).target(u, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    }

    E(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, r)
        this.wo(x,y, 2, 5).target(l, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, d)
        this.wo(x,y, 1, 4).target(d, r)
        this.wo(x,y, 2, 4).target(l, r)
        this.wo(x,y, 3, 4).target(l, u)

        this.wo(x,y, 0, 3).target(u, d)
        this.wo(x,y, 1, 3).target(u, r)
        this.wo(x,y, 2, 3).target(l, r)
        this.wo(x,y, 3, 3).target(l, d)

        this.wo(x,y, 0, 2).target(u, d)
        this.wo(x,y, 1, 2).target(d, r)
        this.wo(x,y, 2, 2).target(l, r)
        this.wo(x,y, 3, 2).target(l, u)

        this.wo(x,y, 0, 1).target(u, d)
        this.wo(x,y, 1, 1).target(u, r)
        this.wo(x,y, 2, 1).target(l, r)
        this.wo(x,y, 3, 1).target(l, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    
    }

    H(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, d)
        this.wo(x,y, 2, 5).target(d, r)
        this.wo(x,y, 3, 5).target(l, d)

        this.wo(x,y, 0, 4).target(u, d)
        this.wo(x,y, 1, 4).target(u, d)
        this.wo(x,y, 2, 4).target(u, d)
        this.wo(x,y, 3, 4).target(u, d)

        this.wo(x,y, 0, 3).target(u, d)
        this.wo(x,y, 1, 3).target(u, r)
        this.wo(x,y, 2, 3).target(l, u)
        this.wo(x,y, 3, 3).target(u, d)

        this.wo(x,y, 0, 2).target(u, d)
        this.wo(x,y, 1, 2).target(d, r)
        this.wo(x,y, 2, 2).target(l, d)
        this.wo(x,y, 3, 2).target(u, d)

        this.wo(x,y, 0, 1).target(u, d)
        this.wo(x,y, 1, 1).target(u, d)
        this.wo(x,y, 2, 1).target(u, d)
        this.wo(x,y, 3, 1).target(u, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, u)
        this.wo(x,y, 2, 0).target(u, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    }
    L(x,y) {

        this.wo(x,y, 0, 5).target(d, r)
        this.wo(x,y, 1, 5).target(l, d)
        this.wo(x,y, 2, 5).target(dl, dl)
        this.wo(x,y, 3, 5).target(dl, dl)

        this.wo(x,y, 0, 4).target(u, d)
        this.wo(x,y, 1, 4).target(u, d)
        this.wo(x,y, 2, 4).target(dl, dl)
        this.wo(x,y, 3, 4).target(dl, dl)

        this.wo(x,y, 0, 3).target(u, d)
        this.wo(x,y, 1, 3).target(u, d)
        this.wo(x,y, 2, 3).target(dl, dl)
        this.wo(x,y, 3, 3).target(dl, dl)

        this.wo(x,y, 0, 2).target(u, d)
        this.wo(x,y, 1, 2).target(u, d)
        this.wo(x,y, 2, 2).target(dl, dl)
        this.wo(x,y, 3, 2).target(dl, dl)

        this.wo(x,y, 0, 1).target(u, d)
        this.wo(x,y, 1, 1).target(u, r)
        this.wo(x,y, 2, 1).target(l, r)
        this.wo(x,y, 3, 1).target(l, d)

        this.wo(x,y, 0, 0).target(u, r)
        this.wo(x,y, 1, 0).target(l, r)
        this.wo(x,y, 2, 0).target(l, r)
        this.wo(x,y, 3, 0).target(l, u)
        return this.character_width()
    
    }

    double_dot (x,y) {
        //this.wo(x,y, 0, 5).target(dl, dl)
        //this.wo(x,y, 1, 5).target(dl, dl)
        //this.wo(x,y, 2, 5).target(dl, dl)
        //this.wo(x,y, 3, 5).target(dl, dl)

        //this.wo(x,y, 0, 4).target(dl, dl) 
        this.wo(x,y, 1, 4).target(d, r)
        this.wo(x,y, 2, 4).target(l, d)
        //this.wo(x,y, 3, 4).target(dl, dl)

        //this.wo(x,y, 0, 3).target(dl, dl)
        this.wo(x,y, 1, 3).target(u, r)
        this.wo(x,y, 2, 3).target(l, u)
        //this.wo(x,y, 3, 3).target(dl, dl)

        //this.wo(x,y, 0, 2).target(dl, dl)
        this.wo(x,y, 1, 2).target(d, r)
        this.wo(x,y, 2, 2).target(l, d)
        //this.wo(x,y, 3, 2).target(dl, dl)

        //this.wo(x,y, 0, 1).target(dl, dl)
        this.wo(x,y, 1, 1).target(u, r)
        this.wo(x,y, 2, 1).target(l, u)
        //this.wo(x,y, 3, 1).target(dl, dl)

        //this.wo(x,y, 0, 0).target(dl, dl)
        //this.wo(x,y, 1, 0).target(dl, dl)
        //this.wo(x,y, 2, 0).target(dl, dl)
        //this.wo(x,y, 3, 0).target(dl, dl)
        return this.character_width()
    }
}