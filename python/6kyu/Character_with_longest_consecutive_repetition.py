def longest_repetition(chars):
    
    if len(chars) == 0:
        return '', 0
        
    the_char = chars[0]
    the_count = 1
    
    count = 1
    for i in range(1,len(chars)):
        
        if chars[i-1] == chars[i]:
            count += 1
        
            if the_count < count:
                the_char = chars[i]
                the_count = count
        else:
            count = 1
    
    return the_char, the_count