function ResponseMatrix(responses) {
  
  var KeyValueArray = [];
  var ValueOnlyArray = []
  
  for( [k,v] in responses.namedValues){
    KeyValueArray.push([k, v]);
    ValueOnlyArray.push(v);
  }
  
  return {KeyValueArray : KeyValueArray, ValueOnlyArray:ValueOnlyArray};
}

