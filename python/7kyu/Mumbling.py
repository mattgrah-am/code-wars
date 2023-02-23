def accum(s):
    string_list = list(s.lower())
    result = []
    for i in range(len(string_list)):
        if el == 0:
            result.append(string_list[i].upper())
        else:
            result.append(string_list[i].upper() + (string_list[i] *  i))
    
    return "-".join(result)

Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnn-Uuuuuuuuuuu
Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu