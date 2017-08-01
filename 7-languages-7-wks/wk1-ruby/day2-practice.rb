def truth_teller(options={})
  if options[:profession] == :lawyer
    '... it might not be false...'
  else
    true
  end
end

puts truth_teller
puts truth_teller(:profession => :lawyer)


puts

# adds method 'my_times' on class Integer, which just does something a number of times
# 'yield' invokes cold block in curly's called below
class Integer
  def my_times
    i = self
    while i > 0
      i = i - 1
      yield
    end
  end
end

4.my_times {puts 'You can do itttt!'}
#prints 'you can do itt' 4 times

puts

#yield is most common way of doing blocks
# old way
def calculate (a, b, operation)
  operation.call(a, b)
end
puts calculate(5,6,lambda {|a, b| a + b})

# more common/simple way w yield
def calculation(a, b)
  yield(a, b)
end

puts calculation(5, 6) {|a, b| a + b}
puts calculation(5, 6) {|woah, there| woah + there} #works


exit
