import MyNavBar from "./components/MyNavBar";
import MyAccordion from "./components/MyAccordion";
import MyCard from "./components/MyCard";
import MyFigure from "./components/MyFigure";

const techskills = [
  {
    title: "HTML / CSS / UX UI",
    image: "/html-5.svg",
    text: "The standard markup language for documents designed to be displayed in a web browser and is used for structuring and presenting content.",
  },
  {
    title: "Javascript",
    image: "/javascript.svg",
    text: "An object oriented programming language designed to make web development easier and more attractive.",
  },
  {
    title: "React",
    image: "/react.svg",
    text: "A free and open-source front-end JavaScript library for building user interfaces based on components. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  },
  {
    title: "Node.js",
    image: "/nodejs.svg",
    text: "A cross-platform, open-source server that acts as a back-end JavaScript runtime environment.",
  },
  {
    title: "(NO)SQL DB",
    image: "/mongodb.svg",
    text: "A type of database that stores and retrieves data without needing to define its structure first.",
  },
  {
    title: "Git",
    image: "/git.svg",
    text: "A distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
  },
];

const projects = [
  {
    projectTitle: "League Legacy",
    imageName: "/LeagueLegacy.png",
    about:
      "Your Yahoo Fantasy Sports History all in one place. Login using your Yahoo account and review your entire fantasy sports history for Fantasy Football, Fantasy Hockey, Fanstasy Basketball, & Fantasy Baseball. League Legacy will pull your entire history, from the first year you entered the league until present and provide you with all the stats you need to trash talk your friends and prove that you are unequivocally the best at Fantasy sports.",
    site: "https://league-legacy-edb.vercel.app",
    code: "https://github.com/ebro1230/LeagueLegacy",
  },
  {
    projectTitle: "Exchange Rate",
    imageName: "/ExchangeRate.png",
    about:
      "An easy tool to help you find the current exchange rates between 25 different currencies. Track the rates you want and receive email notifications when the exchange rate is higher than a certain threshold amount. You will also be notified when the exchange rate is rapidly climbing or falling so you can time your money exchange perfectly",
    site: "https://exchange-rate-edb.vercel.app",
    code: "https://github.com/ebro1230/ExchangeRate",
  },
  {
    projectTitle: "Fitness Tracker",
    imageName: "/FitnessTracker.png",
    about:
      "A one stop shop to track everything fitness. Input meals by searching for food from the USDA nutrition tracker or by creating your own food items. Track your weight, plan your fitness goals, and get calorie recommendations based on what you are trying to achieve.",
    site: "https://fitness-tracker-edb.vercel.app",
    code: "https://github.com/ebro1230/FitnessTracker",
  },
  {
    projectTitle: "GigGuide",
    imageName: "/GigGuide.png",
    about:
      "Any live music fans out there? Look no further than GigGuide. This website allows you to find live shows anywhere in the world from mainstream artists to local unknown bands. Based on your current location, you will be provided with a list of upcoming shows that you may be interested in. After signing up, as a fan you can favorite your artists and save upcoming shows or as an artist, you can post all of your upcoming shows so people can find where and when you are performing. As an artist, you can also post songs you've released with links to where fans can listen.",
    site: "https://gigguide.onrender.com",
    code: "https://github.com/ebro1230/GigGuide-FrontEnd",
  },
  // {
  //   projectTitle: "To Do List",
  //   imageName: "/ToDoList.jpg",
  //   about:
  //     "Always forget what you need when you're at the grocery store? Have a ton of things to do, but can't keep them straight in your head? This website is for you. This provides an easy to use, intuitive website for creating To Do Lists that you can edit, delete, or check off after completion.",
  //   site: "https://ebro1230.github.io/ToDoList2/",
  //   code: "https://github.com/ebro1230/ToDoList2/tree/EdBranchJustEd",
  // },
  // {
  //   projectTitle: "Cook Book w/Contentful CMS",
  //   imageName: "/Cookbook.jpg",
  //   about:
  //     "For those people that like to stay in, but never know what to cook, this cookbook provides easy to follow recipes for culinary dishes from around the world. For those of you that can't stand modern day food blogs, as an added bonus, this website doesn't give you a 20 page intro or backstory, just straight to the point with the ingredients and recipes.",
  //   site: "https://ebro1230.github.io/Contentful_to_NodeJS_Cookbook/",
  //   code: "https://github.com/ebro1230/Contentful_to_NodeJS_Cookbook",
  // },
  // {
  //   projectTitle: "Best Restaurants in Cologne",
  //   imageName: "/BRiC.jpg",
  //   about:
  //     "For any foodies that want to visit Cologne, this website should be your first stop. It provides you with the top 10 best restaurants in Cologne and all of the information you need to decide which one you want to visit. These restaurants are sure to satisfy any culinary buff's food cravings.",
  //   site: "https://bestrestaurantscologne.onrender.com",
  //   code: "https://github.com/ebro1230/Bootcamp_Crossover_2",
  // },
];

export default function Home() {
  return (
    <div className="background">
      <MyNavBar />
      <div className="about-me-container" id="about-me-container">
        <div className="col-lg-3 col-12 profilepic-and-badges">
          <MyFigure />
        </div>
        <div className="col-xl-8 col-lg-8 col-md-9 intro-text">
          <h5>Hi, I'm Ed Brown, an aspiring Full-Stack Developer. </h5>
          <br />
          <h5>
            Over the past 8 years, I've been working as a Biomedical Engineer,
            but decided it was time to make a career change and pursue something
            I am more passionate about.
          </h5>
          <br />
          <h5>
            From my previous experience in Biomedical Engineering, I have a
            strong foundation in problem-solving, critical thinking, schedule
            management, and attention to detail. These skills are easily
            transferable and applicable to Full-Stack Development. I'm confident
            that my background, combined with my newfound passion for Full-Stack
            Development, will allow me to bring a unique perspective to any team
            or project.
          </h5>
          <br />
          <h5>
            In my free time, when I'm not coding, I like going to see live
            music, traveling, and playing piano & tennis.
          </h5>
          <h5>
            I'm excited to take on the new challenges that Full-Stack
            Development brings, while I continue building my knowledge and
            skills in this ever-changing field.
          </h5>
        </div>
      </div>
      <div className="tech-skills-container" id="tech-skills-container">
        <div className="row techtitle">
          <h3>My Tech Skills</h3>
        </div>
        <div className="techcards">
          {techskills.map((skill, index) => {
            return (
              <MyCard
                key={index}
                title={skill.title}
                image={skill.image}
                text={skill.text}
              />
            );
          })}
        </div>
      </div>
      <div className="my-projects-div" id="my-projects-div">
        <div className="row projecttitle">
          <h3>My Projects</h3>
        </div>
        <div className="project-container">
          {projects.map((project, index) => {
            console.log(index);
            console.log(project.projectTitle);
            return (
              <MyAccordion
                key={index}
                projectNumber={index}
                projectTitle={project.projectTitle}
                imageName={project.imageName}
                about={project.about}
                site={project.site}
                code={project.code}
              />
            );
          })}
        </div>
      </div>
      <div className="contact-me-div" id="contact-me-div">
        <div className="row contacttitle">
          <h3>Contact Me</h3>
        </div>
        <div className="contact-me-text">
          <h5>
            If you want to exchange experiences, are looking for a passionate
            Full-Stack Web Developer, have a question, or want to connect don’t
            hesitate to contact me. I am happy to get in touch!{" "}
          </h5>
          <br />
          <h5>
            I am looking forward to your message via{" "}
            <a target="_blank" href="mailto:ebro1230@gmail.com">
              email
            </a>{" "}
            or{" "}
            <a target="_blank" href="https://www.linkedin.com/in/ebro1230/">
              LinkedIn
            </a>
            .
          </h5>
          <br />
          <h5>Ed Brown</h5>
          <h5>Dresden, Germany</h5>
        </div>
      </div>
    </div>
  );
}

{
  /* <Figure>
            <Figure.Image
              width={300}
              height={316}
              roundedCircle={true}
              alt="Profile Picture"
              src="/Headshot.jpg"
            />
            <Figure.Caption>
              <Row className="social-media-icons">
                <Col className="github">
                  <a target="_blank" href="https://github.com/ebro1230">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Col>
                <Col className="linkedIn">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ebro1230/"
                  >
                    <span className="fa-layers fa-fw">
                      <FontAwesomeIcon icon={faSquare} color="white" />
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                  </a>{" "}
                </Col>
                <Col className="email">
                  <a target="_blank" href="mailto:ebro1230@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>{" "}
                </Col>
              </Row>
            </Figure.Caption>
          </Figure> */
}

{
  /* <Card className="techskill">
            <Card.Img variant="top" src="/html-5.svg" />
            <Card.Body>
              <Card.Title>HTML / CSS / UX UI</Card.Title>
              <Card.Text>
                The standard markup language for documents designed to be
                displayed in a web browser and is used for structuring and
                presenting content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="techskill">
            <Card.Img variant="top" src="/javascript.svg" />
            <Card.Body>
              <Card.Title>Javascript</Card.Title>
              <Card.Text>
                An object oriented programming language designed to make web
                development easier and more attractive.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="techskill">
            <Card.Img variant="top" src="/react.svg" />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
                A free and open-source front-end JavaScript library for building
                user interfaces based on components. React can be used to
                develop single-page, mobile, or server-rendered applications
                with frameworks like Next.js.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="techskill">
            <Card.Img variant="top" src="/nodejs.svg" />
            <Card.Body>
              <Card.Title>Node.js</Card.Title>
              <Card.Text>
                A cross-platform, open-source server that acts as a back-end
                JavaScript runtime environment.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="techskill">
            <Card.Img variant="top" src="/mongodb.svg" />
            <Card.Body>
              <Card.Title>(NO)SQL DB</Card.Title>
              <Card.Text>
                A type of database that stores and retrieves data without
                needing to define its structure first.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="techskill">
            <Card.Img variant="top" src="/git.svg" />
            <Card.Body>
              <Card.Title>Git</Card.Title>
              <Card.Text>
                A distributed version control system that tracks changes in any
                set of computer files, usually used for coordinating work among
                programmers collaboratively developing source code during
                software development.
              </Card.Text>
            </Card.Body>
          </Card> */
}

{
  /* <Accordion className="project">
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <Row className="project-header">
                  <Col>
                    <Figure>
                      <Figure.Image
                        width={400}
                        height={450}
                        alt="League Legacy"
                        src="/LeagueLegacy.png"
                      />
                    </Figure>
                  </Col>
                  <Col className="project-title">League Legacy</Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    Your Yahoo Fantasy Sports History all in one place. Login
                    using your Yahoo account and review your entire fantasy
                    sports history for Fantasy Football, Fantasy Hockey,
                    Fanstasy Basketball, & Fantasy Baseball. League Legacy will
                    pull your entire history, from the first year you entered
                    the league until present and provide you with all the stats
                    you need to trash talk your friends and prove that you are
                    unequivocally the best at Fantasy sports.
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="code-buttons">
                    <a
                      href="https://league-legacy-edb.vercel.app"
                      target="_blank"
                    >
                      <Button>View Site</Button>
                    </a>
                    <a
                      href="https://github.com/ebro1230/LeagueLegacy"
                      target="_blank"
                    >
                      <Button>View Code</Button>
                    </a>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="project">
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <Row className="project-header">
                  <Col>
                    <Figure>
                      <Figure.Image
                        width={400}
                        height={450}
                        alt="Exchange Rate"
                        src="/ExchangeRate.png"
                      />
                    </Figure>
                  </Col>
                  <Col className="project-title">Exchange Rate</Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    An easy tool to help you find the current exchange rates
                    between 25 different currencies. Track the rates you want
                    and receive email notifications when the exchange rate is
                    higher than a certain threshold amount. You will also be
                    notified when the exchange rate is rapidly climbing or
                    falling so you can time your money exchange perfectly
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="code-buttons">
                    <a
                      href="https://exchange-rate-edb.vercel.app"
                      target="_blank"
                    >
                      <Button>View Site</Button>
                    </a>
                    <a
                      href="https://github.com/ebro1230/ExchangeRate"
                      target="_blank"
                    >
                      <Button>View Code</Button>
                    </a>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="project">
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <Row className="project-header">
                  <Col>
                    <Figure>
                      <Figure.Image
                        width={400}
                        height={450}
                        alt="Fitness Tracker"
                        src="/FitnessTracker.png"
                      />
                    </Figure>
                  </Col>
                  <Col className="project-title">Fitness Tracker</Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    A one stop shop to track everything fitness. Input meals by
                    searching for food from the USDA nutrition tracker or by
                    creating your own food items. Track your weight, plan your
                    fitness goals, and get calorie recommendations based on what
                    you are trying to achieve.
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="code-buttons">
                    <a
                      href="https://fitness-tracker-edb.vercel.app"
                      target="_blank"
                    >
                      <Button>View Site</Button>
                    </a>
                    <a
                      href="https://github.com/ebro1230/FitnessTracker"
                      target="_blank"
                    >
                      <Button>View Code</Button>
                    </a>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="project">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Row className="project-header">
                  <Col>
                    <Figure>
                      <Figure.Image
                        width={400}
                        height={450}
                        alt="GigGuide"
                        src="/GigGuide.png"
                      />
                    </Figure>
                  </Col>
                  <Col className="project-title">GigGuide</Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    Any live music fans out there? Look no further than
                    GigGuide. This website allows you to find live shows
                    anywhere in the world from mainstream artists to local
                    unknown bands. Based on your current location, you will be
                    provided with a list of upcoming shows that you may be
                    interested in. After signing up, as a fan you can favorite
                    your artists and save upcoming shows or as an artist, you
                    can post all of your upcoming shows so people can find where
                    and when you are performing. As an artist, you can also post
                    songs you've released with links to where fans can listen.
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="code-buttons">
                    <a href="https://gigguide.onrender.com" target="_blank">
                      <Button>View Site</Button>
                    </a>
                    <a
                      href="https://github.com/ebro1230/GigGuide-FrontEnd"
                      target="_blank"
                    >
                      <Button>View Code</Button>
                    </a>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="project">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Row className="project-header">
                  <Col>
                    <Figure>
                      <Figure.Image
                        width={400}
                        height={450}
                        alt="To Do List"
                        src="/ToDoList.jpg"
                      />
                    </Figure>
                  </Col>
                  <Col className="project-title">To Do List</Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    Always forget what you need when you're at the grocery
                    store? Have a ton of things to do, but can't keep them
                    straight in your head? This website is for you. This
                    provides an easy to use, intuitive website for creating To
                    Do Lists that you can edit, delete, or check off after
                    completion.
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="code-buttons">
                    <a
                      href="https://ebro1230.github.io/ToDoList2/"
                      target="_blank"
                    >
                      <Button>View Site</Button>
                    </a>
                    <a
                      href="https://github.com/ebro1230/ToDoList2/tree/EdBranchJustEd"
                      target="_blank"
                    >
                      <Button>View Code</Button>
                    </a>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="project">
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <Row className="project-header">
                  <Col>
                    <Figure>
                      <Figure.Image
                        width={400}
                        height={450}
                        alt="Cook Book w/Contentful CMS"
                        src="/Cookbook.jpg"
                      />
                    </Figure>
                  </Col>
                  <Col className="project-title">Cook Book</Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    For those people that like to stay in, but never know what
                    to cook, this cookbook provides easy to follow recipes for
                    culinary dishes from around the world. For those of you that
                    can't stand modern day food blogs, as an added bonus, this
                    website doesn't give you a 20 page intro or backstory, just
                    straight to the point with the ingredients and recipes.
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="code-buttons">
                    <a
                      href="https://ebro1230.github.io/Contentful_to_NodeJS_Cookbook/"
                      target="_blank"
                    >
                      <Button>View Site</Button>
                    </a>
                    <a
                      href="https://github.com/ebro1230/Contentful_to_NodeJS_Cookbook"
                      target="_blank"
                    >
                      <Button>View Code</Button>
                    </a>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="project">
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <Row className="project-header">
                  <Col>
                    <Figure>
                      <Figure.Image
                        width={400}
                        height={450}
                        alt="Best Restaurants in Cologne"
                        src="/BRiC.jpg"
                      />
                    </Figure>
                  </Col>
                  <Col className="project-title">
                    Best Restaurants in Cologne
                  </Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <p>
                      For any foodies that want to visit Cologne, this website
                      should be your first stop. It provides you with the top 10
                      best restaurants in Cologne and all of the information you
                      need to decide which one you want to visit. These
                      restaurants are sure to satisfy any culinary buff's food
                      cravings.
                    </p>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="code-buttons">
                    <a
                      href="https://bestrestaurantscologne.onrender.com"
                      target="_blank"
                    >
                      <Button>View Site</Button>
                    </a>
                    <a
                      href="https://github.com/ebro1230/Bootcamp_Crossover_2"
                      target="_blank"
                    >
                      <Button>View Code</Button>
                    </a>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */
}
