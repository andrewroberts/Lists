// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// JSHint - 25/1/15 19:42 UTC

/*
 * Copyright (C) 2014 Andrew Roberts
 * 
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later 
 * version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with 
 * this program. If not, see http://www.gnu.org/licenses/.
 */

/**
 * Lists.gs
 * ========
 *
 * List management functions
 */

// Enums
// -----

var NoItems = Object.freeze({
  ERROR: true,  
  IGNORE: false
});

var MoreThanOneItem = Object.freeze({
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
   
function checkJustOne(list, errorOnNoItems, errorOnMoreThanOneItem) {
    
  var functionName = 'Lists.checkJustOne()';

  Assert.assertObject(list, functionName, 'arg not object');
  Assert.assertBoolean(errorOnNoItems, functionName, 'arg2 not bool');
  Assert.assertBoolean(errorOnMoreThanOneItem, functionName, 'arg3 not bool');  
  
  var item = null;
  
  // Check for the first one
  
  if (list.hasNext()) {
    
    item = list.next();
    
    // Check for the second one
    if (list.hasNext()) {
      
      if (errorOnMoreThanOneItem) {   
        Assert.assert(false, functionName, 'there are more than one item of this kind');
      }
    }
    
  } else {
    
    if (errorOnNoItems) {   
      Assert.assert(false, functionName, 'failed to find item');
    }
  }
  
  return item;
  
} // checkJustOne()