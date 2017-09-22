# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Project.destroy_all

project1 = Project.create!({title: "Wooden Skeeball Game",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
  description: "From just a few simple household materials you can create this wonderful classic family-fun game",
  author_id: 1
  })
project2 = Project.create!({title: "How to make Candied Ginger from scratch",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
  description: "All you need is ginger, sugar, and water!",
  author_id: 2
  })
project3 = Project.create!({title: "Remote Controlled Phone Charger",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
  description: "This robot is easy to build and will make sure your phone is always charged",
  author_id: 3
  })
project4 = Project.create!({title: "Wooden Skeeball Game",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
  description: "From just a few simple household materials you can create this wonderful classic family-fun game",
  author_id: 1
  })
project5 = Project.create!({title: "How to make Candied Ginger from scratch",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
  description: "All you need is ginger, sugar, and water!",
  author_id: 2
  })
project6 = Project.create!({title: "Remote Controlled Phone Charger",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
  description: "This robot is easy to build and will make sure your phone is always charged",
  author_id: 3
  })
project7 = Project.create!({title: "Wooden Skeeball Game",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
  description: "From just a few simple household materials you can create this wonderful classic family-fun game",
  author_id: 1
  })
project8 = Project.create!({title: "How to make Candied Ginger from scratch",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
  description: "All you need is ginger, sugar, and water!",
  author_id: 2
  })
project9 = Project.create!({title: "Remote Controlled Phone Charger",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
  description: "This robot is easy to build and will make sure your phone is always charged",
  author_id: 3
  })
project10 = Project.create!({title: "How to Make a Killer DIY Project Instruction Site",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_76,w_1182/v1506047119/hands-coffee-cup-apple_ska02g.jpg",
  description: "Its so simple, anybody can do it!  With 0 hours of freetime, and 24 hours of fun each day, you can design something as professional as MakeAnything in just 9 days.  Don't believe me just watch!",
  author_id: 4,
  video_url: "https://www.youtube.com/watch?v=mxphj0U5BGc"
  })
