def accum(s):
    string_list = list(s.lower())
    result = []
    for i in range(len(string_list)):
        if i == 0:
            result.append(string_list[i].upper())
        else:
            result.append(string_list[i].upper() + (string_list[i] *  i))
    
    return "-".join(result)