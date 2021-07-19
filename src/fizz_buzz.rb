class FizzBuzz
    def play(number)
        if number % 15 == 0
            'fizz-buzz'
        elsif number % 3 == 0
            'fizz'
        elsif number % 5 == 0
            'buzz'
        else
            number
        end
    end
end
