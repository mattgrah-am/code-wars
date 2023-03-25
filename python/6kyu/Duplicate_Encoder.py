def duplicate_encode(word):
    word_list = list(word.lower())
    result = []
    for el in word_list:
        if word_list.count(el) > 1:
            result.append(")")
        else:
            result.append("(")
    return "".join(result)