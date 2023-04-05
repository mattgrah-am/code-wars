def narcissistic( value ):
    result = 0

    value_list = list(str(value))
    for num in value_list:
        result += int(num) ** len(str(value))

    return value == result