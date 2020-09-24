

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

    }
}