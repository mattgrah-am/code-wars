def spin_words(sentence):
    word_list = sentence.split(" ")
    for word in word_list:
       if(len(word) >= 5):
          rev_word = word[::-1]
          idx = word_list.index(word)
          word_list[idx] = rev_word
    return " ".join(word_list)         