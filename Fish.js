AFRAME.registerComponent("fishes", {
    init: function(){
        for (var i = 1; i <= 40; i++){
            var id = `fish${i}`;
            var posX = (Math.random() * (25 - (-150)) + (-150));
            var posY = (Math.random() * (-7 - (-20)) + (-20));
            var posZ = (Math.random() * 120 + (-40));

            const position = {x: posX, y: posY, z: posZ};
            this.createFishes(id, position);
        }
    },

    createFishes: (id, position) => {
        var fishEl = document.createElement("a-entity")
        var swimmingEl = document.querySelector("#swimmingFish");

        fishEl.setAttribute("id", id);
        fishEl.setAttribute("position", position);

        fishEl.setAttribute("scale", {x:0.125, y:0.125, z:0.125});
        fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");
        fishEl.setAttribute("rotation", {x:0, y:(Math.random() * (170 - (190)) + (190)), z:0});

        fishEl.setAttribute("animation", {
            property: "position",
            to: "100 10 -20",
            loop: "true",
            dur: (Math.random() * (20000 - (90000)) + (90000)),
          });

          fishEl.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 2,
        })

        fishEl.setAttribute("game_play", {
            elementId: `#${id}`,
          });

        swimmingEl.appendChild(fishEl);
    }

});