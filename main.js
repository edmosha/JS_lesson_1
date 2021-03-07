function numbers(a) {
    let num = 1;
    do {
        switch (num) {
            case 5:
                console.log("Five")
                break
            case 13:
                console.log("Thirteen")
                break
            case 22:
                console.log("Twenty two")
                break
            case 35:
                console.log("Thirty five")
                break
            case 98:
                console.log("Ninety eight")
                break
            default:
                console.log(num);
        }
        num++;
    } while (num <= a)
}

numbers(100)