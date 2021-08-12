"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var invisible =
/*#__PURE__*/
function () {
  function invisible(x, y) {
    _classCallCheck(this, invisible);

    var options = {
      isStatic: true
    };
    this.body = Bodies.rectangle(x, y, 150, 5, options);
    this.width = 150;
    this.height = 5;
    World.add(world, this.body);
  }

  _createClass(invisible, [{
    key: "display",
    value: function display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(1);
      stroke('black');
      fill("black");
      rectMode(CENTER); // rect (0, 0, this.width, this.height);

      pop();
    }
  }]);

  return invisible;
}();

;