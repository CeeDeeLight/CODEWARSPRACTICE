//You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
//You need to verify that you have some good ones left.

function anyArrows(arrows){
  // your code here
  return arrows.some(a => !a.damaged);
}