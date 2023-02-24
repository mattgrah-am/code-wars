def xo(s):
    x = 0
    o = 0

    str_list = list(s.lower())

    for letter in str_list:
      if letter == "x":
        x += 1
      elif letter == "o":
        o += 1

    return x == o