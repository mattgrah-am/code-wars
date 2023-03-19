def reverse_words(text):
    text_list = text.split(" ")
    result = []
    for word in text_list:
        result.append(word[::-1])

    return " ".join(result)
