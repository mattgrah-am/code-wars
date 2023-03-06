def create_phone_number(n):
    n_str = ''.join(str(el) for el in n)
    return "(" + n_str[0:3] + ") " + n_str[3:6] + "-" + n_str[6:10]