import request from './fakeRequest';
import { get1 } from '../fetch/get'
import { post1 } from '../fetch/post'


/**
 * Authentication lib
 * @type {Object}
 */
var auth = {
  login(username, password, callback) {
    if (this.loggedIn()) {
      console.log("loggedIn");

      callback(true);
      return;
    }
    var result = post1('/api/login',{'username':username,'password':password});
    result.then(res => {
      return res.json()
    }).then(json => {
      console.log("json");
      console.log(json);
      if (json.authenticated) {
        localStorage.token = json.token;
        callback(true);
      } else {
        callback(false, json.error);
      }
    })
  },
  /**
   * Logs the current user out
   */
  logout(callback) {
    /*
    *     测试
    */
    callback(true);
    return;
    request.post('/logout', {}, () => {
      callback(true);
    });
  },
  /**
   * Checks if anybody is logged in
   * @return {boolean} True if there is a logged in user, false if there isn't
   */
  loggedIn() {
    return !!localStorage.token;
  },
  /**
   * Registers a user in the system
   * @param  {string}   username The username of the user
   * @param  {string}   password The password of the user
   * @param  {Function} callback Called after a user was registered on the remote server
   */
  register(username, password, callback) {
    // Post a fake request
    //request.post('/register', { username, password }, (response) => {
    //  // If the user was successfully registered, log them in
    //  if (response.registered === true) {
    //    this.login(username, password, callback);
    //  } else {
    //    // If there was a problem registering, show the error
    //    callback(false, response.error);
    //  }
    //});

    var result = post1('/api/register',{'username':username,'password':password});
    result.then(res => {
      return res.json()
    }).then(json => {
      if (json.authenticated) {
        this.login(username, password, callback);
      } else {
        callback(false, json.error);
      }
    })
  },
  onChange() {},

  search(category,keyword,page){
    var url;
    console.log("category");

    console.log(category);

    if(category === "all"){
      console.log(category);
      url = '/api/search/'+category+'/'+encodeURIComponent(keyword)+'/'+page;
    }else{
      console.log(category);

      url = '/api/search/'+category+'/'+page;
    }
    const result = get1(url);
    return result;

  },
  showComm(id){
    if(id){
      const result = get1('/api/detail/'+id);
      return result;
    }else{
      return false;
    }
  },
  buycheck(id, shuliang, chicun, yanse){
    if(id){
      const result = post1('/api/buycheck',{'shuliang':shuliang,'chicun':chicun,"yanse":yanse});
      return result;
    }else{
      return false;
    }
  }
}

module.exports = auth;
