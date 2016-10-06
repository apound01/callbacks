const map = function(array, cbf){
  const numArray = [];
  for(var i = 0; i < array.length; i++) {

    const current_array = array[i]
    numArray.push(cbf(array[i]));
    }
  return numArray;;

}

const final = map(["ground", "control", "to", "major", "tom"], function(current){
  return current.length;
});

console.log(final);
