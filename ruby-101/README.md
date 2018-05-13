# RUBY NOTES


### Ruby is:
* High-level:  meaning reading and writing Ruby is really easy—it looks a lot like regular English!
* Interpreted,no compiler to write and run Ruby.
* Object-oriented, meaning it allows users to manipulate data structures called objects in order to build and execute programs.
* Easy to use. 
  * Designed by Yukihiro Matsumoto (often just called "Matz") in 1995. Designed to emphasize human needs over those of the computer.

* Ruby ignores whitespace

* `inclusive or` 
* `do` and `end` interchangable with `{}` for code blocks
*  `do` `while`, `until`  ... `for loops` ... 
* 


### Ruby Syntax
- Comments: 
  ```
  # Single line Comments
    
  =begin
    Multi
    Line
    Comments
  =end
  ```
- (String) Methods: 
  ```
  .reverse
  .uppercase
  .lowercase
  .split('item to split things by').
  ```
- Console:
  ```
  puts <items> (new lines for each entry)
  print <items> (same line)
  ```
- Getting Input
  use `gets`. ` .chomp` removes the blank line that is automatically inserted. E.g.,
  ```
  first_name = gets.chomp
  ```
- String Interpolation
  ```
  print "I took #{monkey} to the zoo"
  ```
- Control Flow
  `if` `elseif` `end` `else` blocks
  ```
  user_num = Integer(gets.chomp)
  if user_num < 0
    puts "You picked a negative integer!"
  elsif user_num > 0
    puts "You picked a positive integer!"
  else
    puts "You picked zero!"
  end
  ```
  UNLESS!?!?!?!?
  ```
  unless hungry
    # Write some sweet programs
  else
    # Have some noms
  end
  ```
- I need sooooo much practice right now its insane. 
#### Loops : 
  FOR item in range
  ```
    for variable in range #.. or ...
      puts variable
    end

    for num in 1...10
      DO THINGS
      puts "#{num}"
    end
  ```
  - ...=exlusive and .. are different. 
  - `next` and `break` in the code block
  
  - do while
  - do until
  - loop
  
  - .times

#### Arrays :
- Saving Multiple Values
  - `my_array` [1,2,3,4]

  - .each method on objects. `| |` === is a placeholder for each item in an object.
    `numbers.each { |item| puts item }`

  - .times method on objects. 
    `20.times { print "Lets try this out. " }`

  - 