AFRAME.registerComponent("game_play", {
    schema: {
        elementId: { type: "string", default: "#coin1" },    
      },
      update: function () {
        this.isCollided(this.data.elementId);
      },

      init: function () {
        var duration = 120;
        const timerEl = document.querySelector("#timer");
        this.updateTimer(duration, timerEl);
      },

      updateTimer: function (duration, timerEl) {
        setInterval(()=> {
          if (duration >= 0) {
            minutes = parseInt(duration/60);
            seconds = parseInt(duration%60);

            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10 ) {
              seconds = "0" + seconds;
            }

            timerEl.setAttribute("text", {
              value: minutes+":"+seconds,
            })
            duration-=1;
          } else {
            this.gameOver();
          }

        }, 1000)
      },
      
      isCollided: function (elemntId) {
        const element = document.querySelector(elemntId);
        element.addEventListener("collide", (e) => {
          if (elemntId.includes("#coin")) {
              element.setAttribute("visible", false);
              console.log("coin collision");
              this.updateScore();
              this.updateCoins();
          } else if (elemntId.includes("#fish")) {
              this.gameOver();
          }
        });
      },

      updateCoins: function () {
        var element = document.querySelector("#coinsLeft");
        var count = element.getAttribute("text").value;
        var currentCoins = parseInt(count);
        currentCoins -= 1;
        element.setAttribute("text", {
          value: currentCoins,
        })
      },

      updateScore: function () {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
          value: currentScore,
        })
      },

      gameOver: function () {
        const element = document.querySelector('#gameOver');
        const diver = document.querySelector("#scuba-diver");

        element.setAttribute("visible", true);
        diver.setAttribute("dynamic-body", {mass:1});
      }



});
