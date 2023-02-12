def square_digits(num):
    if num == 0:
        return 0
    
    num_arr = list(map(int, str(num)))
    result = []
    for el in num_arr:
        result.append(el ** 2)
    
    return int("".join([str(n) for n in result]))