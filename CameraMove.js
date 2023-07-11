AFRAME.registerComponent("camera_rotation",{
    schema:{
        speedOfRotation: {type:"number", default: 0},
        speedOfAscent: {type:"number", default: 0}
    },

    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speedOfRotation = this.el.getAttribute("rotation");
            this.data.speedOfAscent = this.el.getAttribute("position")

            var cameraRotation = this.data.speedOfRotation;
            var cameraPosition = this.data.speedOfAscent;

            if(e.key === "ArrowRight"){
                if(cameraRotation.y > -10){
                    cameraRotation.y -= 0.5;
                    this.el.setAttribute("rotation", cameraRotation)
                }
            }
            if(e.key === "ArrowLeft"){
                if(cameraRotation.y < 10){
                    cameraRotation.y += 0.5;
                    this.el.setAttribute("rotation", cameraRotation)
                }
            }
            if(e.key === "w"){
                cameraPosition.z -= 0.05
            }
            if(e.key === "s"){
                cameraPosition.z += 0.05
            }
            if(e.key === "a"){
                cameraPosition.x -= 0.05
            }
            if(e.key === "d"){
                cameraPosition.x += 0.05
            }
        })
    },
})