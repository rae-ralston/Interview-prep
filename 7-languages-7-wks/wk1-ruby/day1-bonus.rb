puts 'Guess a number between 1 & 10'

num = rand(10) + 1
won = false

while !won
  puts "guess.."
  guess = gets
  guess = guess.to_i
  if guess == num
      puts "You're a winner! #{guess} is the right answer!"
      won = true
    elsif guess > 10 || guess < 0
      puts 'dont be a dummy, guess between 1 & 10'
    elsif guess > num
      puts 'A little lower'
    else
      puts 'Higher and higher'
  end
end

exit
