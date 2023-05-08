def find_multiples(integer, limit):
    total_integer = integer
    result = [integer]
    while total_integer < limit:
        total_integer += integer
        if total_integer <= limit:
            result.append(total_integer)
    return result