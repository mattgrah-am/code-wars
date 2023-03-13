def count_bits(n):
    bits = list("{0:b}".format(n))
    return bits.count("1")