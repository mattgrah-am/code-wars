def high_and_low(numbers):
    sorted_numbers = sorted(map(int, numbers.split(" ")))
    return "{} {}".format(sorted_numbers[-1], sorted_numbers[0])