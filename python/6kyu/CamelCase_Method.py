def camel_case(s):
    s_list = list(s.split(" "))
    result = []
    for el in s_list:
        result.push(el[0:1].upper() + el[1::].lower())

    return "".join(result)