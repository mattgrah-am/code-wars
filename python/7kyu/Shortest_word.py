def find_short(s):
    str_list = s.split(" ")
    shortest_word = 0
    for word in str_list:
        if shortest_word == 0 or shortest_word > len(word):
            shortest_word = len(word)
    return shortest_word
            
        