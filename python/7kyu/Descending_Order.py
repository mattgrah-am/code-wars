def descending_order(num):
    sorted_numbers = sorted(map(int, str(num)), reverse=True)
    return int("".join(map(str, sorted_numbers)))