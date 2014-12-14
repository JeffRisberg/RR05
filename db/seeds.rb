# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

q1 = Question.create!(email: 'jrisberg@aol.com', body: 'What is your favorite color?')
q2 = Question.create!(email: 'risberg@usc.edu', body: 'What is your favorite movie?')

Answer.create!(question: q1, email: 'bobsmith@gmail.com', body: 'Red')
Answer.create!(question: q1, email: 'helen@gmail.com', body: 'Black')

Answer.create!(question: q2, email: 'tom@gmail.com', body: 'Gone with the Wind')
Answer.create!(question: q2, email: 'larry@gmail.com', body: 'Star Wars')
Answer.create!(question: q2, email: 'peter@gmail.com', body: 'Titanic')




