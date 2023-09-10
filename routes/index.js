var express = require('express');
var router = express.Router();
const glossaryInformation = [
  {
    id:1,
    description:"DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and deliver features, fixes, and updates frequently and reliably.",
    term:"DevOps",
    references:"Wikipedia Contributors, “DevOps,” Wikipedia, Dec. 01, 2019. https://en.wikipedia.org/wiki/DevOps"
  },
  {
    id:2,
    description:"Continuous Integration is the practice of frequently merging code changes into a shared repository. It allows teams to detect and address integration issues early in the development process.",
    term:"ContinuousIntegration",
    references:"Atlassian, “What is Continuous Integration | Atlassian,” Atlassian, 2019. https://www.atlassian.com/continuous-delivery/continuous-integration"
  },
  {
    id:3,
    description:"Continuous Deployment is the practice of automatically deploying code changes to production after passing through the CI process. It aims to deliver new features and bug fixes rapidly and safely.",
    term:"ContinuousDeployment",
    references:"Redhat, “What is CI/CD?,” Redhat.com, 2019. https://www.redhat.com/en/topics/devops/what-is-ci-cd"
  },
  {
    id:4,
    description:"Infrastructure as Code is an approach to manage and provision IT infrastructure through code, using version-controlled templates and automation tools to ensure consistency and reproducibility.",
    term:"InfrastructureasCode",
    references:"HashiCorp, “What is infrastructure as code and why is it important?,” HashiCorp. https://www.hashicorp.com/resources/what-is-infrastructure-as-code"
  },
  {
    id:5,
    description:"Microservices is an architectural style where a complex application is broken down into small, independent, and loosely coupled services, each serving a specific business capability.",
    term:"Microservices",
    references:"C. Richardson, “Microservices.io,” microservices.io, 2017. https://microservices.io/"
  },
  {
    id:6,
    description:"Kubernetes is an open-source container orchestration platform used for automating the deployment, scaling, and management of containerized applications.",
    term:"Kubernetes",
    references:"“Overview,” Kubernetes. https://kubernetes.io/docs/concepts/overview/"
  },
  {
    id:7,
    description:"Docker is a platform that enables developers to package applications and their dependencies into containers, providing a consistent environment for development and deployment.",
    term:"Docker",
    references:"Docker, “What is a Container?,” Docker. https://www.docker.com/resources/what-container/"
  },
  {
    id:8,
    description:"Version Control is a system that records changes to files over time, enabling multiple developers to collaborate on a project, track modifications, and roll back to previous states if needed. It ensures code integrity and facilitates team collaboration.",
    term:"VersionControl",
    references:"Atlassian, “What is version control,” Atlassian, 2019. https://www.atlassian.com/git/tutorials/what-is-version-control"
  },
  {
    id:9,
    description:"Agile is a project management and software development approach that prioritizes customer collaboration, iterative development, and responding to change. It emphasizes delivering functional software in smaller increments, increasing adaptability and customer satisfaction.",
    term:"Agile",
    references:"Atlassian, “Agile best practices and tutorials | Atlassian,” Atlassian, 2019. https://www.atlassian.com/agile"
  },
  {
    id:10,
    description:"Test-Driven Development is a software development technique where tests are written before the code is implemented. The development process revolves around writing code to pass the tests, ensuring better test coverage and more robust software.",
    term:"Test-DrivenDevelopment",
    references:"“What is Test Driven Development (TDD)?,” Agile Alliance, Feb. 15, 2018. https://www.agilealliance.org/glossary/tdd/"
  },
  {
    id:11,
    description:"When using the Canary distribution distribution technique, a new version of the programme is first made available to a select group of users or servers before being made available to all users. By doing this, any possible problems or flaws may be found and fixed in a safe setting before reaching a larger audience. Monitoring and A/B testing are frequently combined with canary deployments to guarantee the performance and stability of the new version.",
    term:"Canary Deployment",
    references:"T. Fernandez, “What Is Canary Deployment?,” Semaphore, Sep. 01, 2020. https://semaphoreci.com/blog/what-is-canary-deployment"
  },
  {
    id:12,
    description:"Blue-Green Two identical production environments, maintained as part of the deployment release plan. One environment is always active while the other is inactive. The traffic is moved from the active environment, let's say blue, to the idle environment, let's say green, while delivering a new version of the programme. In the event that problems develop during deployment, this method minimises the risk of downtime and allows for a speedy rollback to the prior version. ",
    term:"Blue-Green Deployment",
    references:"“What is Blue Green Deployment?,” Spiceworks. https://www.spiceworks.com/tech/devops/articles/what-is-blue-green-deployment/#:~:text=Blue-green%20deployment%20is%20a%20technique%20for%20rolling%20out (accessed Aug. 06, 2023)."
  },
  {
    id:13,
    description:"Chaos Engineering is the practice of intentionally introducing controlled failures and disruptions into a system to test its resilience and identify potential weaknesses. By simulating real-world scenarios, teams can proactively address vulnerabilities and enhance the system's reliability.",
    term:"Chaos Engineering",
    references:"“Chaos engineering,” Wikipedia, Jul. 18, 2020. https://en.wikipedia.org/wiki/Chaos_engineering"
  },
  {
    id:14,
    description:"Shift-Left Testing is a testing approach in which testing activities are performed earlier in the software development lifecycle, ideally starting from the requirements and design phases. By identifying and fixing defects early on, Shift-Left Testing helps in reducing the cost and time required for bug fixing and increases the overall quality of the software.",
    term:"Shift-Left Testing",
    references:"K. Magowan, “Shift Left Testing: What, Why & How To Shift Left,” BMC Blogs, Nov. 30, 2020. https://www.bmc.com/blogs/what-is-shift-left-shift-left-testing-explained/"
  },
  {
    id:15,
    description:"A Service Mesh is a dedicated infrastructure layer that manages service-to-service communication in a microservices architecture. It provides essential features like load balancing, service discovery, security, and observability, allowing developers to focus on application logic without implementing these features in the application code.",
    term:"Service Mesh",
    references:"“What's a service mesh?,” www.redhat.com. https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh"
  },
  {
    id:16,
    description:"Log Aggregation is the process of collecting, organizing, and centralizing log data generated by various applications and systems within an infrastructure. It involves the use of tools like Elasticsearch, Logstash, and Kibana (ELK stack) to collect and analyze logs from different sources.",
    term:"Log Aggregation",
    references:"Datadog, “Log Aggregation: What It Is & How It Works | Datadog,” Log Aggregation: What It Is & How It Works, Aug. 03, 2021. https://www.datadoghq.com/knowledge-center/log-aggregation/"
  },
  {
    id:17,
    description:"Observability is the measure of how well a system's internal states and processes can be observed and understood from its external outputs, such as logs, metrics, and traces.",
    term:"Observability",
    references:"“What is Observability?,” www.redhat.com. https://www.redhat.com/en/topics/devops/what-is-observability (accessed Aug. 06, 2023)."
  },
  {
    id:18,
    description:"GitOps is a methodology that emphasizes using version control systems like Git to manage and automate the deployment and configuration of infrastructure and applications.",
    term:"GitOps",
    references:"Atlassian, “Is GitOps the next big thing in DevOps? | Atlassian Git Tutorial,” Atlassian. https://www.atlassian.com/git/tutorials/gitops"
  },
  {
    id:19,
    description:"Infrastructure Orchestration involves the automated coordination and management of various infrastructure resources and services to deploy and maintain applications. It leverages tools like Kubernetes, Docker Swarm, or Apache Mesos to dynamically allocate resources, scale applications, and handle failures efficiently.",
    term:"Infrastructure Orchestration",
    references:"“Orchestration (computing),” Wikipedia, Apr. 22, 2023. https://en.wikipedia.org/wiki/Orchestration_(computing)"
  },
  {
    id:20,
    description:"Trunk-Based Development is a software development approach in which all developers work on a shared branch, typically the main branch (trunk) of the version control system. Instead of long-lived feature branches, changes are integrated frequently into the trunk, promoting collaboration and reducing integration issues.",
    term:"Trunk-Based Development",
    references:"Atlassian, “Trunk-based Development,” Atlassian. https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development"
  },
  {
    id:21,
    description:"Docker Image is an executable package of software that includes everything needed to run an application. This image informs how a container should instantiate, determining which software components will run and how.",
    term:"dockerimage",
    references:"“What is Docker Images?,” GeeksforGeeks, Oct. 10, 2021. https://www.geeksforgeeks.org/what-is-docker-images/"
  },
  {
    id:22,
    description:"A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.",
    term:"dockercontainer",
    references:"Docker, “What is a Container?,” Docker, 2023. https://www.docker.com/resources/what-container/"
  },
  {
    id:23,
    description:"Dockerfile consists of specific commands that guide you on how to build a specific Docker image.The specific commands you can use in a dockerfile are: FROM, PULL, RUN, and CMD",
    term:"dockerfile",
    references:"“What is a Dockerfile: A Step-by-Step Guide [2022 Updated],” Simplilearn.com. https://www.simplilearn.com/tutorials/docker-tutorial/what-is-dockerfile"
  },
  {
    id:24,
    description:"The Alpine DOI is a building block for Alpine Linux Docker containers. It’s an executable software package that tells Docker and your application how to behave. The image includes source code, libraries, tools, and other core dependencies that your application needs.",
    term:"alpine",
    references:"“How to Use the Alpine Docker Official Image | Docker,” www.docker.com, Sep. 08, 2022. https://www.docker.com/blog/how-to-use-the-alpine-docker-official-image/ (accessed Sep. 03, 2023)."
  },
  {
    id:25,
    description:"This page contains the download URL, information about system requirements, and instructions on how to install Docker Desktop for Windows.",
    term:"docker for windows",
    references:"“Install on Windows,” Docker Documentation, Jan. 12, 2023. https://docs.docker.com/desktop/install/windows-install/"
  },
  {
    id:26,
    description:"A Dockerfile and a context are used by the docker build command to create Docker images. The collection of files in the given path or url make up the context of a build.",
    term:"dockerbuild",
    references:"“docker build,” Docker Documentation, Nov. 15, 2019. https://docs.docker.com/engine/reference/commandline/build/"
  },
  {
    id:27,
    description:"The default docker images will show all top level images, their repository and tags, and their size.",
    term:"dockerimage",
    references:"“docker images,” Docker Documentation, May 08, 2019. https://docs.docker.com/engine/reference/commandline/images/"
  },
  {
    id:28,
    description:"Use docker image push to share your images to the Docker Hubopen_in_new registry or to a self-hosted one.",
    term:"dockerpush",
    references:"“docker push,” Docker Documentation, Aug. 16, 2023. https://docs.docker.com/engine/reference/commandline/push/"
  },
  {
    id:29,
    description:"These are list of available docker commands in this website",
    term:"docker commands",
    references:"“Use the Docker command line,” Docker Documentation, Nov. 15, 2019. https://docs.docker.com/engine/reference/commandline/cli/"
  },
  {
    id:30,
    description:"The Registry is a stateless, highly scalable server side application that stores and lets you distribute Docker images. ",
    term:"container registry",
    references:"“Docker Registry,” Docker Documentation, Apr. 23, 2021. https://docs.docker.com/registry/"
  },
   {
    id:31,
    description:"Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services. Then, with a single command, you create and start all the services from your configuration.",
    term:"Docker compose",
    references:"Docker, “Overview of Docker Compose,” Docker Documentation, Feb. 10, 2020. https://docs.docker.com/compose/"
  },
  {
    id:32,
    description:"The Hypertext Transfer Protocol (HTTP) is an application layer protocol in the Internet protocol suite model for distributed, collaborative, hypermedia information systems",
    term:"HTTP",
    references:"Wikipedia Contributors, “Hypertext Transfer Protocol,” Wikipedia, Sep. 20, 2019. https://en.wikipedia.org/wiki/Http"
  },
  {
    id:33,
    description:"RabbitMQ is lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols and streaming. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.",
    term:"RabbitMQ",
    references:"“Messaging that just works — RabbitMQ,” Rabbitmq.com, 2019. https://www.rabbitmq.com/"
  },
  {
    id:34,
    description:"AMQP often seems to be designed to confound client developers; it is not very cleanly layered and there are consequences to molding it this way or that in search of a usable API. In amqplib I have tried to implement only the necessary machinery of AMQP, in layers as best I can, without prejudice to any particular client API.",
    term:"Amqplib",
    references:"“amqplib | AMQP 0-9-1 library and client for Node.JS,” amqp-node.github.io. https://amqp-node.github.io/amqplib/ (accessed Sep. 10, 2023)."
  },
  {
    id:35,
    description:"The nodemon Module is a module that develop node.js based applications by automatically restarting the node application when file changes in the directory are detected",
    term:"Nodemon",
    references:"“Node.js nodemon Module,” GeeksforGeeks, Oct. 14, 2020. https://www.geeksforgeeks.org/node-js-nodemon-module/ (accessed Sep. 10, 2023)."
  },
  {
    id:36,
    description:"Volumes are the preferred mechanism for persisting data generated by and used by Docker containers. While bind mounts are dependent on the directory structure and OS of the host machine, volumes are completely managed by Docker",
    term:"dockervolumes",
    references:"“Use volumes,” Docker Documentation, Jan. 04, 2019. https://docs.docker.com/storage/volumes/"
  },
  {
    id:37,
    description:"HTTP messages are how data is exchanged between a server and a client. There are two types of messages: requests sent by the client to trigger an action on the server, and responses, the answer from the server.",
    term:"Direct messaging with HTTP",
    references:"“HTTP Messages - HTTP | MDN,” developer.mozilla.org. https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages"
  },
  {
    id:38,
    description:"Single-recipient messages are one-to-one : a message is sent from one microservice and received by only a single other. This is a great way of making sure that a particular job is done only once within your application.",
    term:"Single recipient indirect messaging",
    references:"“Chapter 132: 5.8.6 Single-recipient indirect messaging - Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide,” zoboko.com. https://zoboko.com/text/y53r6lpp/bootstrapping-microservices-with-docker-kubernetes-and-terraform-a-project-based-guide/132 (accessed Sep. 10, 2023)."
  },
  {
    id:39,
    description:"Message queues are one of the critical components in any software architecture which helps different components talk to each other asynchronously",
    term:"Multiple recipient messages",
    references:"“Everything You Need To Know About Message Queues: A Complete Guide,” DEV Community, Nov. 16, 2020. https://dev.to/sunilc_/everything-you-need-to-know-about-message-queues-a-complete-guide-1220 (accessed Sep. 10, 2023)."
  },
  {
    id:40,
    description:"Datasets and related classes are legacy .NET technologies from the early 2000s that enable applications to work with data in memory while the applications are disconnected from the database.",
    term:"db",
    references:"ghogen, “Create a database and add tables - Visual Studio (Windows),” learn.microsoft.com. https://learn.microsoft.com/en-us/visualstudio/data-tools/create-a-sql-database-by-using-a-designer?view=vs-2022"
  },
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{data:glossaryInformation});
});

module.exports = router;
