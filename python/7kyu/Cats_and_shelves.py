import math

def solution(start, finish):  
    return math.floor((finish - start) / 3) + ((finish - start) % 3)