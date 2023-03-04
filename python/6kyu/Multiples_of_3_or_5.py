def solution(number):
    number_list = []
    i = 3
    while i < number:
        if i < 3: return 0
        elif i % 3 == 0 and i % 5 == 0: number_list.append(i)
        elif i % 3 == 0 or i % 5 == 0: number_list.append(i)
        i += 1

    return sum(number_list)
  