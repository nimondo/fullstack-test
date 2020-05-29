import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Countries} from "./entity/Countries";
import {Services} from "./entity/Services";
import {Projects} from "./entity/Projects";
import {Md5} from "md5-typescript";

// create typeorm connection
createConnection().then(connection => {
    const userRepository = connection.getRepository(User);
    const countriesRepository = connection.getRepository(Countries);
    const servicesRepository = connection.getRepository(Services);
    const projectsRepository = connection.getRepository(Projects);

    // create and setup express app
    const app = express();
    app.use(bodyParser.json());

    // register routes

// register routes
app.get("/", function (req, res) {
    res.send("Hello Kisso!");
});
app.get("/users", async function(req: Request, res: Response) {
    const users = await userRepository.createQueryBuilder("user")
    .select(["user.email", "user.fullname"])
    .getRawMany();
    res.json(users);
});

app.get("/users/:id", async function(req: Request, res: Response) {
    const results = await userRepository.findOne(req.params.id);
    return res.send(results);
});

app.post("/users", async function(req: Request, res: Response) {
    console.log(req.body)
    const user = await userRepository.create(req.body);
    try {
    const results = await userRepository.save(user);
    return res.send(results);
    } catch (error) {
        return res.send(error);
    }
    
});
app.post('/users-mail', async function(req: Request, res: Response) {
    const user = await userRepository.createQueryBuilder("user")
    .select(["user.email", "user.fullname"])
    .where("user.email = :email")
    .andWhere("user.password = :password")
    .setParameters({ email: req.body.email, password: Md5.init(req.body.password) })
    .getRawMany();
    return res.send(user);
});
app.put("/users/:id", async function(req: Request, res: Response) {
    const user = await userRepository.findOne(req.params.id);
    userRepository.merge(user, req.body);
    const results = await userRepository.save(user);
    return res.send(results);
});

app.delete("/users/:id", async function(req: Request, res: Response) {
    const results = await userRepository.delete(req.params.id);
    return res.send(results);
});
//countries
app.get("/countries", async function(req: Request, res: Response) {
    const countries = await countriesRepository.find();
    res.json(countries);
});

app.get("/countries/:id", async function(req: Request, res: Response) {
    const results = await countriesRepository.findOne(req.params.id);
    return res.send(results);
});

app.post("/countries", async function(req: Request, res: Response) {
    console.log(req.body)
    const country = await countriesRepository.create(req.body);
    const results = await countriesRepository.save(country);
    return res.send(results);
});
app.put("/countries/:id", async function(req: Request, res: Response) {
    const country = await countriesRepository.findOne(req.params.id);
    countriesRepository.merge(country, req.body);
    const results = await countriesRepository.save(country);
    return res.send(results);
});

app.delete("/countries/:id", async function(req: Request, res: Response) {
    const results = await countriesRepository.delete(req.params.id);
    return res.send(results);
});

//Services
app.get("/services", async function(req: Request, res: Response) {
    const services = await servicesRepository.find();
    res.json(services);
});

app.get("/services/:id", async function(req: Request, res: Response) {
    const results = await servicesRepository.findOne(req.params.id);
    return res.send(results);
});

app.post("/services", async function(req: Request, res: Response) {
    console.log(req.body)
    const service = await servicesRepository.create(req.body);
    const results = await servicesRepository.save(service);
    return res.send(results);
});
app.put("/services/:id", async function(req: Request, res: Response) {
    const service = await servicesRepository.findOne(req.params.id);
    servicesRepository.merge(service, req.body);
    const results = await servicesRepository.save(service);
    return res.send(results);
});

app.delete("/services/:id", async function(req: Request, res: Response) {
    const results = await servicesRepository.delete(req.params.id);
    return res.send(results);
});
//Projects
app.get("/projects", async function(req: Request, res: Response) {
    const projects = await projectsRepository.find();
    res.json(projects);
});

app.get("/projects/:id", async function(req: Request, res: Response) {
    const results = await projectsRepository.findOne(req.params.id);
    return res.send(results);
});

app.post("/projects", async function(req: Request, res: Response) {
    console.log(req.body)
    const project = await projectsRepository.create(req.body);
    const results = await projectsRepository.save(project);
    return res.send(results);
});
app.put("/projects/:id", async function(req: Request, res: Response) {
    const project = await projectsRepository.findOne(req.params.id);
    projectsRepository.merge(project, req.body);
    const results = await servicesRepository.save(project);
    return res.send(results);
});

app.delete("/projects/:id", async function(req: Request, res: Response) {
    const results = await projectsRepository.delete(req.params.id);
    return res.send(results);
});

// start express server
app.listen(3002);

});