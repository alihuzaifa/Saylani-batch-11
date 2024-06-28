const person = {
    name: "Usman",
    age: 24,
    gender: "Male",
    education: "Master",
    maritalStatus: "Married",
}
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "None of the above"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        answer: "<ul>"
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            "font-size",
            "text-size",
            "font-style",
            "text-style"
        ],
        answer: "font-size"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            "color",
            "text-color",
            "font-color",
            "style-color"
        ],
        answer: "color"
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            "<a>http://www.example.com</a>",
            '<a href="http://www.example.com">Click here</a>',
            "<hyperlink>http://www.example.com</hyperlink>",
            "<link>http://www.example.com</link>"
        ],
        answer: '<a href="http://www.example.com">Click here</a>'
    },
    {
        question: "How do you add a comment in HTML?",
        options: [
            "<!-- This is a comment -->",
            "// This is a comment",
            "' This is a comment",
            "** This is a comment **"
        ],
        answer: "<!-- This is a comment -->"
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        options: [
            "background-color",
            "color",
            "bgcolor",
            "background-style"
        ],
        answer: "background-color"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "class",
            "styles",
            "font",
            "style"
        ],
        answer: "style"
    },
    {
        question: "What is the correct HTML for inserting an image?",
        options: [
            '<img src="image.jpg" alt="MyImage">',
            '<image src="image.jpg" alt="MyImage">',
            '<img alt="MyImage">image.jpg</img>',
            '<img href="image.jpg" alt="MyImage">'
        ],
        answer: '<img src="image.jpg" alt="MyImage">'
    },
    {
        question: "How do you center align a block element horizontally in CSS?",
        options: [
            "margin: 0 auto;",
            "text-align: center;",
            "align: center;",
            "padding: 0 auto;"
        ],
        answer: "margin: 0 auto;"
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: [
            "<tr>",
            "<td>",
            "<th>",
            "<table>"
        ],
        answer: "<tr>"
    },
    {
        question: "How do you make a list that lists its items with squares in HTML?",
        options: [
            "<ul style='list-style-type: square;'>",
            "<ul style='list-type: square;'>",
            "<ol style='list-type: square;'>",
            "<ol style='list-style-type: square;'>"
        ],
        answer: "<ul style='list-style-type: square;'>"
    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: [
            "p {font-weight: bold;}",
            "p {text-style: bold;}",
            "p {font: bold;}",
            "p {style: bold;}"
        ],
        answer: "p {font-weight: bold;}"
    },
    {
        question: "How do you make the text bold in CSS?",
        options: [
            "font-weight: bold;",
            "text-style: bold;",
            "font: bold;",
            "style: bold;"
        ],
        answer: "font-weight: bold;"
    },
    {
        question: "Which attribute is used to provide an advisory text about an element or its contents?",
        options: [
            "tooltip",
            "description",
            "title",
            "advice"
        ],
        answer: "title"
    },
    {
        question: "How do you group elements in CSS to apply a style to them collectively?",
        options: [
            "Using the class attribute",
            "Using the group attribute",
            "Using the tag attribute",
            "Using the style attribute"
        ],
        answer: "Using the class attribute"
    },
    {
        question: "Which tag is used to define a division or a section in an HTML document?",
        options: [
            "<div>",
            "<section>",
            "<article>",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        options: [
            "h1 {background-color: #ffffff;}",
            "<h1 style='background-color: #ffffff;'>",
            "h1 {color: background-color: #ffffff;}",
            "<h1 style='color: background-color: #ffffff;'>"
        ],
        answer: "h1 {background-color: #ffffff;}"
    },
    {
        question: "Which attribute is used to specify that an input field must be filled out?",
        options: [
            "validate",
            "required",
            "fill",
            "necessary"
        ],
        answer: "required"
    },
    {
        question: "How do you change the font size of a text?",
        options: [
            "font-size: 12px;",
            "text-size: 12px;",
            "size: 12px;",
            "font: 12px;"
        ],
        answer: "font-size: 12px;"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "class",
            "styles",
            "font",
            "style"
        ],
        answer: "style"
    },
    {
        question: "Which property is used to change the left margin of an element?",
        options: [
            "padding-left",
            "margin-left",
            "indent",
            "left-margin"
        ],
        answer: "margin-left"
    },
    {
        question: "Which CSS property is used to control the space between the elements in a list?",
        options: [
            "list-style",
            "spacing",
            "list-space",
            "margin"
        ],
        answer: "margin"
    },
    {
        question: "What is the correct HTML for inserting a background image?",
        options: [
            "<background img='background.jpg'>",
            "<img src='background.jpg' alt='background'>",
            "<background src='background.jpg'>",
            "<body style='background-image:url(background.jpg);'>"
        ],
        answer: "<body style='background-image:url(background.jpg);'>"
    },
    {
        question: "How can you make a list that lists its items in reverse order?",
        options: [
            "<ul reversed>",
            "<ol reversed>",
            "<ul start='reverse'>",
            "<ol reversed='true'>"
        ],
        answer: "<ol reversed>"
    },
    {
        question: "Which CSS property is used to set the height of an element?",
        options: [
            "size",
            "height",
            "width",
            "length"
        ],
        answer: "height"
    },
    {
        question: "Which attribute is used to provide an advisory text about an element or its contents?",
        options: [
            "tooltip",
            "description",
            "title",
            "advice"
        ],
        answer: "title"
    },
    {
        question: "How do you group elements in CSS to apply a style to them collectively?",
        options: [
            "Using the class attribute",
            "Using the group attribute",
            "Using the tag attribute",
            "Using the style attribute"
        ],
        answer: "Using the class attribute"
    },
    {
        question: "Which tag is used to define a division or a section in an HTML document?",
        options: [
            "<div>",
            "<section>",
            "<article>",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        options: [
            "h1 {background-color: #ffffff;}",
            "<h1 style='background-color: #ffffff;'>",
            "h1 {color: background-color: #ffffff;}",
            "<h1 style='color: background-color: #ffffff;'>"
        ],
        answer: "h1 {background-color: #ffffff;}"
    },
    {
        question: "Which attribute is used to specify that an input field must be filled out?",
        options: [
            "validate",
            "required",
            "fill",
            "necessary"
        ],
        answer: "required"
    },
    {
        question: "How do you change the font size of a text?",
        options: [
            "font-size: 12px;",
            "text-size: 12px;",
            "size: 12px;",
            "font: 12px;"
        ],
        answer: "font-size: 12px;"
    }
]
export { person, quizQuestions }