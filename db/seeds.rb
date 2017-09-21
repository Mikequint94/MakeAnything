# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project1 = Project.create!({title: "Wooden Skeeball Game",
  img_url: "https://c1.staticflickr.com/8/7018/6478568647_7baefc8037_b.jpg",
  description: "From just a few simple household materials you can create this wonderful classic family-fun game",
  author_id: 1
  })
project2 = Project.create!({title: "How to make Candied Ginger from scratch",
  img_url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ingwer-W%C3%BCrfel.jpg",
  description: "All you need is ginger, sugar, and water!",
  author_id: 2
  })
project3 = Project.create!({title: "Remote Controlled Phone Charger",
  img_url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ingwer-W%C3%BCrfel.jpg",
  description: "This robot is easy to build and will make sure your phone is always charged",
  author_id: 3
  })
project4 = Project.create!({title: "Wooden Skeeball Game",
  img_url: "https://c1.staticflickr.com/8/7018/6478568647_7baefc8037_b.jpg",
  description: "From just a few simple household materials you can create this wonderful classic family-fun game",
  author_id: 1
  })
project5 = Project.create!({title: "How to make Candied Ginger from scratch",
  img_url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ingwer-W%C3%BCrfel.jpg",
  description: "All you need is ginger, sugar, and water!",
  author_id: 2
  })
project6 = Project.create!({title: "Remote Controlled Phone Charger",
  img_url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ingwer-W%C3%BCrfel.jpg",
  description: "This robot is easy to build and will make sure your phone is always charged",
  author_id: 3
  })
