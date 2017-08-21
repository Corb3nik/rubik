# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ctf = CTF.create(name: "Corb3nik's CTF")
ctf.challenges.create(
  name: "Corb3nik's CTF challenge",
  root: 'http://159.203.173.168:10000/'
)
