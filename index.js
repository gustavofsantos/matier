/**
 * Match the expression result into matchers
 * 
 * @param {any} test 
 * @param  {((any) => boolean, (any) => any)[]} matchers 
 */
function match(test, ...matchers) {
  for (const [ matcher, fn ] of matchers) {
    if (matcher(test)) {
      return fn(test);
    }
  }
}

module.exports = match;