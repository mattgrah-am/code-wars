import math

def make_readable(seconds):
    total_minutes = math.floor(seconds / 60)
    def check_digit_len(num):
        if len(str(num)) == 1:
            return "0" + str(num)
        else:
            return str(num)

    secs = check_digit_len(seconds % 60)
    hrs = check_digit_len(math.floor(total_minutes / 60))
    mins = check_digit_len(total_minutes % 60)

    return hrs+":"+ mins+":"+secs
