import math

def century(year):
    if year % 100 == 0: 
        return math.floor(year / 100)
    else:
        return math.ceil(year / 100)