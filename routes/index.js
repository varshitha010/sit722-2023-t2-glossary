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
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{data:glossaryInformation});
});

module.exports = router;
