def persistence(n):
    if len(str(n)) == 0: 
        return 0
    calc = n
    result = 0
    num_list = list(map(int, str(n)))

    while int(len(str(calc)) > 1):
        calc = 1
        for el in num_list:
            calc = calc * el
        num_list = list(map(int, str(calc)))
        result += 1

    return result