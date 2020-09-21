class Wijzer {

    constructor(scene, pos) {
        this.pos = pos
        this.wijzer_len = 0.45
        this.wijzer1_angle = 0
        this.wijzer1_speed = Math.random()
        this.wijzer2_angle = 0
        this.wijzer2_speed = Math.random()

        let material = new THREE.LineBasicMaterial( {color:"#000000"} );

        let geometry1 = new THREE.Geometry();
        geometry1.vertices.push(new THREE.Vector3(0,0,0)); //x, y, z
        geometry1.vertices.push(new THREE.Vector3(0,0,this.wijzer_len)); //x, y, z
        this.wijzer1_line = new THREE.Line(geometry1, material);
        scene.add(this.wijzer1_line);

        let geometry2 = new THREE.Geometry();
        geometry2.vertices.push(new THREE.Vector3(0,0,0)); //x, y, z
        geometry2.vertices.push(new THREE.Vector3(0,0,this.wijzer_len)); //x, y, z
        this.wijzer2_line = new THREE.Line(geometry2, material);
        scene.add(this.wijzer2_line);


    }

    update(d_time_ms) {
        // Math.PI
        this.wijzer1_angle += this.wijzer1_speed * d_time_ms / 1000
        this.wijzer1_line.rotation.x = this.wijzer1_angle
        this.wijzer1_line.position.y = this.pos.y
        this.wijzer1_line.position.z = this.pos.z

        this.wijzer2_angle += this.wijzer2_speed * d_time_ms / 1000
        this.wijzer2_line.rotation.x = this.wijzer2_angle
        this.wijzer2_line.position.y = this.pos.y
        this.wijzer2_line.position.z = this.pos.z
    }



}
  