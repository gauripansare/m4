
gComputerData = {
    Status: "NotStarted",
    AssessmentScore: "4",
    VisitedNumberOfPages: "0",
    LastVisitedPage: "", // UserSelectedOptionId will be used to jump to the unattempted question
    RandomizeQuestions: true,
    RandomizeOptions: true,
    baseunitprice:0,
    baseunitname:"",
    CartCost:0,
    Budget:1800,
    AllAnswered:false,
    Questions: [
                    {
                        QuestionId: "1",
                        QuestionHeading:"Choose Your Processor",
                        ReviewHeading:"Processor",
                        InstructionText:"<p>Now that you've chosen the type of computer you wish to purchase, it's time to start customizing it. Remember that different types of software have minimum requirements in terms of memory and processor power.</p><p>The processor, or CPU, is the brain of the computer and is responsible for executing instructions. You should choose a processor that meets or exceeds the minimum requirements of the software you will need to run. Roll your mouse over the software icons below to see the system requirements for each.</p><p> Select the <b>processor</b> you want for your computer and click <b>Add to Cart</b>.​​</p>",
                        QuestionText: "Select the <b>processor</b> you want for your computer and click <b>Add to Cart</b>.",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "AMD Athlon (1.7 GHz/1MB cache) [add $100]", 
                                         "feedback":"This is not a good option for you. Note that your job description infers that you will need to run the Microsoft Office suite of products, in addition to Adobe Photoshop. You may even consider Adobe’s Creative Suite 5 Design Premium at some point. In order to run these latter programs, you need at least a 1.8 GHz or faster processor.",
                                         points:0,
                                         cost:100,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Intel Celeron (1.8 GHz/0.5MB cache) [add $100]", "feedback":"This is not a good option for you. Note that your job description infers that you will need to run the Microsoft Office suite of products, in addition to Adobe Photoshop. You may even consider Adobe’s Creative Suite 5 Design Premium at some point. In order to run these latter programs, you need at least a 1.8 GHz or faster processor. Choosing the minimum requirement for your processor is not a good idea.",
                                         points:0,
                                         cost:100,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Intel Core 2 (2.8 GHz/8MB cache) [add $180]", "feedback":"This is the best option for you. It is much cheaper than the more powerful 3.2 GHz Intel i7 option, but it still fulfills your needs and meets your software system requirements. For most users, there wouldn’t be much performance difference.",
                                         points:8,
                                         cost:180,
                                         iscorrect:true
                                     },
                                     {
                                        "OptionId": "4",
                                        "OptionText": "Intel Core i7 (1.73 GHz/6MB cache) [add $250]", 
                                        "feedback": "While this option may work for you, remember that Adobe Photoshop recommends at least a 1.8 GHz processor. While it’s not practical to judge a processor’s performance simply based on a number, the cost of this processor combined with its processing speed make it not a very good option for you.",
                                        points:0,
                                        cost:250,
                                    },
                                    {
                                        "OptionId": "5",
                                        "OptionText": "Intel Core i7 (3.2 GHz/6MB cache) [add $300]", "feedback":"For budget-conscious consumers, choosing the most expensive processor isn’t always the best option. While this processor certainly meets your software requirements, it is $120 more than the Intel Core 2, and most users wouldn’t notice a difference in performance between the two. Still, you are within your budget, so if this is the option you choose, it does meet your needs.",
                                        points:4,
                                        cost:300,
                                    }


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another processor and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."

                    },
                    {
                        QuestionId: "2",
                        QuestionHeading:"How Much RAM?",
                        ReviewHeading:"RAM",
                        InstructionText:"<p>Now it’s time to consider RAM. RAM is your computer’s main memory and holds programs, data, and instructions currently in use for quick access by the processor. Remember that different types of software have minimum requirements in terms of memory and processor power. Roll your mouse over the software icons below to see the system requirements for each.</p><p> Select the amount of <b>RAM</b> you would like in your computer and click <b>Add to Cart</b>.​​</p>",
                        QuestionText: "Select the amount of <b>RAM</b> you would like in your computer and click <b>Add to Cart</b>.",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "512 MB RAM [add $25]", 
                                         "feedback":"This is not a good option for you. Note that your job description states that you will need to run the Microsoft Office suite of products, in addition to Adobe Photoshop. You may even consider Adobe’s Creative Suite 5 Design Premium at some point. While 512 MB for RAM is the minimum requirement for running many of the programs you’ll need, it is rarely a good idea to settle on the minimum. 1 GB is often the recommended minimum, with 2 or more GB preferred.",
                                         points:0,
                                         cost:25,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "1 GB RAM [add $50]",
                                         "feedback":"This is an okay option for you, but probably not the best. Note that your job description states that you will need to run the Microsoft Office suite of products, in addition to Adobe Photoshop. You may even consider Adobe’s Creative Suite 5 Design Premium at some point. While many programs recommend 1 GB of RAM, the more RAM your computer has, the better it will perform.",
                                         points:2,
                                         cost:50,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "2 GB RAM [add $75]", 
                                         "feedback":"This is a good option for you. It’s only $25 more than 1 GB of RAM, but gives you twice as much memory. While 4 or more GB of RAM would be optimal, this is within your budget and is sufficient for what you intend to use your computer for.",
                                         points:4,
                                         cost:75,
                                     },
                                     {
                                        "OptionId": "4",
                                        "OptionText": "4 GB RAM [add $100]", 
                                        "feedback":"This is the best option for you. It’s only $25 more than 2 GB of RAM, but gives you twice as much memory. 6 GB would be ideal, but at a savings of $100 over that option, this is the best choice for your budget.",
                                        points:8,
                                        cost:100,
                                        iscorrect:true
                                    },
                                    {
                                        "OptionId": "5",
                                        "OptionText": "6 GB RAM [add $200]", 
                                        "feedback":"6 GB of RAM is ideal, but at $200, fully $100 more than 4 GB, this may not be the best choice for somebody with a limited budget.",
                                        points:1,
                                        cost:200,
                                    }


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another RAM and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."

                      

                    },
                    {
                        QuestionId: "3",
                        QuestionHeading:"Size of Hard Drive",
                        ReviewHeading:"Hard Drive",
                        InstructionText:"<p>The hard drive is the primary storage device in your computer. As such, it stores your operating system, applications, and data files. Remember that different types of software have minimum requirements in terms of how much space they require on your hard drive. Roll your mouse over the software icons below to see the system requirements for each. Which hard drive would you like in your computer?</p><p> Select the <b>hard drive</b> you would like in your computer and click <b>Add to Cart</b>.</p>",
                        QuestionText: "Select the <b>hard drive</b> you would like in your computer and click <b>Add to Cart</b>.",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "500 GB Hard drive [add $45]", 
                                         "feedback":"This is an okay option, but certainly not the best. As the cost of storage has dropped over the years, larger hard drives have become more affordable. Still, if you choose a 500 GB hard drive for your computer, you do have the option of securing more storage with an external hard drive.",
                                         points:0,
                                         cost:45,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "750 GB Hard drive [add $75]",
                                         "feedback":"This is decent option for you. As the cost of storage has dropped over the years, larger hard drives have become more affordable (the 1 TB hard drive is only $14 more). Still, 750 GB is acceptable, and you always have the option of securing more storage with an external hard drive.",
                                         points:3,
                                         cost:75,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "1 TB Hard drive [add $89]", 
                                         "feedback":"This is decent option for you. As the cost of storage has dropped over the years, larger hard drives have become more affordable (the 2 TB hard drive is only $10 more). Still, 1 TB is acceptable, and you always have the option of securing more storage with an external hard drive.",
                                         points:3,
                                         cost:89,
                                     },
                                     {
                                        "OptionId": "4",
                                        "OptionText": "2 TB Hard drive [add $99]", 
                                        "feedback":"This is the best option for you. While it is the most expensive option, you are still well within your budget and at only $10 more than the 1 TB hard drive, this offers twice as much storage, so in terms of value, this is easily the best buy.",
                                        points:5,
                                        cost:99,
                                    },
                                    {
                                        "OptionId": "5",
                                        "OptionText": "3 TB Hard drive [add $110]", 
                                        "feedback":"This is the best option for you. While it is the most expensive option, you are still well within your budget and at only $11 more than the 2 TB hard drive, this offers twice as much storage, so in terms of value, this is easily the best buy.",
                                        points:8,
                                        cost:110,
                                        iscorrect:true
                                    }


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another hard drive and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."

                      

                    },
                    {
                        QuestionId: "4",
                        QuestionHeading:"External Storage",
                        ReviewHeading:"External Storage",
                        InstructionText:"<p>Now it’s time to consider your external storage options. An external drive can be used to back up your important data and provide additional storage to free up space on your internal drive.</p><p>Which <b>external storage</b> option would you like for your computer? Click <b>Add to Cart</b>.</p>",
                        QuestionText: "Select the <b>external storage</b> you would like in your computer and click <b>Add to Cart</b>.",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "250 GB portable external hard drive [add $55]", 
                                         "feedback":"This is not the best option for you. External storage is important for backing up important documents and media and 250 GB may sound like a lot, but depending on your media needs, that could go quickly. For only $30 more, the 500 GB drive is a better choice.",
                                         points:0,
                                         cost:55,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "500 GB portable external hard drive [add $85]",
                                         "feedback":"This is a good option for you. External storage is important for backing up important documents and media. To start, 500 GB is probably enough, but you may find yourself needing another external drive sooner than you think.",
                                         points:4,
                                         cost:85,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "1 TB portable external hard drive [add $139]", 
                                         "feedback":"This is probably the best option if you can stay within your budget and still afford it. External storage is important for backing up important documents and media, and a portable hard drive offers the most backup storage options.",
                                         points:6,
                                         cost:139,
                                         iscorrect:true
                                     }
                                     


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another external hard drive and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."


                    },
                    {
                        QuestionId: "5",
                        QuestionHeading:"Optical Storage",
                        ReviewHeading:"Optical Storage",
                        InstructionText:"<p>Now it’s time to consider your optical storage options. An optical drive can be used to back up your important data and provide an easy way to transfer files to a customer’s system or that of another sales rep.</p><p>Which <b>optical storage</b> option would you like for your computer? Click <b>Add to Cart</b>.</p>",
                        QuestionText: "Select the <b>optical storage</b> you would like in your computer and click <b>Add to Cart</b>.",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "CD R/W 700 MB Capacity with 20 discs [add $49]", 
                                         "feedback":"This is probably not a good choice for you. For the most part, CDs have been replaced by DVDs, which have a much larger storage capacity. Most software packages also now require a DVD drive.",
                                         points:0,
                                         cost:49,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "DVD R/W Single Layer 4.7 GB Capacity with 20 discs [add $89]",
                                         "feedback":"In terms of optical drives, this is a great choice for you. It’s within your budget and offers a lot more storage capacity than CD-ROMs. If you could swing it, the CD-RW/DVD-RW combo drive offers the most flexibility, but on your budget, this is a fine choice.",
                                         points:5,
                                         cost:89,
                                         iscorrect:true
                                     },
                                     
                                     {
                                        "OptionId": "3",
                                        "OptionText": "DVD R/W Dual Layer 8.5 GB Capacity with 20 discs [add $129]", 
                                        "feedback":"This is an attractive option, but at $129, it probably exceeds your needs in terms of an optical drive. The single layer option should be sufficient for most.",
                                        points:2,
                                        cost:129,
                                    },
                                    {
                                        "OptionId": "4",
                                        "OptionText": "CD-RW/DVD-RW Combo Drive [add $109]", 
                                        "feedback":"This is probably the best option, as it offers the most flexibility, but it might be a little steep at $109. Still, if you can afford it, it’s a good choice in terms of optical drives.",
                                        points:5,
                                        cost:109,
                                        iscorrect:true
                                    }
                                     


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another optical storage and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."


                    },
                    {
                        QuestionId: "6",
                        QuestionHeading:"Communication Devices",
                        ReviewHeading:"Communication Devices",
                        InstructionText:"<p>In order to be able to communicate effectively with clients and sales representatives while in the office by teleconferences, you’ll need some communication components.</p><p>Select the <b>components</b> you will need from these options (choose all that apply) and click <b>Add to Cart</b>.</p>",
                        QuestionText: "Select the <b>components</b> you will need from these options (choose all that apply) and click <b>Add to Cart</b>.",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Wireless Network Interface Card [add $55]", 
                                         "feedback":"Wireless Network Interface Card: Good. In order to be able to connect to a network, you’ll need a network interface card.",
                                         points:5,
                                         cost:55,
                                         iscorrect:true

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Printer/Copier/Fax [add $79]",
                                         "feedback":"Printer/Copier/Fax: While you may well need an all-in-one machine such as this, this is not a requirement for teleconferencing.",
                                         points:0,
                                         cost:79,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Web Cam [add $49]", 
                                         "feedback":"Web Cam: Good. At least part of the time when you are teleconferencing, you will want either a standalone or a built-in Web cam.",
                                         points:5,
                                         cost:49,
                                         iscorrect:true
                                     },
                                     {
                                        "OptionId": "4",
                                        "OptionText": "Joystick [add $15]", 
                                        "feedback":"Joystick: A joystick is not a communication requirement.",
                                        points:0,
                                        cost:15,
                                    },
                                    {
                                        "OptionId": "5",
                                        "OptionText": "DVD Projector [add $299]", 
                                        "feedback":"DVD Projector: A DVD projector would be useful for giving on-site presentations, but is not a requirement for teleconferences.",
                                        points:0,
                                        cost:299,
                                    }
                                     


                        ],
                        IsAnswered:false,
                        type:"checkbox",
                        Feedback : "You can select another communication components and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."


                    },
                    {
                        QuestionId: "7",
                        QuestionHeading:"Audio Devices",
                        ReviewHeading:"Audio Devices",
                        InstructionText:"<p>Select the <b>audio component</b> you will need from these options  and click <b>Add to Cart<b/>.</p>",
                        QuestionText: "<p>Select the <b>audio component</b> you will need from these options and click <b>Add to Cart<b/>.</p>",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Sound System [add $79]", 
                                         "feedback":"Sound System: Good. Obviously, in order to be able to communicate effectively, you need to hear what others are saying.",
                                         points:5,
                                         cost:79,
                                         iscorrect:true

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Surround Sound System [add $129]",
                                         "feedback":"Surround Sound System: This is probably not necessary, though if you have been budgeting appropriately and would prefer a surround sound system, it’s not a bad choice.",
                                         points:2,
                                         cost:129,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Microphone/Headset combination [add $49]", 
                                         "feedback":"Microphone/Headset combination: Good. Obviously, in order to be able to communicate effectively, others need to hear what you are saying.",
                                         points:5,
                                         cost:49,
                                         iscorrect:true
                                     }


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another audio component and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."

                      

                    },
                    {
                        QuestionId: "8",
                        QuestionHeading:"Video Output Options",
                        ReviewHeading:"Video card",
                        InstructionText:"<p>Now it’s time to consider your video output. You will need to select a video card, which will affect the quality of your presentations. You also need to decide on the size of your monitor. If you chose a notebook, you may want to consider a separate monitor for when you are at the office.</p><p>Select the <b>video card</b> you will need from these options and click <b>Add to Cart<b/>.</p>",
                        QuestionText: "<p>Select the <b>video card</b> you will need from these options and click <b>Add to Cart<b/>.</p>",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "128 MB Video Card [add $25]", 
                                         "feedback":"If all you were using your computer for were some light text-based projects and/or Internet browsing, this might be sufficient. But for the types of programs that you need to run, at least a 512 MB video card is recommended, with more being ideal.",
                                         points:0,
                                         cost:25,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "512 MB Video Card [add $50]",
                                         "feedback":"This is a decent choice for you, but you’ll find much better quality if you spent the extra $25 on the 1 GB card.",
                                         points:3,
                                         cost:50,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "1 GB Video Card [add $75]", 
                                         "feedback":"This is the best choice. A video card with higher memory can make a big difference in the quality of your graphics and video.",
                                         points:5,
                                         cost:75,
                                         iscorrect:true
                                     }
                                     


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another video card and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."
                     

                    },
                    {
                        QuestionId: "9",
                        QuestionHeading:"Video Output Options",
                        ReviewHeading:"Monitor/Screen",
                        InstructionText:"<p>Now it’s time to consider your video output. You will need to select a video card, which will affect the quality of your presentations. You also need to decide on the size of your monitor. If you chose a notebook, you may want to consider a separate monitor for when you are at the office.</p><p>Select the <b>monitor/screen</b> you will need from these options and click <b>Add to Cart<b/>.</p>",
                        QuestionText: "<p>Select the <b>monitor/screen</b> you will need from these options and click <b>Add to Cart<b/>.</p>",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "(Notebook) 17.3-inch wide-screen hi-definition [add $99]", 
                                         "feedback":"Good. If this will be your only monitor, it’s best that it be fairly large, but still portable enough.",
                                         points:5,
                                         cost:99,
                                         iscorrect:true

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "(Notebook) 14-inch wide-screen hi-definition [add $69]",
                                         "feedback":"This is not the best choice. While it is portable and probably lighter, the small screen could become cumbersome if this is your only monitor.",
                                         points:0,
                                         cost:69,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "(Notebook) 15.6-inch wide-screen hi-definition [add $79]", 
                                         "feedback":"This is a pretty good choice. However, you might find that if it is within your budget, the 17.3-inch screen offers greater flexibility.",
                                         points:3,
                                         cost:79,
                                     },
                                     {
                                         "OptionId": "4",
                                         "OptionText": "22” CRT Desktop Monitor [add $99]", 
                                         "feedback":"This is not a very good choice. CRT monitors are bulky and use a lot of energy. They have generally been replaced with smaller, more energy-efficient LCD screens.",
                                         points:0,
                                         cost:99,
                                     },
                                     {
                                        "OptionId": "5",
                                        "OptionText": '22" LCD Desktop Monitor [add $179]', 
                                        "feedback":"From a cost perspective, this is the best choice. LCD screens are now found on most desktop and notebook computers.",
                                        points:3,
                                        cost:179,
                                    },
                                    {
                                        "OptionId": "6",
                                        "OptionText": '22" Plasma Desktop Monitor [add $379]', 
                                        "feedback":"Given your budget, this is probably not the best choice. Plasma monitors are generally more expensive and larger and are more often used in conference rooms.",
                                        points:1,
                                        cost:379,
                                    }

                                     


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another monitor/screen and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."
                     

                    },
                    {
                        QuestionId: "10",
                        QuestionHeading:"Input Devices",
                        ReviewHeading:"Keyboard",
                        InstructionText:"<p>Now it’s time to choose your input peripherals. Even if you are building a notebook, you may want to consider having a full-sized keyboard and a mouse for when you are in the office.</p><p>Select the <b>input peripherals (keyboard) </b> you will need from these options and click <b>Add to Cart<b/>.</p>",
                        QuestionText: "<p>Select the <b>input peripherals (keyboard) </b> you will need from these options and click <b>Add to Cart<b/>.</p>",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Full-Size Keyboard [add $25]", 
                                         "feedback":"This is an okay choice. Wrist strain and conditions such as Carpel Tunnel Syndrome are becoming more and more common, so ergonomic keyboards are a better choice.",
                                         points:0,
                                         cost:25,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Ergonomic Keyboard [add $49]",
                                         "feedback":"This is a good choice for you, as ergonomic keyboards are designed to put your wrists in a more natural position in order to reduce strain.",
                                         points:3,
                                         cost:49,
                                         iscorrect:true
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "USB Wireless Ergonomic Keyboard [add $89]", 
                                         "feedback":"Considering your budget, this is probably not the best choice. But, if you can afford it, it’s a better choice than a regular full-size keyboard, since the ergonomic keyboard puts your wrists in a more natural position in order to reduce strain.",
                                         points:2,
                                         cost:89,
                                     }                                     


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another keyboard and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."
                     
                      

                    },
                    {
                        QuestionId: "11",
                        QuestionHeading:"Input Devices",
                        ReviewHeading:"Mouse",
                        InstructionText:"<p>Now it’s time to choose your input peripherals. Even if you are building a notebook, you may want to consider having a full-sized keyboard and a mouse for when you are in the office.</p><p>Select the <b>input peripherals (mouse) </b> you will need from these options and click <b>Add to Cart<b/>.</p>",
                        QuestionText: "<p>Select the <b>input peripherals (mouse) </b> you will need from these options and click <b>Add to Cart<b/>.</p>",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "USB Wireless Mouse [add $19]", 
                                         "feedback":"This is an okay choice. It’s inexpensive, but wrist strain and conditions such as Carpel Tunnel Syndrome are becoming more and more common, so an ergonomic mouse is a better choice.",
                                         points:0,
                                         cost:19,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "USB Wireless Ergonomic Mouse [add $69]",
                                         "feedback":"Considering your budget, this is probably not the best choice. But, if you can afford it, it’s a better choice than a regular wireless mouse, since the ergonomic mouse puts your wrist in a more natural position in order to reduce strain.",
                                         points:3,
                                         cost:69,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Ergonomic Mouse [add $39]", 
                                         "feedback":"This is a good choice for you, as ergonomic mice are designed to put your wrist in a more natural position in order to reduce strain.",
                                         points:2,
                                         cost:39,
                                         iscorrect:true
                                     }                                     


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another mouse and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."
                     
                      

                    },
                    {
                        QuestionId: "12",
                        QuestionHeading:"Output Devices",
                        ReviewHeading:"Printer",
                        InstructionText:"<p>Here, you need to decide on your printing output needs. Because you are frequently printing catalog updates, quality is a point of concern for you as well.</p><p>Select the best <b>printer</b> you will need from these options and then click <b>Add to Cart</b>.</p>",
                        QuestionText: "<p>Select the best <b>printer</b> you will need from these options and then click <b>Add to Cart</b>.</p>",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Color Inkjet Printer Maximum 9600 x 2400 color dpi [add $59]", 
                                         "feedback":"This is a good choice for you. The 9600 x 2400 color dpi is worth the additional $20 over the next choice, but you might consider the all-in-one machine for another $20, if that fits within your budget. It offers good quality, plus the benefits of the scanner, fax machine, and copier.",
                                         points:1,
                                         cost:59,

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Color Inkjet Printer Maximum 4800 x 1200 color dpi [add $39]",
                                         "feedback":"This is not a good option for you. If you are concerned with quality, you’ll want to invest the extra money into a printer with a higher output resolution.",
                                         points:0,
                                         cost:39,
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Inkjet Pro Color Maximum 9600 x 2400 color dpi [add $79]", 
                                         "feedback":"This is the best choice for you. For only $20 over the color inkjet with the same resolution you’re essentially getting three additional machines.",
                                         points:3,
                                         cost:79,
                                         iscorrect:true
                                     },
                                     {
                                        "OptionId": "4",
                                        "OptionText": "Black & White Laser Printer Maximum 1200 x 1200 dpi [add $119]", 
                                        "feedback":"Considering your budget, this is probably not a good choice. If you are concerned with quality and will be printing catalog updates, you probably need a color option, and the Inkjet Pro all-in-one machine offers better value.",
                                        points:1,
                                        cost:119,
                                    },
                                    {
                                        "OptionId": "5",
                                        "OptionText": "Color Laser Printer Maximum 4800 x 1200 color dpi [add $189]", 
                                        "feedback":"Considering your budget, this is probably not a good choice. If you are concerned with quality and will be printing catalog updates, you probably need a color option, but the Inkjet Pro all-in-one machine offers better value.",
                                        points:1,
                                        cost:189,
                                    },
                                    {
                                        "OptionId": "6",
                                        "OptionText": "Laser Pro Black & White Maximum 1200 x 1200 dpi [add $179]", 
                                        "feedback":"Considering your budget, this is probably not a good choice. If you are concerned with quality and will be printing catalog updates, you probably need a color option, and the Inkjet Pro all-in-one machine offers better value.",
                                        points:1,
                                        cost:179,
                                    },
                                    {
                                        "OptionId": "7",
                                        "OptionText": "Portable Black & White Thermal Printer 400 x 400 dpi [add $35]", 
                                        "feedback":"This is probably a good choice for you, provided you have also chosen a higher-quality printer to have while you are in the office. The lack of quality with a thermal printer dictates that quality shouldn’t matter if you are printing on the spot, so color is really not that important. The cheaper black and white should best suit most needs.",
                                        points:3,
                                        cost:35,
                                        iscorrect:true
                                    },
                                    {
                                        "OptionId": "8",
                                        "OptionText": "Portable Two-Color Thermal Printer 400 x 400 dpi [add $79]", 
                                        "feedback":"This is not really a good choice, especially if you have not chosen a higher-quality printer as well. The lack of quality with a thermal printer dictates that quality shouldn’t matter if you are printing on the spot, so color is really not that important. The cheaper black and white thermal printer should best suit most needs.",
                                        points:0,
                                        cost:79,
                                    }                                                                                       


                        ],
                        IsAnswered:false,
                        Feedback : "You can select another printer and click <b>Update cart</b>. If no change, click <b>Next</b> to proceed."
                     
                      

                    },
                    {
                        QuestionId: "13",
                        QuestionHeading:"Build My Computer",
                        InstructionText:"",
                        QuestionText: "<p>Your computer is ready to be built. Please review the system details. You can review each section by clicking the icons at the top of the screen. If your build exceeds your budget of $1800, please modify your choices.</p><p>Click <b>Build My Computer</b> when you are satisfied that you have built the best computer for your buck.</p>",
                        QuestionText1: "<p>Your computer is ready to be built. Please review the system details as your build exceeds your budget of $1800. You can review each section by clicking the icons at the top of the screen.</p><p>Click <b>Build My Computer</b> when you are satisfied that you have built the best computer for your buck.</p>",
                        
                        IsAnswered:false,
                        type:"button"
                      

                    }
                   
                    

    ]
}