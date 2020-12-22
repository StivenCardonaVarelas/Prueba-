#first_string = 'A literal string'
#second_string = "A literal string"
#print(second_string == first_string)

#third_string = 'A single quoted literal string with a " double quote'
#fourth_string = "A double quoted literal string with a ' single quote"
##print(third_string)
#print(fourth_string)

# fifth_string = 'A single quoted literal string with an \' escaped single quote'
# sixth_string = "A double quoted literal string with a \" double quote"
# seventh_string = 'A literal string with a \n new line character'
 # eighth_string = 'A literal string with a \t tab character'

 #print(fifth_string)
#print(sixth_string)
#print(seventh_string)
#print(eighth_string)
message = str.capitalize('first message')
print(message)

message = 'second message'.capitalize()
print(message)

message = 'third message'
print(message.capitalize())

message = 'hello world'
print(message.lower())
print(message.upper())

message = message.title()
print(message)
print(message.swapcase())

location = 'Mississippi'
print(location.count('s'))

message = 'racecar'
print(message.startswith('r'))
print(message.startswith('a'))
print(message.startswith('ra'))

print(message.endswith('r'))
print(message.endswith('a'))
print(message.endswith('ar'))

message = 'howdy'
print(message.rjust(20))
print(message.rjust(20, '-'))
print(message.ljust(20))
print(message.ljust(20, '-'))