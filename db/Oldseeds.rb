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
project7 = Project.create!({title: "Thai Red Curry Chicken", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506663814/pw7wks8hujyiqnno2yqx.png", video_url: "", description: "...is the bomb. Enough said. Let's cook!", author_id: user5.id})


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
Step.create!([
   {title: "Assemble your team.", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506661708/wsako1waadwkka4srzlq.png", video_url: "", description: "Candied ginger is serious business. Don't ever cook alone.", project_id: project2.id},
   {title: "Gather your ingredients", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506661882/pjtgc3ns1vmkx1jvvhjq.png", video_url: "", description: "Sugar, water and the special stuff (hint: it's not *actually* ginger) ;)", project_id: project2.id},
   {title: "Remember to cover your tracks", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506662041/e93bfigarstwtcghrytg.png", video_url: "", description: "When you're making candied ginger, you'll encounter a lot of haters and jealous types trying to steal your product. Watch your back and don't compromise...", project_id: project2.id},
   {title: "Now it's time to cook!", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506662203/c8ruf65y5ihe8ffmxtrl.png", video_url: "", description: "Now you're ready to cook. You can find some good recipes for candied ginger and stuff here: http://www.geniuskitchen.com/recipe/candied-ginger-and-syrup-123111\n\n...but seriously, this is what you're really looking for: http://mirror.bagelwood.com/textfiles/uploads/metanf.txt", project_id: project2.id},
   {title: "Verify your end product", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506662348/mfabfy13cqdql41trjcj.png", video_url: "", description: "Blue is good. If it doesn't look blue, add food coloring. Also, when you package for resale, don't forget, good marketing sells!", project_id: project2.id},
   {title: "Find a distributor", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506662507/luynefeidj6xw1cxilvv.png", video_url: "", description: "Obviously, you've made \"candied ginger\" for resell (only scrubs eat all of their product).\n\nBe careful. It's a dangerous world out there. Watch your back and trust no one!", project_id: project2.id},
   {title: "Find a junkyard", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506663002/y073r7hownfgfjfkdvxl.png", video_url: "", description: "You can find anything in a junkyard, including old and abandoned electronics. I know, it's so sad :(", project_id: project3.id},
   {title: "Wander, aimlessly and scrounge for parts", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506663123/foo0ahapxrutji9pfu7g.png", video_url: "", description: "Keep a look out for wires, connectors and robot-oriented components.", project_id: project3.id},
   {title: "If you're lucky, you'll find a robot", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506663259/fz5vu4yfh5tag3iv26u8.png", video_url: "", description: "The quickest way to find a charging robot is to just stumble upon one. If it's sexually confused, that's okay. It's a fixer upper.", project_id: project3.id},
   {title: "Give your robot a name", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506663388/vzp6hcwmeofkefpebcoi.png", video_url: "", description: "Robots only respond to you if they have a name. I named my robot Wall-E, because it's cute and I totally came up with it myself :).", project_id: project3.id},
   {title: "In a small bowl...", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506664075/kiympf866d4o9vl6gsdw.png", video_url: "", description: "...whisk the coconut milk with the curry paste and fish sauce until combined. ", project_id: project7.id},
   {title: "Heat a large skillet until very hot...", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506664224/xdbrzbtrnrdu9pficeeb.png", video_url: "", description: "Add 2 tablespoons of the vegetable oil and heat until just smoking. Season the chicken with salt and pepper and add it to the skillet in a single layer. Cook over high heat, turning once, until the chicken is browned but not cooked through, 4 to 5 minutes.", project_id: project7.id},
   {title: "Gather your ingredients.", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506663951/keuykhpnt99emvdupup2.png", video_url: "", description: "* 2/3 cup unsweetened coconut milk\n* 2 to 3 teaspoons Thai red curry paste\n* 1 tablespoon Asian fish sauce\n* 3 tablespoons vegetable oil, divided\n* 1 1/2 pounds skinless, boneless chicken thighs, cut into 1/2-inch strips, or skinless, boneless breasts, cut into 1 1/2-inch chunks\n* Salt and freshly ground black pepper\n* 1/2 pound shiitake mushrooms, stemmed, caps quartered\n* 1 tablespoon very finely chopped fresh ginger\n* 2 large garlic cloves, very finely chopped\n* 1/2 cup water\n* Toasted peanuts and cilantro leaves, for garnish\n* Steamed rice and lime wedges, for serving", project_id: project7.id},
   {title: "Transfer the chicken to a plate...", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506664365/vgenemqle5kbhufkov3z.png", video_url: "", description: "...pour off the fat in the skillet. Add the remaining 1 tablespoon of vegetable oil to the skillet. Add the shiitake caps and stir-fry over high heat until lightly browned, about 5 minutes. Stir in the ginger and garlic, stir-fry for 1 minute.", project_id: project7.id},
   {title: "Add the chicken, red curry mixture and the water and bring to a boil...", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506664447/bilrjzwk5sl72yukbeht.png", video_url: "", description: "Reduce heat and simmer for 2 to 3 minutes or until the chicken is cooked through.", project_id: project7.id},
   {title: "Transfer the chicken and curry sauce to a serving bowl...", img_url: "https://res.cloudinary.com/make-anything/image/upload/v1506664540/rwlg5arglcqgsxtllzfx.png", video_url: "", description: "...and garnish with peanuts and cilantro. Serve immediately with rice and lime wedges.", project_id: project7.id}])



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
