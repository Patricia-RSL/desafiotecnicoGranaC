function calculate(expr) {
    expr = expr.split('-').join('+-');
    exprList = expr.split("+")
    //console.log("exprList " + exprList)
    soma=0
    for (var i = 0; i < exprList.length; i++) {
        result = Number(calculateMult(exprList[i]))
        //console.log("result " + result)       
        soma += result
        //console.log("soma: "+soma)
    }
    
    return soma
}

function calculateMult(expr) {
    exprMult = expr.split('*')
    //console.log("exprMult " + exprMult)
    if (exprMult.length==1 && !expr.includes('/')) { 
        return expr
    }
    mult=1
    //console.log(exprMult)
    for (var i = 0; i < exprMult.length; i++) {
        result = Number(calculateDiv(exprMult[i]))
        //console.log("result " + result)       
        mult *= result
    }
    
    return mult
}

function calculateDiv(expr) {
    exprDiv = expr.split("/")  
    //console.log("exprDiv " + exprDiv)  
    if (exprDiv.length==1) {
        return expr
    }
    div=exprDiv[0]
    for (var i = 1; i < exprDiv.length; i++) {
        div /= Number(exprDiv[i])
    }
    
    return div
}


function test(expr, expected) {
    const actual = calculate(expr)
    const result = actual === expected ? "passed" : `failed. Actual: ${actual}`
    console.log(`Test case ${expr}: ${result}`)
}

test('1+2', 3)
test('0+8', 8)
test('10+350', 360)
test('5+40+100', 145)
test('10-2', 8)
test('-2+10', 8)
test('10-2+40', 48)
test('2*4', 8)
test('12/3', 4)
