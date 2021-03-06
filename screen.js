function init() {
  screen = new Screen("wijzers");
  screen.startAnimLoop();
}


class Screen {

  constructor(name) {

      this.name = name;
 
      this.canvas = document.getElementById("canvas");
      this.canvas.addEventListener("mousedown", this, false);
      this.canvas.addEventListener("mouseup", this, false);
      this.canvas.addEventListener("mousemove", this, false);
      this.canvas.addEventListener("click", this, false);
      this.canvas.addEventListener("dblclick", this, false);
      //this.canvas.addEventListener("resize", this, false);

      this.canvas.addEventListener('keydown', this, false);
      this.canvas.addEventListener('keyup', this, false);
      this.canvas.addEventListener('wheel', this, false);
      let me = this // this is the-javascript-shiat!  https://stackoverflow.com/questions/4586490/how-to-reference-a-function-from-javascript-class-method
      window.addEventListener( 'resize', function bla(event) {
                console.log("resize " + me.name)
                me.THREEcamera.aspect = window.innerWidth / window.innerHeight;
                me.THREEcamera.updateProjectionMatrix();
                me.renderer.setSize(window.innerWidth, window.innerHeight);
              }, false );

      this.stats = new Stats();
      document.body.appendChild(this.stats.dom);

      /*
      this.rot_speed_x =  0.004;
      this.rot_speed_y =  0.008;

      this.gui = new dat.GUI();
      this.gui_speeds = this.gui.addFolder('speeds')

      this.gui_speeds.add(this, "rot_speed_x");
      this.gui_speeds.add(this, "rot_speed_y");
      this.gui_speeds.open();
      */

      // THREE / GL
      this.three_scene = new THREE.Scene();

      this.fov = 55
      this.THREEcamera = new THREE.PerspectiveCamera( this.fov, 1.33, 0.01, 2000 );
      
      //this.THREEcamera.up = new THREE.Vector3(0,   1,   0)
      this.THREEcamera.aspect = window.innerWidth / window.innerHeight;
      this.THREEcamera.fov = this.fov
      this.THREEcamera.position.set(0, 0, 20)
      this.THREEcamera.lookAt(new THREE.Vector3(0,   0,  0))
      this.THREEcamera.updateProjectionMatrix();
      
      this.three_light = new THREE.PointLight( "#ffffff", 1, 0 )
      this.three_light.position.set(-10, -0, -0)
      
      this.three_scene.add( this.three_light );

      this.raycaster = new THREE.Raycaster(); 

      this.wijzers = new Wijzers(this.three_scene)
      this.show_list = new ShowList(this.wijzers)

      this.renderer = new THREE.WebGLRenderer({canvas: this.canvas_g, antialias: true, depth: true});
      this.renderer.setClearColor( 0xffffff, 1);
      this.renderer.setSize( window.innerWidth, window.innerHeight);
      this.canvas = document.body.appendChild(this.renderer.domElement);

     
      this.last_update_time_ms = null;


  }

  

  startAnimLoop() {
    var me = this;
    window.requestAnimationFrame(function (cur_time) { me.animLoop(cur_time); });
  }

  animLoop(cur_time_ms) {
    var me = this; // https://stackoverflow.com/questions/4586490/how-to-reference-a-function-from-javascript-class-method
    

    if (this.last_update_time_ms == null) {
      // first time
    }
    this.stats.begin();

    //update
    if ((this.last_update_time_ms != null) && (cur_time_ms != null)){
        var d_time_ms = cur_time_ms - this.last_update_time_ms
        this.wijzers.update(d_time_ms)
        this.show_list.update(d_time_ms)
    }

    this.last_update_time_ms = cur_time_ms;

    // draw
    window.requestAnimationFrame(function (cur_time) { me.animLoop(cur_time); });
    this.render(d_time_ms);
    this.stats.end();

  }

  render(d_time_ms) {

    this.renderer.render(this.three_scene, this.THREEcamera)

  }
      



  _raycastMouseToTile(e){
    // some raycasting to deterimine the active tile.
    this.mouse_position.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    this.mouse_position.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    this.raycaster.setFromCamera( this.mouse_position, this.camera.THREEcamera);
    var intersects = this.raycaster.intersectObjects( this.three_scene.children );

    return intersects.map(x => x.object.name);
  }


  onmousemove(e) {
    //console.log(" onmousemove : " + e.x + " " + e.y)
    console.log(" onmousemove : ")
  }

  onmousedown(e) {
    console.log(" onmousedown : " + e.x + " " + e.y)
  }
  onmouseup(e) {
    console.log(" onmouseup : " + e.x + " " + e.y)
    // var game_object_ids = this._raycastMouseToTile(e);
  }

  keyDown(e){
    console.log(" keyDown : "+ e.x + " " + e.y)
  }

  keyUp(e){
    console.log(" keyUp : "+ e.x + " " + e.y)
  }

  wheel(e){
      console.log(" w " + e.deltaX + " " + e.deltaY + " " + e.deltaZ + " " + e.deltaMode)
  }

  handleEvent(evt) {
      //console.log("event type " + evt.type)
      switch (evt.type) {
          case "wheel":
              this.wheel(evt);
              break;
          case "keydown":
              this.keyDown(evt)
              break;
          case "mousemove":
              //mouse move also fires at click...
              this.onmousemove(evt);
              break;
          case "mousedown":
              this.onmousedown(evt);
              break;
          case "mouseup":
              this.onmouseup(evt);
              break;
          case "dblclick":
              break;
          case "keydown":
              this.keyDown(evt);
              break;
          case "keyup":
              this.keyUp(evt);
              break;
          default:
              return;
      }
  }


}
