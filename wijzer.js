
const u = 0           // up
const d = Math.PI     // down
const r = Math.PI/2   // right
const l = Math.PI*3/2 // left
const dl = Math.PI*5/4 // down left

class Wijzer {

    constructor(scene, pos) {
        this.pos = pos
        this.wijzer_len = 0.45
        this.wijzer1_angle = 0
        this.wijzer1_speed = 0.5 + Math.random() / 2.0
        this.wijzer2_angle = 0
        this.wijzer2_speed = 0.5 + Math.random() / 2.0
        this.wijzer1_angle_target = 0
        this.wijzer1_angle_target_set = false; 
        this.wijzer2_angle_target = 0
        this.wijzer2_angle_target_set = false; 
        

        let material = new THREE.LineBasicMaterial( {color:"#000000"} );

        let geometry1 = new THREE.Geometry();
        geometry1.vertices.push(new THREE.Vector3(0,0,0)); //x, y, z
        geometry1.vertices.push(new THREE.Vector3(0,this.wijzer_len, 0)); //x, y, z
        this.wijzer1_line = new THREE.Line(geometry1, material);
        scene.add(this.wijzer1_line);

        let geometry2 = new THREE.Geometry();
        geometry2.vertices.push(new THREE.Vector3(0,0,0)); //x, y, z
        geometry2.vertices.push(new THREE.Vector3(0,this.wijzer_len, 0)); //x, y, z
        this.wijzer2_line = new THREE.Line(geometry2, material);
        scene.add(this.wijzer2_line);


    }

    update(d_time_ms) {
        // Math.PI
        let wijzer1_angle_new = this.wijzer1_angle + this.wijzer1_speed * d_time_ms / 1000
        if (wijzer1_angle_new > 2 * Math.PI) {
            wijzer1_angle_new -= 2.0*Math.PI
        }
        if ((this.wijzer1_angle_target_set) && 
            (this.angle_in_range(this.wijzer1_angle, this.wijzer1_angle_target, wijzer1_angle_new ))) {
                this.wijzer1_angle = this.wijzer1_angle_target;
                this.wijzer1_angle_target_set = false;
                this.wijzer1_speed = 0
        } else {
            this.wijzer1_angle = wijzer1_angle_new;

        }

        this.wijzer1_line.rotation.z = -this.wijzer1_angle
        this.wijzer1_line.position.x = this.pos.x
        this.wijzer1_line.position.y = this.pos.y

        let wijzer2_angle_new =  this.wijzer2_angle + this.wijzer2_speed * d_time_ms / 1000
        if (wijzer2_angle_new> 2 * Math.PI) {
            wijzer2_angle_new -= 2.0*Math.PI
        }if ((this.wijzer2_angle_target_set) &&  
            (this.angle_in_range(this.wijzer2_angle, this.wijzer2_angle_target, wijzer2_angle_new ))) {
                this.wijzer2_angle = this.wijzer2_angle_target;
                this.wijzer2_angle_target_set = false;
                this.wijzer2_speed = 0 
        } else {
            this.wijzer2_angle = wijzer2_angle_new;

        }

        this.wijzer2_line.rotation.z = -this.wijzer2_angle
        this.wijzer2_line.position.x = this.pos.x
        this.wijzer2_line.position.y = this.pos.y
    }

    target(angle_1, angle_2) {
        this.wijzer1_angle_target = angle_1
        this.wijzer2_angle_target = angle_2
        this.wijzer1_angle_target_set = true
        this.wijzer2_angle_target_set = true
    }

    /**
     * check if angle middle is between lower and higher
     * Angle must be between 0 .. 2*pi
     * @param {} lower 
     * @param {*} middle 
     * @param {*} higher 
     */
    angle_in_range(lower, middle, higher) {
        if (higher < lower) { 
            higher += 2 * Math.PI
            if (middle < higher) {
                middle += 2* Math.PI
            }
        }
        if ((middle > lower) && (middle < higher)) {
            return true
        } else {
            return false
        }

    }

}
  