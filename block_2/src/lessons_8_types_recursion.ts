type NestedNumbers = number | NestedNumbers[];
const nums:NestedNumbers = [1,2,[1,2, [11,22,33]]]

nums.push(44)
nums.push([55])
console.log(nums)

//JSON

function isJson(arg: JSONValue) {}

isJson('hello')
isJson(3)
isJson(false)
isJson({a: ['123'], v:{x:1}})
isJson([1, {x:1}, [1,2,3]])


type JSONPrimitive = string | number | boolean | null
type JSONObject = {[k:string]:JSONValue}
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray