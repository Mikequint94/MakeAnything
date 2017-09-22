# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Project.destroy_all
Step.destroy_all
#
# project1 = Project.create!({title: "Wooden Skeeball Game",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
#   description: "From just a few simple household materials you can create this wonderful classic family-fun game",
#   author_id: 1
#   })
# project2 = Project.create!({title: "How to make Candied Ginger from scratch",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
#   description: "All you need is ginger, sugar, and water!",
#   author_id: 2
#   })
# project3 = Project.create!({title: "Remote Controlled Phone Charger",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
#   description: "This robot is easy to build and will make sure your phone is always charged",
#   author_id: 3
#   })
# project4 = Project.create!({title: "Wooden Skeeball Game",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
#   description: "From just a few simple household materials you can create this wonderful classic family-fun game",
#   author_id: 1
#   })
# project5 = Project.create!({title: "How to make Candied Ginger from scratch",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
#   description: "All you need is ginger, sugar, and water!",
#   author_id: 2
#   })
# project6 = Project.create!({title: "Remote Controlled Phone Charger",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
#   description: "This robot is easy to build and will make sure your phone is always charged",
#   author_id: 3
#   })
# project7 = Project.create!({title: "Wooden Skeeball Game",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
#   description: "From just a few simple household materials you can create this wonderful classic family-fun game",
#   author_id: 1
#   })
# project8 = Project.create!({title: "How to make Candied Ginger from scratch",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
#   description: "All you need is ginger, sugar, and water!",
#   author_id: 2
#   })
# project9 = Project.create!({title: "Remote Controlled Phone Charger",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
#   description: "This robot is easy to build and will make sure your phone is always charged",
#   author_id: 3
#   })
# project10 = Project.create!({title: "How to Make a Killer DIY Project Instruction Site",
#   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_76,w_1182/v1506047119/hands-coffee-cup-apple_ska02g.jpg",
#   description: "Its so simple, anybody can do it!  With 0 hours of freetime, and 24 hours of fun each day, you can design something as professional as MakeAnything in just 9 days.  Don't believe me just watch!",
#   author_id: 4,
#   video_url: "https://www.youtube.com/watch?v=mxphj0U5BGc"
#   })


step1 = Step.create!({title: "Plan and Acquire Tools",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,w_782/v1506099757/Chisel-Hammer-Work-Repair-Tools-Screwdriver-2145770_wuwrod.jpg",
   description: "collect a hammer, two screwdrivers, 3 nails, and lots of wood.  Also make sure to create a detailed diagram with measurements to ensure success of the project.  Never go into something without a solid plan!",
   project_id: 60})

step2 = Step.create!({title: "Build a Frame",
   description: "This is no simple feat!  The frame is the base of the entire project so make sure to pay attention to detail.  Use your tools and follow your plans, I believe in you.",
   project_id: 60})

step3 = Step.create!({title: "Paint and Add Components",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,w_594/v1506100180/6293727982_8411741334_b_ltvtob.jpg",
   description: "This part is very important.  Paint it whatever color your hard desires but make sure it really splashes and dazzles the eyes.  If a skeeball game is ugly nobody will want to play it, guarenteed.  Also at this point you should install the ramp, the cups to catch the points with the associated score labelled on each cup. If safety is of concern or you have aggressive children maybe you should install a net to catch flying balls from damaging your wall and flooring.",
   project_id: 60})

step4 = Step.create!({title: "Congratulate yourself!",
   description: "That was a long journey, but you achieved excellent.  Take a deep breath, pat yourself on the back and enjoy your game.  Happy Skeeballin' :).",
   project_id: 60})
