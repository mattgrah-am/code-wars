def get_count(sentence):
    vowels = ["a", "e", "i", "o", "u"]
    total = 0
    Sentence_arr = list(sentence)
    for letter in Sentence_arr:
        for vowel in vowels:
            if vowel == letter:
                total += 1
    return total