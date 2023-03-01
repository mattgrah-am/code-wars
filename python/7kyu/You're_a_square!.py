def is_square(n) -> bool:
    if n < 0:
        return False
    else:
        return int(n**0.5)**2 == int(n)