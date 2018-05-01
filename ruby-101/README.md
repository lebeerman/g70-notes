# RUBY NOTES


### Ruby is:
* High-level:  meaning reading and writing Ruby is really easy—it looks a lot like regular English!
* Interpreted,no compiler to write and run Ruby.
* Object-oriented, meaning it allows users to manipulate data structures called objects in order to build and execute programs.
* Easy to use. 
  * Designed by Yukihiro Matsumoto (often just called "Matz") in 1995. Designed to emphasize human needs over those of the computer.

* Ruby ignores whitespace

* `inclusive or` 

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
- Methods: 
  ```
  .reverse
  .uppercase
  .lowercase
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
- 
