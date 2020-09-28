
class ShowList {

    constructor(wijzers) {
        this.wijzers = wijzers
        this.show_list_iter = 0;
        this.show_lists = 6
        this.count_down_time = -1;
    }

    update(d_time_ms) {
        this.count_down_time -= d_time_ms

        if (this.count_down_time < 0) {

            if (this.show_list_iter == 0) { this.set_text("hello") } 
            else if (this.show_list_iter == 1) { this.remove_text("hello") }
            else if (this.show_list_iter == 2) { this.set_time() }
            else if (this.show_list_iter == 3) { this.remove_time() } 
            else if (this.show_list_iter == 4) { this.set_one_2_ten() } 
            else if (this.show_list_iter == 5) { this.remove_one_2_ten() }
            
            this.show_list_iter ++
            if (this.show_list_iter == this.show_lists) {
                this.show_list_iter = 0
              }
  
        }
      
    }
    /**
     * return typical duration {ms}
     */
    set_one_2_ten() {
        console.log("set_one_2_ten")
        this.wijzers.zero(-13,1)
        this.wijzers.one(-9,1)
        this.wijzers.two(-5,1)
        this.wijzers.three(-1,1)
        this.wijzers.four(3,1)

        this.wijzers.five(-6,-6)
        this.wijzers.six(-2,-6)
        this.wijzers.seven(2,-6)
        this.wijzers.eight(6,-6)
        this.wijzers.nine(10,-6)
        this.count_down_time = 13000;
    }

    remove_one_2_ten() {
        console.log("remove_one_2_ten")
        this.wijzers.erase_number(-13,1)
        this.wijzers.erase_number(-9,1)
        this.wijzers.erase_number(-5,1)
        this.wijzers.erase_number(-1,1)
        this.wijzers.erase_number(3,1)

        this.wijzers.erase_number(-6,-6)
        this.wijzers.erase_number(-2,-6)
        this.wijzers.erase_number(2,-6)
        this.wijzers.erase_number(6,-6)
        this.wijzers.erase_number(10,-6)
        this.count_down_time =  5000;
    }

    set_time() {
        console.log("set_time")
        let x = -10
        let y = -2

        let d = new Date()
        let h_str = d.getHours().toString().padStart(2,'0')
        x += 1 + this.wijzers.write(h_str.charAt(0), x, y)
        x += this.wijzers.write(h_str.charAt(1), x, y)

        x += this.wijzers.write(':', x, y)

        let m_str = d.getMinutes().toString().padStart(2,'0')
        x += 1 + this.wijzers.write(m_str.charAt(0), x, y)
        x += 1 + this.wijzers.write(m_str.charAt(1), x, y)

        

        this.count_down_time =  15000
    }
    
    remove_time() {
        console.log("remove_time")
        let x = -10
        let y = -2
        for (let i = 0; i < 2; i++) {
            this.wijzers.erase_number(x, y)
            x += 1 + this.wijzers.character_width()
        }
        this.wijzers.erase_number(x, y)
        x += -1 + this.wijzers.character_width()
        
        for (let i = 0; i < 2; i++) {
            this.wijzers.erase_number(x, y)
            x += 1 + this.wijzers.character_width()
        }
        this.count_down_time =  5000;
    }

    set_text(str) {
        console.log("set_text " + str)
        let x = -10
        let y = -2

        for (let i = 0; i < str.length; i++) {
            x += 1 + this.wijzers.write(str.charAt(i), x, y)
        }

        this.count_down_time =  15000
    }
    
    remove_text(str) {
        console.log("remove_text " + str)
        let x = -10
        let y = -2
        for (let i = 0; i < str.length; i++) {
            x += 1 + this.wijzers.erase_number( x, y)
        }

        this.count_down_time =  5000;
    }

}
        