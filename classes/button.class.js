/*****************
 * Button object
 * @constructor
 * @param {string} buttonFace - a singular calc button key
 *
 **/

function Button(buttonFace, calcRef) {
  const self = this;
  this.calcRef = calcRef;
  this.face = buttonFace;
  this.body = $("<div></div>", {
    class: "button",
    text: self.face,
    click: function() {
      //needs a calculaton object to pass information to
      self.calcRef.updateFace(self.face);
    }
  });
  //on creation button returns a reference to its DOM element
  return this.body;
}
