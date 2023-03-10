def digital_root(n):
    while n >= 10:
        list_of_digits = list(map(int, str(n)))
        n = sum(list_of_digits)

    return n