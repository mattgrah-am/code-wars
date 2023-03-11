def is_valid_walk(walk):
    if len(walk) > 10 or len(walk) < 10:
        return False
    
    ns = 0
    we = 0
    
    for dir in walk:
        if dir == "n":
            ns += 1
        if dir == "s":
            ns -= 1
        if dir == "w":
            we += 1
        if dir == "e":
            we -= 1
    return len(walk) == 10 and ns == 0 and we == 0