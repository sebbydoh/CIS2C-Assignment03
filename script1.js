// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

/*
for (let i = 1; i <= 4; i++) {
  if (i == 1) {
    console.log("#");
  } else if (i == 2) {
    console.log("##");
  } else if (i == 3) {
      console.log("###")
  } else if (i == 4) {
      console.log("####");
  }
}
for (let i = 3; i >= 1; i--) {
  if (i == 3) {
      console.log("###");
  } else if (i == 2) {
      console.log("##");
  } else if (i == 1) {
      console.log("#");
  }
} */

for (let i = 1; i <= 4; i++) {
  let hash = "";
  for (let k = 1; k <= i; k++) {
    hash += "#";
  }
  console.log(hash);
}
for (let i = 3; i >= 1; i--) {
    let hash = "";
    for (let k = 1; k <= i; k++) {
      hash += "#";
    }
    console.log(hash);
}
