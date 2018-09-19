import {database} from '../../../firebase/initialize'

// Check Connection
export function checkDatabaseConnection(){
  var connectionRef = database.ref(".info/connected");
  connectionRef.on("value", function(snap) {
    if (snap.val() === true) {
      return true;
    } else {
      return false;
    }
  });
}

export function connectToDatabase(){
  database.goOnline();
}

export function disconnectDatabase(){
  database.goOffline();
}

// Start Process to Send Data to Database
export function checkThisPath(path){
  var exist = false;
  var rootRef = database.ref(path)
  rootRef.once("value").then(function(snapshot){
    exist = snapshot.exists()
    if(exist == true){
      return exist;
    }
  });
  return exist;
}

export function selectReference(path){
  // let pathExists = checkThisPath(path)
  // if(pathExists === true){
  //   return database.ref(path);
  // } else {
  //   return null;
  // }
  return database.ref(path);
}

export function writeItemToDatabase(refToDatabasePath,id,item){
  action = refToDatabasePath.child(id).set(item);
  return action
}

export function update(refToDatabasePath,updatedItem){
  refToDatabasePath.update(updatedItem)
}
