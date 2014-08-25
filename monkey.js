var monkey = {
  indexWhere: function(list, matcherFunction) {
    for(var i = 0; i < list.length; i++) {
      if(matcherFunction(list[i])) {
        return i;
      }
    }
    return -1;
  }
};

module.exports = monkey;
