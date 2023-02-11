import re

def disemvowel(string_):
    return re.sub(r'[AEIOU]', '', string_, flags=re.IGNORECASE)