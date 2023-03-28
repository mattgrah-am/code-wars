
def order(sentence):
    sentence_dict = {}

    for word in sentence.split(" "):
        for el in list(word):
            if el.isdigit():
                sentence_dict[word] = int(el)
                
    sorted_sentence_dict = dict(sorted(sentence_dict.items(), key=lambda item: item[1]))
    
    return " ".join(list(sorted_sentence_dict.keys()))