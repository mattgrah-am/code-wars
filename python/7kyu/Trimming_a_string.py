def trim(phrase, size):
    if len(phrase) <= size:
        return phrase
    elif size <= 3:
        return phrase[0:size] + "..."
    else:
        return phrase[0:size -3] + "..."
