def lovefunc( flower1, flower2 ):
    def flowerCheck(flower):
        if flower % 2 == 0:
            return "even"
        else:
            return "odd"
        
    return flowerCheck(flower1) != flowerCheck(flower2)