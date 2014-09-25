var monkey = {
  indexWhere: function(list, matcherFunction) {
    for(var i = 0; i < list.length; i++) {
      if(matcherFunction(list[i])) {
        return i;
      }
    }
    return -1;
  },
  chunkStr: function(str, chunkSize) {
    var strs = [];
    var buildingStr = "";
    for(var i = 0; i < str.length; i++) {
      if(i % chunkSize == 0 && i != 0) {
        strs.push(buildingStr);
	buildingStr = "";
      }
      buildingStr += str[i];
    }
    if(buildingStr != "") {
      strs.push(buildingStr);
    }
    return strs;
  }
};

module.exports = monkey;
