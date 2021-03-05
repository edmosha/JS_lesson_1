function numbers(a) {
    let num = 1;
    do {
        if ((num==5) || (num==13) || (num==22) || (num==35) || (num==98)) {
            let strNum
            strNum = String(num)
            console.log(strNum + " это " + typeof strNum)
        } else {
            console.log(num + " это " + typeof num)
        }
        num++;
    } while (num <= a)
}

numbers(6)