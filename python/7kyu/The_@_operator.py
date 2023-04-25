def evaluate(equation):
    a, *numbers = map(int, equation.split(" @ "))
    
    for b in numbers:
        if b == 0:
            return None
        
        a = (a + b) + (a - b) + (a * b) + (a // b)
    
    return a