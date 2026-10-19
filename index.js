function combineUsers(...args) {
  const combinedObject = {users: []};

  for(const arg of args) {
    combinedObject.users = [...combinedObject.users, ...arg];
  }
  
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};