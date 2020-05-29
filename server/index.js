"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var Countries_1 = require("./entity/Countries");
var Services_1 = require("./entity/Services");
var Projects_1 = require("./entity/Projects");
var md5_typescript_1 = require("md5-typescript");
// create typeorm connection
typeorm_1.createConnection().then(function (connection) {
    var userRepository = connection.getRepository(User_1.User);
    var countriesRepository = connection.getRepository(Countries_1.Countries);
    var servicesRepository = connection.getRepository(Services_1.Services);
    var projectsRepository = connection.getRepository(Projects_1.Projects);
    // create and setup express app
    var app = express();
    app.use(bodyParser.json());
    // register routes
    // register routes
    app.get("/", function (req, res) {
        res.send("Hello Kisso!");
    });
    app.get("/users", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userRepository.createQueryBuilder("user")
                            .select(["user.email", "user.fullname"])
                            .getRawMany()];
                    case 1:
                        users = _a.sent();
                        res.json(users);
                        return [2 /*return*/];
                }
            });
        });
    });
    app.get("/users/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userRepository.findOne(req.params.id)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.post("/users", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, results, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, userRepository.create(req.body)];
                    case 1:
                        user = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, userRepository.save(user)];
                    case 3:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                    case 4:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.send(error_1)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    });
    app.post('/users-mail', function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userRepository.createQueryBuilder("user")
                            .select(["user.email", "user.fullname"])
                            .where("user.email = :email")
                            .andWhere("user.password = :password")
                            .setParameters({ email: req.body.email, password: md5_typescript_1.Md5.init(req.body.password) })
                            .getRawMany()];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, res.send(user)];
                }
            });
        });
    });
    app.put("/users/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userRepository.findOne(req.params.id)];
                    case 1:
                        user = _a.sent();
                        userRepository.merge(user, req.body);
                        return [4 /*yield*/, userRepository.save(user)];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.delete("/users/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userRepository.delete(req.params.id)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    //countries
    app.get("/countries", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var countries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, countriesRepository.find()];
                    case 1:
                        countries = _a.sent();
                        res.json(countries);
                        return [2 /*return*/];
                }
            });
        });
    });
    app.get("/countries/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, countriesRepository.findOne(req.params.id)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.post("/countries", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var country, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, countriesRepository.create(req.body)];
                    case 1:
                        country = _a.sent();
                        return [4 /*yield*/, countriesRepository.save(country)];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.put("/countries/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var country, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, countriesRepository.findOne(req.params.id)];
                    case 1:
                        country = _a.sent();
                        countriesRepository.merge(country, req.body);
                        return [4 /*yield*/, countriesRepository.save(country)];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.delete("/countries/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, countriesRepository.delete(req.params.id)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    //Services
    app.get("/services", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var services;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, servicesRepository.find()];
                    case 1:
                        services = _a.sent();
                        res.json(services);
                        return [2 /*return*/];
                }
            });
        });
    });
    app.get("/services/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, servicesRepository.findOne(req.params.id)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.post("/services", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var service, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, servicesRepository.create(req.body)];
                    case 1:
                        service = _a.sent();
                        return [4 /*yield*/, servicesRepository.save(service)];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.put("/services/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var service, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, servicesRepository.findOne(req.params.id)];
                    case 1:
                        service = _a.sent();
                        servicesRepository.merge(service, req.body);
                        return [4 /*yield*/, servicesRepository.save(service)];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.delete("/services/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, servicesRepository.delete(req.params.id)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    //Projects
    app.get("/projects", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var projects;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, projectsRepository.find()];
                    case 1:
                        projects = _a.sent();
                        res.json(projects);
                        return [2 /*return*/];
                }
            });
        });
    });
    app.get("/projects/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, projectsRepository.findOne(req.params.id)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.post("/projects", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var project, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, projectsRepository.create(req.body)];
                    case 1:
                        project = _a.sent();
                        return [4 /*yield*/, projectsRepository.save(project)];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.put("/projects/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var project, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, projectsRepository.findOne(req.params.id)];
                    case 1:
                        project = _a.sent();
                        projectsRepository.merge(project, req.body);
                        return [4 /*yield*/, servicesRepository.save(project)];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    app.delete("/projects/:id", function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, projectsRepository.delete(req.params.id)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, res.send(results)];
                }
            });
        });
    });
    // start express server
    app.listen(3002);
});
