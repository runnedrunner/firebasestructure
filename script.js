var key1 = {
  "nestedKey1": "hi!",
  "nestedKey2": "bye!"
}
var key2 = {
  "nestedkey1": {"nestedkey2": {"nestedkKey5": {"notasNestedKey": "I'm not as nested!"}, "nestedkey3": {"nestedKey4": {"reallyNestedKey:"I'm deeply nested!"}}}}}
}
storeValue("key2", key2);