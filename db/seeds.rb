# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
Project.destroy_all
Step.destroy_all
User.destroy_all
#

user1 = User.create!({username: "CraftyCathy",
    email: "CraftyCathy@gmail.com",
    password: "123456",
    img_url: "https://res.cloudinary.com/make-anything/image/upload/v1505928916/gsfzkkvfxduqb6te2yp6.png"})
user2 = User.create!({username: "DIYDoug",
   email: "Diydoug@dougsworld.net",
   password: "123456",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506023305/aih7neya2wkohnstfyei.png"})
user3 = User.create!({username: "ProjectPaula",
   email: "PaulaPoops@drama.com",
    password: "123456",
    img_url: "https://res.cloudinary.com/make-anything/image/upload/v1505956289/tadjexic3gzxircnins4.png"})

project1 = Project.create!({title: "Wooden Skeeball Game",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
  description: "From just a few simple household materials you can create this wonderful classic family-fun game",
  author_id: user1.id
  })
project2 = Project.create!({title: "How to make Candied Ginger from scratch",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
  description: "All you need is ginger, sugar, and water!",
  author_id: user2.id
  })
project3 = Project.create!({title: "Remote Controlled Phone Charger",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
  description: "This robot is easy to build and will make sure your phone is always charged",
  author_id: user3.id
  })
project4 = Project.create!({title: "Wooden Skeeball Game",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
  description: "From just a few simple household materials you can create this wonderful classic family-fun game",
  author_id: user1.id
  })
project5 = Project.create!({title: "How to make Candied Ginger from scratch",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
  description: "All you need is ginger, sugar, and water!",
  author_id: user2.id
  })
project6 = Project.create!({title: "Remote Controlled Phone Charger",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
  description: "This robot is easy to build and will make sure your phone is always charged",
  author_id: user3.id
  })
project7 = Project.create!({title: "Wooden Skeeball Game",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
  description: "From just a few simple household materials you can create this wonderful classic family-fun game",
  author_id: user1.id
  })
project8 = Project.create!({title: "How to make Candied Ginger from scratch",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
  description: "All you need is ginger, sugar, and water!",
  author_id: user2.id
  })
project9 = Project.create!({title: "Remote Controlled Phone Charger",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
  description: "This robot is easy to build and will make sure your phone is always charged",
  author_id: user3.id
  })
project10 = Project.create!({title: "How to Make a Killer DIY Project Instruction Site",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_76,w_1182/v1506047119/hands-coffee-cup-apple_ska02g.jpg",
  description: "Its so simple, anybody can do it!  With 0 hours of freetime, and 24 hours of fun each day, you can design something as professional as MakeAnything in just 9 days.  Don't believe me just watch!",
  author_id: user1.id,
  video_url: "https://www.youtube.com/watch?v=mxphj0U5BGc"
  })


step1 = Step.create!({title: "Plan and Acquire Tools",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,w_782/v1506099757/Chisel-Hammer-Work-Repair-Tools-Screwdriver-2145770_wuwrod.jpg",
   description: "Collect a hammer, two screwdrivers, 3 nails, and lots of wood.  Also make sure to create a detailed diagram with measurements to ensure success of the project.  Never go into something without a solid plan!",
   project_id: 1})

step2 = Step.create!({title: "Build a Frame",
   description: "This is no simple feat!  The frame is the base of the entire project so make sure to pay attention to detail.  Use your tools and follow your plans, I believe in you.",
   project_id: 1})

step3 = Step.create!({title: "Paint and Add Components",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,w_594/v1506100180/6293727982_8411741334_b_ltvtob.jpg",
   description: "This part is very important.  Paint it whatever color your hard desires but make sure it really splashes and dazzles the eyes.  If a skeeball game is ugly nobody will want to play it, guarenteed.  Also at this point you should install the ramp, the cups to catch the points with the associated score labelled on each cup. If safety is of concern or you have aggressive children maybe you should install a net to catch flying balls from damaging your wall and flooring.",
   project_id: 1})

step4 = Step.create!({title: "Step to test out styling",
   video_url: "https://www.youtube.com/watch?v=HC7JK5EP0qE",
   description: "This part is also very important.  I am wondering what it will look if a step has just a video and no pictures.",
   project_id: 1})

step5 = Step.create!({title: "Another Step to test out styling",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,w_594/v1506100180/6293727982_8411741334_b_ltvtob.jpg",
   description: "This part is important too!  I want to make sure everything looks good when I have picture and video in the same step",
   video_url: "https://www.youtube.com/watch?v=1q6bZlHOCTA",
   project_id: 1})

step6 = Step.create!({title: "Congratulate yourself!",
   description: "That was a long journey, but you achieved excellent.  Take a deep breath, pat yourself on the back and enjoy your game.  Happy Skeeballin' :).",
   project_id: 1})
