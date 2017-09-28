# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
Project.destroy_all
Step.destroy_all
User.destroy_all
Comment.destroy_all
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
   email: "PaulaPlease@drama.com",
    password: "123456",
    img_url: "https://res.cloudinary.com/make-anything/image/upload/v1505956289/tadjexic3gzxircnins4.png"})
user4 = User.create!({username: "MandyMaps",
   email: "MandyMapsMore@yahoo.com",
    password: "123456",
    img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506550318/utbkwefx1fhhl2edrrkw.png"})
user5 = User.create!({username: "TangoTuan89",
   email: "tuan@gmail.com",
    password: "123456",
    img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506553379/ho12hte26oojapuckkml.png"})
user6 = User.create!({username: "HandyAndy12",
   email: "andy@gmail.com",
    password: "123456",
    img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506409977/sn2fayg4hbabzlzrcri7.png"})
user7 = User.create!({username: "MakeitMike",
   email: "mjq8@cornell.edu",
    password: "123456",
    img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506410914/xtm8mxltzjlnfrtuxhlw.png"})
user8 = User.create!({username: "KrochetKween",
   email: "llama@tehama.com",
    password: "123456",
    img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506633424/dldykt59cybqpkcp3ejn.png"})
user9 = User.create!({username: "ArtsyAndres",
   email: "andres@art.com",
    password: "123456",
    img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506633530/qfugw9kueikjlcled0tl.png"})

project1 = Project.create!({title: "Wooden Skeeball Game",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_80,w_815/v1506047867/6478568647_7baefc8037_b_lcgmav.jpg",
  description: "From just a few simple household materials you can create this wonderful classic family-fun game",
  author_id: user2.id
  })
project2 = Project.create!({title: "How to make Candied Ginger from scratch",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506047940/Ingwer-W_C3_BCrfel_tehu1n.jpg",
  description: "All you need is ginger, sugar, and water!",
  author_id: user4.id
  })
project3 = Project.create!({title: "Remote Controlled Phone Charger",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506048050/800px-Ha_Ha_Toy__E2_80_93_Battery_Operated_Remote_Control__E2_80_93_Lantern_Robot__E2_80_93_In_Action_21_21_aink3y.jpg",
  description: "This robot is easy to build and will make sure your phone is always charged",
  author_id: user9.id
  })
project4 = Project.create!({title: "Scratch Map for Travellers",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506634083/cplzldgyaar6sewa5f52.png",
  description: "If you're like me, you love travelling, and love document it even more!  This scratch map is just like the ones you can buy in store but is easy to make for yourself or gift to a travel buddy.",
  author_id: user7.id
  })
project5 = Project.create!({title: "How to Make a Killer DIY Project Instruction Site",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,q_76,w_1182/v1506047119/hands-coffee-cup-apple_ska02g.jpg",
  description: "Its so simple, anybody can do it!  With 0 hours of freetime, and 24 hours of fun each day, you can design something as professional as MakeAnything in just 9 days.  Don't believe me just watch!",
  author_id: user4.id,
  video_url: "https://www.youtube.com/watch?v=mxphj0U5BGc"
  })
project6 = Project.create!({title: "How to Eat Delicious Crepes",
  img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506558619/ataio40zabrivqgdgii6.png",
  description: "Crepes are a delicious, sweet AND savory dish you can enjoy anytime, day or night! :)",
  author_id: user5.id
  })


step1 = Step.create!({title: "Plan and Acquire Tools",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,w_782/v1506099757/Chisel-Hammer-Work-Repair-Tools-Screwdriver-2145770_wuwrod.jpg",
   description: "Collect a hammer, two screwdrivers, 3 nails, and lots of wood.  Also make sure to create a detailed diagram with measurements to ensure success of the project.  Never go into something without a solid plan!",
   project_id: project1.id})

step2 = Step.create!({title: "Build a Frame",
   description: "This is no simple feat!  The frame is the base of the entire project so make sure to pay attention to detail.  Use your tools and follow your plans, I believe in you.",
   project_id: project1.id})

step3 = Step.create!({title: "Paint and Add Components",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,w_594/v1506100180/6293727982_8411741334_b_ltvtob.jpg",
   description: "This part is very important.  Paint it whatever color your hard desires but make sure it really splashes and dazzles the eyes.  If a skeeball game is ugly nobody will want to play it, guarenteed.  Also at this point you should install the ramp, the cups to catch the points with the associated score labelled on each cup. If safety is of concern or you have aggressive children maybe you should install a net to catch flying balls from damaging your wall and flooring.",
   project_id: project1.id})

step4 = Step.create!({title: "A woodwork example",
   video_url: "https://www.youtube.com/watch?v=HC7JK5EP0qE",
   description: "Check out the wooden risk board video I found online.  It might help show you some techniques and spread knowledge you can take with you in your skeeball making journey.",
   project_id: project1.id})

step5 = Step.create!({title: "Another example for comparison",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/c_scale,w_594/v1506100180/6293727982_8411741334_b_ltvtob.jpg",
   description: "This part is important too!  Watch the video for some inspiration on other woodworking projects you can make.  How does your ramp look?  Your ball cups? The world is your oyster.",
   video_url: "https://www.youtube.com/watch?v=1q6bZlHOCTA",
   project_id: project1.id})

step6 = Step.create!({title: "Congratulate yourself!",
   description: "That was a long journey, but you achieved excellent.  Take a deep breath, pat yourself on the back and enjoy your game.  Happy Skeeballin' :).",
   project_id: project1.id})

step7 = Step.create!({title: "Grab your favorite friend",
   description: "Everybody loves eating crepes.  Why not let a friend join in on the deliciousness.  Maybe two friends?  Maybe three!",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506558774/zssosarxfadchaenlvea.png",
   project_id: project6.id})
step8 = Step.create!({title: "Find a highly recommended Crepe place",
   description: "The Crepe House (http://thecrepehouse.com) on Polk Street is one good option. They have all sorts of crepes to choose from.",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506558990/onfvec9vpfbhgbtlreav.png",
   project_id: project6.id})
step9 = Step.create!({title: "Get outside and go walk to the creperie",
   description: "Ideally, take a safe route that goes through the funnest parts of town.  Remember to be alert and watch out for strangers.",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506559374/en7vv4futoebmrxlbmh0.png",
   project_id: project6.id})
step10 = Step.create!({title: "Eat some savory crepes first...",
   description: "Crepes can make a filling entree",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506559536/zhdtjwxrysvk2zx9ervh.png",
   project_id: project6.id})
step11 = Step.create!({title: "And have some sweet crepes for dessert",
   description: "Strawberries, whipped cream and of course, soft fluffy crepe :) ...with a side of ice cream.  Drop a comment letting me how great your night was.",
   img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506559599/tb1fxg6jxph6pmksdrz1.png",
   project_id: project6.id})


comment1 =Comment.create!({body: "Wowzers.  This was hard to build but I did it!",
   project_id: project1.id,
   user_id: user1.id})

comment2 =Comment.create!({body: "Nice job Cathy :) ",
   project_id: project1.id,
   user_id: user2.id})

comment3 =Comment.create!({body: "mmm I love ginger!",
   project_id: project2.id,
   user_id: user4.id})

comment4 =Comment.create!({body: "Yes, ginger is so good!",
   project_id: project2.id,
   user_id: user3.id})

comment5 =Comment.create!({body: "I can't wait to make this for my ex-neice-in-law!",
   project_id: project4.id,
   user_id: user9.id})
comment6 =Comment.create!({body: "What is an ex-neice-in-law?",
   project_id: project4.id,
   user_id: user8.id})
comment7 =Comment.create!({body: "This is so beautiful, only took a couple hours to create a masterpiece.  I used different colors to create a rainbow effect.",
   project_id: project4.id,
   user_id: user3.id})

comment8 =Comment.create!({body: "Oh my!  These pics make me so hungry!  I think I might grab 2 or 3 of my favorite friends and get crepes tonight.  Doug, you down?",
   project_id: project6.id,
   user_id: user9.id})
comment9 =Comment.create!({body: "Heck yesssss, I loveeeee savory crepes",
   project_id: project6.id,
   user_id: user2.id})
comment10 =Comment.create!({body: "I'm totally coming too.  But sweet crepes are far superior",
   project_id: project6.id,
   user_id: user3.id})
comment11 =Comment.create!({body: "Now I know how to eat delicious crepes, thanks tuan!",
   project_id: project6.id,
   user_id: user4.id})
comment11 =Comment.create!({body: "Glad you guys are all enjoying :)",
   project_id: project6.id,
   user_id: user5.id})
