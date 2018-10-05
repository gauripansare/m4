
gRecordData = {
    Status: "NotStarted",
    AssessmentScore: "4",
    VisitedNumberOfPages: "0",
    LastVisitedPage: "", // UserSelectedOptionId will be used to jump to the unattempted question
    RecordTitle: "How Does Barbara Corcoran Pick Her Investments on Shark Tank?",
    LandingPageURL: "record2_landing.htm",
    QuestionSequence: "Numbers", // this can be used later if different display style is required
    OptionSequence: "LowerAlphabets", // this can be used later if different display style is required
    RandomizeQuestions: true,
    RandomizeOptions: true,
    Questions: [
        {
            QuestionId: "1",
            QuestionText: "A computer processor is also known as which of the following?",
            Options: [
                {
                    "OptionId": "1",
                    "OptionText": "Memory",
                    "IsCorrect": false,

                },
                {
                    "OptionId": "2",
                    "OptionText": "CPU",
                    "IsCorrect": true,
                    "score": 2
                },
                {
                    "OptionId": "3",
                    "OptionText": "Motherboard",
                    "IsCorrect": false
                }

            ],
            IsAnswered: false,
            CorrectFeedback: "That’s right.",
            IncorrectFeedback: "​That’s not right. A computer processor is also known as a CPU (central processing unit).",
            "UserSelectedOptionId": ""

        },
        {
            QuestionId: "2",
            QuestionText: "Which of the following is not a computer peripheral?",
            Options: [
                {
                    "OptionId": "1",
                    "OptionText": "Motherboard",
                    "IsCorrect": true,
                    score: 2,
                },
                {
                    "OptionId": "2",
                    "OptionText": "Printer",
                    "IsCorrect": false

                },
                {
                    "OptionId": "3",
                    "OptionText": "Keyboard and mouse",
                    "IsCorrect": false


                }

            ],
            IsAnswered: false,
            IncorrectFeedback: "That’s not right. Keyboards, Printers and mice are considered computer peripherals.​",
            CorrectFeedback: "That’s right.​",
            "UserSelectedOptionId": ""

        },
        {
            QuestionId: "3",
            QuestionText: "Which of the following is not a type of port on a computer?",
            Options: [
                {
                    "OptionId": "1",
                    "OptionText": "Ethernet",
                    "IsCorrect": false

                },
                {
                    "OptionId": "2",
                    "OptionText": "XML",
                    "IsCorrect": true,
                    score: 2
                },
                {
                    "OptionId": "3",
                    "OptionText": "Audio",
                    "IsCorrect": false
                }

            ],
            IsAnswered: false,
            IncorrectFeedback: "​That’s not right. Common computer ports include USB, Firewire, VGA, Ethernet, Audio, and HDMI.​",
            CorrectFeedback: "That’s right. XML is not a type of computer port.​",
            "UserSelectedOptionId": ""

        },
        {
            QuestionId: "4",
            QuestionText: "What is the purpose of cache memory?",
            Options: [
                {
                    "OptionId": "1",
                    "OptionText": "Cache memory stores the operating system, programs, and data the computer is currently using.",
                    "IsCorrect": false
                },
                {
                    "OptionId": "2",
                    "OptionText": "Cache memory is used to permanently store files for fast and easy retrieval.",
                    "IsCorrect": false
                    ,
                    score: 2
                },
                {
                    "OptionId": "3",
                    "OptionText": "Cache memory very fast memory that’s used to store frequently accessed information close to the processor.",
                    "IsCorrect": true,

                }

            ],
            IsAnswered: false,
            IncorrectFeedback: "​That’s not right. Cache memory very fast memory that’s used to store frequently accessed information close to the processor.​​",
            CorrectFeedback: "That’s right.​",
            "UserSelectedOptionId": ""

        }

    ]
}