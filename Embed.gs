// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - TODO
/* jshint asi: true */

(function() {"use strict"})()

// Lists_.gs
// ===========
//
// File list manager

var Lists_ = (function(ns) {

  // Enums

  ns.NoItems = Object.freeze({
    ERROR: true,  
    IGNORE: false
  });

  ns.MoreThanOneItem = Object.freeze({
    ERROR: true,
    IGNORE: false
  });

  /**
  * Check a list iterator to ensure that there is only 
  * one item in it, and if so return the object otherwise
  * throw an error or return null
  *
  * @param {object} list iterator
  * @param {NoItems} whether to throw an error if no item found
  * @param {MoreThanOneItem} whether to throw an error if more than one item found
  *
  * @return {object} item object or null
  */
     
  ns.checkJustOne = function(list, errorOnNoItems, errorOnMoreThanOneItem) {
      
    var functionName = 'Lists.checkJustOne()'
  
    Assert.assertObject(list, functionName, 'arg not object')
    Assert.assertBoolean(errorOnNoItems, functionName, 'arg2 not bool')
    Assert.assertBoolean(errorOnMoreThanOneItem, functionName, 'arg3 not bool')
    
    var item = null
    
    // Check for the first one
    
    if (list.hasNext()) {
      
      item = list.next()
      
      // Check for the second one
      if (list.hasNext()) {
        
        if (errorOnMoreThanOneItem) {   
          Assert.assert(false, functionName, 'there are more than one item of this kind')
        }
      }
      
    } else {
      
      if (errorOnNoItems) {   
        throw new Error('failed to find item')
      }
    }
    
    return item
    
  } // checkJustOne()

  return ns

})(Lists_ || {})
