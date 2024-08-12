export interface BlogItem {
  link: string;
  mainTitle: string;
  mainDescription: string;
  image: string;
  tag: {
    Day?: string;
    Date: string;
    Author: string;
    Type?: string;
  };
  content: {
    title?: string;
    description: string[];
  }[];
}

export const BlogItems: BlogItem[] = [
  //1
  {
    link: "starting-a-career-in-web-design",
    mainTitle: "Starting and Growing a Career in Web Design",
    mainDescription:
      "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",

    content: [
      {
        description: [
          "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. The prediction is that by 2029, the job outlook for these two fields will grow by 8%—significantly faster than average. Whether you’re seeking salaried employment or aiming to work in a freelance capacity, a career in web design can offer a variety of employment arrangements, competitive salaries, and opportunities to utilize both technical and creative skill sets.",
        ],
      },
      {
        title: "What does a career in web design involve?",
        description: [
          "A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video.  Requiring a range of creative and technical skills, web designers may be involved in work across a range of industries, including software companies, IT consultancies, web design companies, corporate organizations, and more. In contrast with web developers, web designers tend to play a more creative role, crafting the overall vision and design of a site, and determining how to best incorporate the necessary functionality. However, there can be significant overlap between the roles.",
        ],
      },
      {
        title: "Full-stack, back-end, and front-end web development",
        description: [
          "The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends to group web developers and digital designers into one category. However, they define them separately, stating that web developers create and maintain websites and are responsible for the technical aspects including performance and capacity.  Web or digital designers, on the other hand, are responsible for the look and functionality of websites and interfaces. They develop, create, and test the layout, functions, and navigation for usability. Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.",
        ],
      },
      {
        title: "Are web designers in demand in 2022?",
        description: [
          "In our ever-increasingly digital environment, there is a constant need for websites—and therefore for web designers and developers. With 17.4 billion websites in existence as of January 2020, the demand for web developers is only expected to rise.Web designers with significant coding experience are typically in higher demand, and can usually expect a higher salary. Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others. But certain skill sets are basic to web design, most of which are key to how to become a web designer in 2022.",
        ],
      },
    ],

    image: "/BlogAssets/mountains.jpg",
    tag: {
      Day: "Friday",
      Date: "April 8, 2022",
      Author: "John Doe",
      Type: "FEATURED",
    },
  },
  //2
  {
    link: "create-a-landing-page-that-performs-great",
    mainTitle: "Create a Landing Page That Performs Great",
    mainDescription:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
    content: [
      {
        title: "What is a landing page?",

        description: [
          "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue. Unlike typical web pages, landing pages only have one call to action, or CTA, and they are usually tied to a specific marketing or advertising campaign. The hyper-focused nature of landing pages means they come with a pretty standard set of best practices.",
        ],
      },
      {
        title: "Landing pages vs. front pages",

        description: [
          "A typical front page or website in general includes a full navigation bar with tons of links throughout the page linking to other pages or pieces of content. A good landing page should only have one link, or multiple links that all point to the same thing. Having one CTA on your landing page increases conversions because there’s less distraction—fewer equally appealing options to prompt your users into leaving your landing page.",
          "Your brand’s front page has totally different goals. It should show off your brand’s personality, let people explore different features, find blogs and support articles, or even apply for a job. But they won’t necessarily purchase your product from the front page. And that’s why we need landing pages.",
          "Since landing pages are tied to specific campaigns, you don’t need to worry about users lacking information about your product. They arrived at your landing page because they were interested in an ad or post on Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web. With super detailed campaigns pointing to easy-to-use landing pages, you’re getting high-quality leads that are actually interested in using your product.",
        ],
      },
      {
        title: "Best practices for creating a landing page",

        description: [
          "What makes an easy-to-use landing page? Overall it’s clear, concise, and doesn’t give users any options except for the main CTA.In terms of copy, your landing page should have one clear message. The header of your page should promote the desired action you want visitors to take. And additionally it should explain the benefits of performing this action.",
          "The visual design of your page should be very simple. Unlike your front page, this is not the place to go crazy with brand personality—so no wild animations or complex design elements. You wouldn’t want to distract visitors from performing the main action of your page.",
          "Landing page CTA’s are typically buttons, sometimes accompanied by an input field if you need to collect user information. To ensure your buttons are clicked, make sure they stand out visually. This can be done with contrasting the button color with your page background and clear copy on the button itself. For example, if you are asking visitors to book a demo, write“Book a demo” clearly on the CTA button.",
        ],
      },
    ],

    image: "/BlogAssets/river.jpg",
    tag: {
      Day: "Tuesday",
      Date: "March 15, 2022",
      Author: "John Doe",
    },
  },
  //3
  {
    link: "how-can-designers-prepare-for-the-future",
    mainTitle: "How Can Designers Prepare for the Future?",
    mainDescription:
      "Last month, I had the chance to attend CSS Day in Amsterdam, a two day event split between a “UI day” focusing on the intersection of design and development and a “CSS day”, with speakers who covered more in-depth, technical CSS subjects.",
    content: [
      {
        description: [
          "Last month, I had the chance to attend CSS Day in Amsterdam, a two day event split between a “UI day” focusing on the intersection of design and development and a “CSS day”, with speakers who covered more in-depth, technical CSS subjects. The talks were as diverse as the background of the speakers themselves, but there was one common thread: In this era of rapid change, are we, as product people, equipped to design for automation, machine learning, and AI?",
        ],
      },
      {
        title: "What does automation mean for designers?",
        description: [
          "It's hard to work on a product team that hasn’t automated some part of their workflow in the name of productivity. If machines can take care of the repeatable tasks and heavy lifting, designers can focus on doing more meaningful work. But how does this affect the way we use the work being created by machines?",
          "Josh Clark, founder of design studio Big Medium, provoked the audience with this very question during his talk, ‘A.I. is your New Design Material’. Some of the most impressive advancements in recent technology are things like facial recognition, predictive text, and image search, all powered by machine learning. But it's important to remember—all of these technologies are still built on code. The upside is less room for error. No real emotions, expectations, or feelings get in the way of the job it was designed to do.",
          "Yet, as humans, we assume that when facial recognition fails, the whole process is inherently flawed. But was it really?",
          "According to Josh, that is the most fundamental thing to understand when it comes to machines. Not meeting our human expectations, doesn’t automatically make the technology itself a failure. These things were, by definition, built on logic, which begs the question: Can a robot's solution actually be wrong?",
          "The point of introducing machine learning into our products was never to have them do all the work. Instead, algorithms and logic-based solutions ought only provide humans with better insight so as to empower us to arrive at better solutions, faster.",
          "This fundamental understanding our users that really helps us make better products. This might be a simple example, but if a computer can figure out how to walk on it's own, maybe it's time to start investigating why and how these solutions were formed.",
        ],
      },
      {
        title: "How do we design for the unknown future?",
        description: [
          "Jared Spool, Co-Founder of UIE asks, “What was the most important thing you learned yesterday, and how will it impact what you do in the future?”",
          "As designers and researchers, we essentially always need to think about how we design products for the future, even as we’re meeting the demands of present day design. A tall order, especially when things move as fast as they have been over the last decade.",
          "To start, Jared advocates for looking back at the ways in which our design processes have already changed.",
          "Remember when UX/UI wasn't a priority for many companies? As a consultant during a time when the Internet had yet to hit mass market appeal, Jared was able to steer many companies into a mindset that considered the user experience of a product.",
          "But this also lets us gain input into how UX and UI has looked over the years, which might give us a better idea of what these concepts will look like moving forward. Jared describes a term called 'The UX Tipping Point', with great actionable steps on how to get there.",
          "In the past, designers had to fight for a seat at the table. If today you’re not starting from a place of advocating for user experience (like they were 10 years ago), they’re likely not starting at that tipping point. As a result, designers still have to ensure that the role of UX matures within the company, as well as the understanding of what makes UX important. When an organization hits the last stage, and fully embraces UX design from everything the company does, they fully hit The UX Tipping Point.",
        ],
      },
      {
        title: "Are we designing for users or ourselves?",
        description: [
          "People don't always know what they want, even if they think the do. As Joe Leech, a UX psychologist says, 'People want more choices, but can't deal with them.'",
          "So how do we design for our users, if our users aren’t always telling us the truth? This is one of the most important questions, and something that extensive UX research helps us accomplish.",
          "Back in the 2000s, psychologists Sheena Iyengar and Mark Lepper ran a study regarding consumer choices. They went to a local supermarket, and instructed the store to only sell 6 varieties of jam one week, followed by 30 varieties the following week.",
          "They ran a study on how much jam was sold, and to everyone's surprise, more jam was sold on the week with only 6 choices. But interestingly enough, when the consumers were asked which week they preferred more, they responded with the week that had 30 choices.",
          "Using this analogy, Joe makes a point that is hard to argue with, 'A designer who doesn't understand psychology is going to be more successful than an architect who doesn't understand physics'.",
          "User research, and a wide variety of it, helps teams get as close as possible to the root of a user’s needs, over their wants. Studying responses on a larger scale is more work, but it helps form the foundation for true UX.",
        ],
      },
    ],

    image: "/BlogAssets/mountain.jpg",
    tag: {
      Day: "Monday",
      Date: "February 28, 2022",
      Author: "Guest Author",
    },
  },
  //4
  {
    link: "building-a-navigation-component",
    mainTitle: "Building a Navigation Component with Variables",
    mainDescription:
      "Navigation is key within any digital interface. Smart Components enable us to create custom interactive navigation components that work perfectly with the rest of your prototype.",

    content: [
      {
        description: [
          "Navigation is key within any digital interface. Smart Components enable us to create custom interactive navigation components that work perfectly with the rest of your prototype. In this guide, we will cover the concepts of nesting components, adding events to elements in a component using Event Variables, and passing these through your components. One of the main benefits of using nested components is that it provides full control over its states, such as unique hover states of elements within another component.",
        ],
      },
      {
        title: "Starting at the atomic level",
        description: [
          "Framer allows you to create fully interactive and animated components, and even allows you to nest components within other components. We’re building a navigation bar component for a website that will contain two different kinds of nested components, with their own unique interactions. Our project will contain a Navigation bar that contains various nested components, namely five Nav items and one Shopping cart component. The design of our nested components, the nav list item and the shopping cart, will impact how we design our navigation bar. For this reason, an optimal workflow includes starting with the 'deepest' nested component and building up from there.",
        ],
      },
      {
        title: "Nesting components",
        description: [
          "Once we have our two components ready, we can start creating the component in which we will nest these. Draw your navigation bar, select it on the canvas and click the Component tool in the Toolbar. To nest a different component in our new component, just drag any other component to the Component Canvas and place it within your designed navigation bar.",
        ],
      },
      {
        title: "Triggering interactions from the navigation bar",
        description: [
          "Back on the main canvas, we’d like to be able to tap 'Clothing' and navigate to an entire new Screen. If you’d connect the component using the Prototyping Connector to a new screen, we could set up an Interaction. However, this would be triggered if we tap anywhere within our component. This isn’t what we want to do, as we want to trigger this transition only from a specific element. This is where Event Variables come in, which are special types of Variables not attached to properties (like opacity or fill) but instead to events.",
        ],
      },
    ],
    image: "/BlogAssets/city.jpg",
    tag: {
      Day: "Sunday",
      Date: "February 6, 2022",
      Author: "Guest Author",
    },
  },
  //5
  {
    link: "how-to-create-an-effective",
    mainTitle: "How to Create an Effective Design Portfolio",
    mainDescription:
      "A portfolio is any method used to showcase your best work. No matter the industry, fashion, architecture, or design, there are tons of ways to display your work in order to get a new job or expand your audience or customers.",
    content: [
      {
        title: "What is a portfolio?",
        description: [
          "A portfolio is any method used to showcase your best work. No matter the industry, fashion, architecture, or design, there are tons of ways to display your work in order to get a new job or expand your audience or customers.",
        ],
      },
      {
        title: "Types of design portfolios",
        description: [
          "Depending on the type of design work that you do, there are different portfolio formats that will be best suited for your needs. A design portfolio can be digital in the form of a website, slideshow, or PDF but it can also be analog in the form of a print book or poster.",
        ],
      },
      {
        title: "Graphic design portfolio",
        description: [
          "When it comes to graphic design, designing a PDF as your portfolio is becoming more and more popular to highlight your work and PDF design skills. Using tools like InDesign and Photoshop you can create multi-page PDFs that can be fine-tuned and formatted any way you like. With new software, like Framer, it's becoming even easier to create a PDF online and share it in no time. The result of your PDF portfolio will be a brochure or one-pager piece that shows off examples of your best work along with the descriptions of each project and more related information.",
        ],
      },
      {
        title: "UX design portfolio",
        description: [
          "For UX designers, online portfolios are probably the most popular type today. This can be in the form of a simple one-page website with your contact information or a more thorough online gallery site. If your main discipline is web design, a portfolio website is the choice for you. It serves as an example itself of your web design skills, as well as highlighting your best work where it’s meant to be seen.Portfolio websites come with many benefits, especially as most of our work is done online. First, they can show off design properties like animation and interactivity.",
          "As an important part of UX design, it’s important to show these aspects so viewers get the full experience of your designs. Next, website portfolios are super easy to share. You can include the link in your social media bios as well as send the link to anyone at any time. Your work will become more readily available this way. Finally, online portfolios are a great way to show off your personality. As the more new-age mention of displaying your work, you are less constrained by the rules of the classic print portfolio.",
          "When going the online portfolio route there are some drawbacks. First, website portfolios often require knowledge of code to create. This can be a blocker for many UX designers. However, there are increasingly more tools like Framer that allow you to create a design portfolio without code. Next, you have to keep in mind the constraints of the web. Things like breakpoints, different browsers, and rendering issues that you wouldn’t have to think about in print portfolios. Finally, website portfolios can be more time-consuming to create depending on how many site pages you need.",
        ],
      },
    ],
    image: "/BlogAssets/house.jpg",
    tag: {
      Day: "Wednesday",
      Date: "January 12, 2022",
      Author: "Guest Author",
    },
  },
  //6
  {
    link: "starting-and-growing-a-career-in-web-design-copy",
    mainTitle: "Starting and Growing a Career in Web Design Copy",
    mainDescription:
      "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    content: [
      {
        description: [
          "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. The prediction is that by 2029, the job outlook for these two fields will grow by 8%—significantly faster than average. Whether you’re seeking salaried employment or aiming to work in a freelance capacity, a career in web design can offer a variety of employment arrangements, competitive salaries, and opportunities to utilize both technical and creative skill sets.",
        ],
      },
      {
        title: "What does a career in web design involve?",
        description: [
          "A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video.  Requiring a range of creative and technical skills, web designers may be involved in work across a range of industries, including software companies, IT consultancies, web design companies, corporate organizations, and more. In contrast with web developers, web designers tend to play a more creative role, crafting the overall vision and design of a site, and determining how to best incorporate the necessary functionality. However, there can be significant overlap between the roles.",
        ],
      },
      {
        title: "Full-stack, back-end, and front-end web development",
        description: [
          "The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends to group web developers and digital designers into one category. However, they define them separately, stating that web developers create and maintain websites and are responsible for the technical aspects including performance and capacity.  Web or digital designers, on the other hand, are responsible for the look and functionality of websites and interfaces. They develop, create, and test the layout, functions, and navigation for usability. Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.",
        ],
      },
      {
        title: "Are web designers in demand in 2022?",
        description: [
          "In our ever-increasingly digital environment, there is a constant need for websites—and therefore for web designers and developers. With 17.4 billion websites in existence as of January 2020, the demand for web developers is only expected to rise.Web designers with significant coding experience are typically in higher demand, and can usually expect a higher salary. Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others. But certain skill sets are basic to web design, most of which are key to how to become a web designer in 2022.",
        ],
      },
    ],
    image: "/BlogAssets/road.jpg",
    tag: {
      Day: "Friday",
      Date: "April 8, 2022",
      Author: "John Doe",
    },
  },
  //7
  {
    link: "create-a-landing-page-that-performs-great-copy",
    mainTitle: "Create a Landing Page That Performs Great Copy",
    mainDescription:
      "A portfolio is any method used to showcase your best work. No matter the industry, fashion, architecture, or design, there are tons of ways to display your work in order to get a new job or expand your audience or customers.",
    content: [
      {
        title: "What is a landing page?",

        description: [
          "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue. Unlike typical web pages, landing pages only have one call to action, or CTA, and they are usually tied to a specific marketing or advertising campaign. The hyper-focused nature of landing pages means they come with a pretty standard set of best practices.",
        ],
      },
      {
        title: "Landing pages vs. front pages",

        description: [
          "A typical front page or website in general includes a full navigation bar with tons of links throughout the page linking to other pages or pieces of content. A good landing page should only have one link, or multiple links that all point to the same thing. Having one CTA on your landing page increases conversions because there’s less distraction—fewer equally appealing options to prompt your users into leaving your landing page.",
          "Your brand’s front page has totally different goals. It should show off your brand’s personality, let people explore different features, find blogs and support articles, or even apply for a job. But they won’t necessarily purchase your product from the front page. And that’s why we need landing pages.",
          "Since landing pages are tied to specific campaigns, you don’t need to worry about users lacking information about your product. They arrived at your landing page because they were interested in an ad or post on Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web. With super detailed campaigns pointing to easy-to-use landing pages, you’re getting high-quality leads that are actually interested in using your product.",
        ],
      },
      {
        title: "Best practices for creating a landing page",

        description: [
          "What makes an easy-to-use landing page? Overall it’s clear, concise, and doesn’t give users any options except for the main CTA.In terms of copy, your landing page should have one clear message. The header of your page should promote the desired action you want visitors to take. And additionally it should explain the benefits of performing this action.",
          "The visual design of your page should be very simple. Unlike your front page, this is not the place to go crazy with brand personality—so no wild animations or complex design elements. You wouldn’t want to distract visitors from performing the main action of your page.",
          "Landing page CTA’s are typically buttons, sometimes accompanied by an input field if you need to collect user information. To ensure your buttons are clicked, make sure they stand out visually. This can be done with contrasting the button color with your page background and clear copy on the button itself. For example, if you are asking visitors to book a demo, write“Book a demo” clearly on the CTA button.",
        ],
      },
    ],
    image: "/BlogAssets/cup.jpg",
    tag: {
      Day: "Tuesday",
      Date: "March 15, 2022",
      Author: "John Doe",
    },
  },
  //8
  {
    link: "how-can-designers-prepare-for-the-future-copy",
    mainTitle: "How Can Designers Prepare for the Future? Copy",
    mainDescription:
      "Last month, I had the chance to attend CSS Day in Amsterdam, a two day event split between a “UI day” focusing on the intersection of design and development and a “CSS day”, with speakers who covered more in-depth, technical CSS subjects.",
    content: [
      {
        description: [
          "Last month, I had the chance to attend CSS Day in Amsterdam, a two day event split between a “UI day” focusing on the intersection of design and development and a “CSS day”, with speakers who covered more in-depth, technical CSS subjects. The talks were as diverse as the background of the speakers themselves, but there was one common thread: In this era of rapid change, are we, as product people, equipped to design for automation, machine learning, and AI?",
        ],
      },

      {
        title: "What does automation mean for designers?",
        description: [
          "It's hard to work on a product team that hasn’t automated some part of their workflow in the name of productivity. If machines can take care of the repeatable tasks and heavy lifting, designers can focus on doing more meaningful work. But how does this affect the way we use the work being created by machines?",
          "Josh Clark, founder of design studio Big Medium, provoked the audience with this very question during his talk, ‘A.I. is your New Design Material’. Some of the most impressive advancements in recent technology are things like facial recognition, predictive text, and image search, all powered by machine learning. But it's important to remember—all of these technologies are still built on code. The upside is less room for error. No real emotions, expectations, or feelings get in the way of the job it was designed to do.",
          "Yet, as humans, we assume that when facial recognition fails, the whole process is inherently flawed. But was it really?",
          "According to Josh, that is the most fundamental thing to understand when it comes to machines. Not meeting our human expectations, doesn’t automatically make the technology itself a failure. These things were, by definition, built on logic, which begs the question: Can a robot's solution actually be wrong?",
          "The point of introducing machine learning into our products was never to have them do all the work. Instead, algorithms and logic-based solutions ought only provide humans with better insight so as to empower us to arrive at better solutions, faster.",
          "This fundamental understanding our users that really helps us make better products. This might be a simple example, but if a computer can figure out how to walk on it's own, maybe it's time to start investigating why and how these solutions were formed.",
        ],
      },
      {
        title: "How do we design for the unknown future?",
        description: [
          "Jared Spool, Co-Founder of UIE asks, “What was the most important thing you learned yesterday, and how will it impact what you do in the future?”",
          "As designers and researchers, we essentially always need to think about how we design products for the future, even as we’re meeting the demands of present day design. A tall order, especially when things move as fast as they have been over the last decade.",
          "To start, Jared advocates for looking back at the ways in which our design processes have already changed.",
          "Remember when UX/UI wasn't a priority for many companies? As a consultant during a time when the Internet had yet to hit mass market appeal, Jared was able to steer many companies into a mindset that considered the user experience of a product.",
          "But this also lets us gain input into how UX and UI has looked over the years, which might give us a better idea of what these concepts will look like moving forward. Jared describes a term called 'The UX Tipping Point', with great actionable steps on how to get there.",
          "In the past, designers had to fight for a seat at the table. If today you’re not starting from a place of advocating for user experience (like they were 10 years ago), they’re likely not starting at that tipping point. As a result, designers still have to ensure that the role of UX matures within the company, as well as the understanding of what makes UX important. When an organization hits the last stage, and fully embraces UX design from everything the company does, they fully hit The UX Tipping Point.",
        ],
      },
      {
        title: "Are we designing for users or ourselves?",
        description: [
          "People don't always know what they want, even if they think the do. As Joe Leech, a UX psychologist says, 'People want more choices, but can't deal with them.'",
          "So how do we design for our users, if our users aren’t always telling us the truth? This is one of the most important questions, and something that extensive UX research helps us accomplish.",
          "Back in the 2000s, psychologists Sheena Iyengar and Mark Lepper ran a study regarding consumer choices. They went to a local supermarket, and instructed the store to only sell 6 varieties of jam one week, followed by 30 varieties the following week.",
          "They ran a study on how much jam was sold, and to everyone's surprise, more jam was sold on the week with only 6 choices. But interestingly enough, when the consumers were asked which week they preferred more, they responded with the week that had 30 choices.",
          "Using this analogy, Joe makes a point that is hard to argue with, 'A designer who doesn't understand psychology is going to be more successful than an architect who doesn't understand physics'.",
          "User research, and a wide variety of it, helps teams get as close as possible to the root of a user’s needs, over their wants. Studying responses on a larger scale is more work, but it helps form the foundation for true UX.",
        ],
      },
    ],

    image: "/BlogAssets/sky.jpg",
    tag: {
      Day: "Monday",
      Date: "February 28, 2022",
      Author: "John Doe",
    },
  },
  //9
  {
    link: "building-a-navigation-component-copy",
    mainTitle: "Building a Navigation Component with Variables Copy",
    mainDescription:
      "Navigation is key within any digital interface. Smart Components enable us to create custom interactive navigation components that work perfectly with the rest of your prototype.",

    content: [
      {
        description: [
          "Navigation is key within any digital interface. Smart Components enable us to create custom interactive navigation components that work perfectly with the rest of your prototype. In this guide, we will cover the concepts of nesting components, adding events to elements in a component using Event Variables, and passing these through your components. One of the main benefits of using nested components is that it provides full control over its states, such as unique hover states of elements within another component.",
        ],
      },
      {
        title: "Starting at the atomic level",
        description: [
          "Framer allows you to create fully interactive and animated components, and even allows you to nest components within other components. We’re building a navigation bar component for a website that will contain two different kinds of nested components, with their own unique interactions. Our project will contain a Navigation bar that contains various nested components, namely five Nav items and one Shopping cart component. The design of our nested components, the nav list item and the shopping cart, will impact how we design our navigation bar. For this reason, an optimal workflow includes starting with the 'deepest' nested component and building up from there.",
        ],
      },
      {
        title: "Nesting components",
        description: [
          "Once we have our two components ready, we can start creating the component in which we will nest these. Draw your navigation bar, select it on the canvas and click the Component tool in the Toolbar. To nest a different component in our new component, just drag any other component to the Component Canvas and place it within your designed navigation bar.",
        ],
      },
      {
        title: "Triggering interactions from the navigation bar",
        description: [
          "Back on the main canvas, we’d like to be able to tap 'Clothing' and navigate to an entire new Screen. If you’d connect the component using the Prototyping Connector to a new screen, we could set up an Interaction. However, this would be triggered if we tap anywhere within our component. This isn’t what we want to do, as we want to trigger this transition only from a specific element. This is where Event Variables come in, which are special types of Variables not attached to properties (like opacity or fill) but instead to events.",
        ],
      },
    ],
    image: "/BlogAssets/plane.jpg",
    tag: {
      Day: "Sunday",
      Date: "February 6, 2022",
      Author: "Guest Author",
    },
  },
  //10
  {
    link: "how-to-create-an-effective-copy",
    mainTitle: "How to Create an Effective Design Portfolio Copy",
    mainDescription:
      "A portfolio is any method used to showcase your best work. No matter the industry, fashion, architecture, or design, there are tons of ways to display your work in order to get a new job or expand your audience or customers.",
    content: [
      {
        title: "What is a portfolio?",
        description: [
          "A portfolio is any method used to showcase your best work. No matter the industry, fashion, architecture, or design, there are tons of ways to display your work in order to get a new job or expand your audience or customers.",
        ],
      },
      {
        title: "Types of design portfolios",
        description: [
          "Depending on the type of design work that you do, there are different portfolio formats that will be best suited for your needs. A design portfolio can be digital in the form of a website, slideshow, or PDF but it can also be analog in the form of a print book or poster.",
        ],
      },
      {
        title: "Graphic design portfolio",
        description: [
          "When it comes to graphic design, designing a PDF as your portfolio is becoming more and more popular to highlight your work and PDF design skills. Using tools like InDesign and Photoshop you can create multi-page PDFs that can be fine-tuned and formatted any way you like. With new software, like Framer, it's becoming even easier to create a PDF online and share it in no time. The result of your PDF portfolio will be a brochure or one-pager piece that shows off examples of your best work along with the descriptions of each project and more related information.",
        ],
      },
      {
        title: "UX design portfolio",
        description: [
          "For UX designers, online portfolios are probably the most popular type today. This can be in the form of a simple one-page website with your contact information or a more thorough online gallery site. If your main discipline is web design, a portfolio website is the choice for you. It serves as an example itself of your web design skills, as well as highlighting your best work where it’s meant to be seen.Portfolio websites come with many benefits, especially as most of our work is done online. First, they can show off design properties like animation and interactivity.",
          "As an important part of UX design, it’s important to show these aspects so viewers get the full experience of your designs. Next, website portfolios are super easy to share. You can include the link in your social media bios as well as send the link to anyone at any time. Your work will become more readily available this way. Finally, online portfolios are a great way to show off your personality. As the more new-age mention of displaying your work, you are less constrained by the rules of the classic print portfolio.",
          "When going the online portfolio route there are some drawbacks. First, website portfolios often require knowledge of code to create. This can be a blocker for many UX designers. However, there are increasingly more tools like Framer that allow you to create a design portfolio without code. Next, you have to keep in mind the constraints of the web. Things like breakpoints, different browsers, and rendering issues that you wouldn’t have to think about in print portfolios. Finally, website portfolios can be more time-consuming to create depending on how many site pages you need.",
        ],
      },
    ],
    image: "/BlogAssets/door.jpg",
    tag: {
      Day: "Wednesday",
      Date: "January 12, 2022",
      Author: "Guest Author",
    },
  },
];
