// JavaScript Execution Context

//1. Global Execution Context
//2. Function Execution Context
//3. Eval Execution context

//1.Memory Creation Phase (Creation Phase)
//2.Execution Phase


let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/* steps:
1.Global Execution => this <-----------------------------
                                                          |
2.Memory Phase                                            |
val1 = undefined                                          |
val2 = undefined                                          |
addnum = definition                                       |
result1 = undefined                                       |
result2 = undefined                                       |

3. Execution Phase                                        |
val1 = 10 
val2 = 5                                                   |
addNum = new variable environment + execution thread       | 
        1. Memory Phase        2. Execution Phase          | 
           val1 = undefined       num1 = 10                | 
           val2 = undefined       num2 = 5                 |
           total = undefined      total = 15 ---------------
result1 = 15
result2 = 
addNum = new variable environment + execution thread        
        1. Memory Phase        2. Execution Phase         
           val1 = undefined       num1 = 10                
           val2 = undefined       num2 = 5                 
           total = undefined      total = 15

*/