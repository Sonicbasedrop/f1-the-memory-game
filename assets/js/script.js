(() => {
    "use strict";
  
    let click1 = {},
      click2 = {},
      level = "medium",
      numStars = 3,
      pairs = 8,
      gameStarted,
      matches,
      moves,
      timer,
      twoStar,
      oneStar;

            //creating and initializing an object instance for the Card class.  
    class Card {
          constructor(card, num) {
          let cardID = card.id + "-" + num;
          this.id = "#" + card.id + "-" + num;
          this.image = card.image;
          this.name = card.name;
          this.html = `<div class="card" id="${cardID}">
            <div class="card-back">
              <img src="assets/images/${this.image}" class="card-image" >
            </div>
            <div class="card-front">
              <img src="assets/images/back_face.png" class="card-image" >
            </div>
          </div>`;
        }
      }
          // Constant levels
      const setLevel = level => {
        $("#startModal").hide();
        pairs = gameLevels[level].pairs;
        twoStar = gameLevels[level].twoStar;
        oneStar = gameLevels[level].oneStar;
        $("#game-board").removeClass("easy medium hard");
        $("#game-board").addClass(gameLevels[level].class);
      };


    })();
  