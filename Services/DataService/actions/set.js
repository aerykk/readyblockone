module.exports = function(app) {


    //http://dev.billysbilling.com/blog/How-to-make-your-API-better-than-the-REST

    //return bookshelf.Knex.Schema.createTable("Sessions", function(table) {
    //    table.increments("id");
    //    table.dateTime("loggedInAt");
    //    table.dateTime("lastRequestAt");
    //    table.integer('userId')
    //        .unsigned()
    //        .references('id')
    //        .inTable('Users')
    //        .onDelete('CASCADE')  // optional
    //        .onUpdate(...) // optional
    //});

    //new User({username: ''}).save().then(function(model) {
    //
    //});
    //
    //new User({id: 1}).fetch().then(function(model) {
    //    console.log(model.get('gender'));
    //});

    // https://github.com/tgriesser/bookshelf/issues/69

    // Use the LocalStrategy within Passport to register/"signup" users.
    passport.use('signup', new LocalStrategy({
            passReqToCallback: true //allows us to pass back the request to the callback
        }, function (req, username, password, done) {
            var queryData = url.parse(req.url, true).query;

            new User({email: username})
                .fetch()
                .then(function(model) {
                    if (model) {
                        req.session.error = 'That username is already in use, please try a different one.'; //inform user could not log them in
                        done(req.session.error);
                        return;
                    }

                    var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

                    new User({
                        email: username,
                        password: hash
                    })
                        .save()
                        .then(function(model) {
                            new User({email: username})
                                .fetch()
                                .then(function(model) {
                                    if (!model) {
                                        req.session.error = "Could not find that user";
                                        done(req.session.error);
                                        return;
                                    }

                                    var user = model.toJSON();

                                    if (bcrypt.compareSync(password, user.password)) {
                                        req.session.success = 'You are successfully registered and logged in ' + username + '!';

                                        done(null, {
                                            id: user.id,
                                            username: user.email
                                        });
                                    }
                                    else {
                                        req.session.error = "Incorrect password";
                                        done(req.session.error);
                                    }
                                })
                                .catch(function(error) {
                                    req.session.error = "There was an error finding that user";
                                    done(req.session.error);
                                });
                        })
                        .catch(function(err) {
                            req.session.error = 'There was an error registering that username.'; //inform user could not log them in
                            done(req.session.error);
                        });
                })
                .catch(function(error) {
                    // TODO: AdminDebug.error(error);
                    req.session.error = 'There was an error registering that username.'; //inform user could not log them in
                    done(req.session.error);
                });
        }
    ));

    // Local strategy is only called if the request has a username and password param
    passport.use('signin', new LocalStrategy({
            passReqToCallback: true // allows us to pass back the request to the callback
        }, function (req, username, password, done) {
            //check if user exists
            //if user exists check if passwords match (use bcrypt.compareSync(password, hash); // true where 'hash' is password in DB)
            //if password matches take into website
            //if user doesn't exist or password doesn't match tell them it failed
            var queryData = url.parse(req.url, true).query;

            var columns = ['id', 'username', 'password', 'email', 'fullName', 'location', 'email', 'bio', 'useSpeaker', 'useMicrophone', 'createdAt', 'updatedAt'];
            var withRelated = [{
                'achievements': function(knex) {},
                'followers': function(knex) {}
            }];

            new User({email: username})
                .fetch({
                    columns: columns,
                    withRelated: withRelated
                })
                .then(function(model) {
                    if (!model) {
                        req.session.error = "Could not find that user";
                        done(req.session.error);
                        return;
                    }

                    var user = model.toJSON();

                    if (bcrypt.compareSync(password, user.password)) {
                        req.session.success = 'You are successfully logged in ' + username + '!';

                        done(null, {
                            id: user.id,
                            username: user.email
                        });
                    }
                    else {
                        req.session.error = "Passwords do not match";
                        done(req.session.error);
                    }
                })
                .catch(function(error) {
                    console.log('kk', error); // TODO
                    req.session.error = "There was an error finding that user";
                    done(req.session.error);
                });
        }
    ));

    passport.serializeUser(function (user, done) {
        console.log('zz', user);
        console.log("serializing " + user);
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        console.log('zz', user);
        console.log("deserializing " + user);
        done(null, user);
    });


    /*
     Memboss API 1.0

     Overview
     Follows the RESTful philosophy. CRUD operations.
     C = Create (POST). R = Read (GET). U = Update (PUT). D = Delete (DELETE).
     ----------------
     R /v1/go
     R /v1/topSites
     R /v1/topUsers
     R /v1/verifyClaim


     GET /v1/go
     ----------------

     GET /v1/topSites
     ----------------

     GET /v1/topUsers
     ----------------

     GET /v1/verifyClaim
     ----------------

     */

    function lengthInUtf8Bytes(str) {
        // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
        var m = encodeURIComponent(str).match(/%[89ABab]/g);
        return str.length + (m ? m.length : 0);
    }

    function cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    function sendResponse(res, callback, code, message, data) {
        var data = {code: code, message: message, data: data};
        var content;

        if (callback) {
            content = callback + '(' + JSON.stringify(data) + ')';

            res.writeHead(200, {
                'Content-Length': lengthInUtf8Bytes(content),
                'Content-Type': "application/javascript"
            });
        }
        else {
            content = JSON.stringify(data);

            res.writeHead(200, {
                'Content-Length': lengthInUtf8Bytes(content),
                'Content-Type': "application/json"
            });
        }

        res.write(content);
        res.end();
    }

    var getModel = function(modelClass, columns, withRelated, queryData, req, res, next) {
        var isAdmin = true;

        var data = cloneObject(queryData); // Clone so we don't screw up any logic in the callee
        delete data['callback'];
        delete data['_'];

        new modelClass(data)
            .fetch({
                columns: isAdmin ? null : columns,
                withRelated: withRelated // http://stackoverflow.com/questions/22568153/order-bookshelf-js-fetch-by-related-column-value
            })
            .then(function(model) {
                if (!model) {
                    sendResponse(res, queryData.callback, ERROR_CODE, "Error: No results found");
                    return;
                }

                sendResponse(res, queryData.callback, SUCCESS_CODE, "Success", model.toJSON());
            })
            .catch(function(error) {
                sendResponse(res, queryData.callback, ERROR_CODE, "Error: " + error);
            });
    };

    var getModels = function(modelClass, tableName, columns, withRelated, queryData, req, res, next) {
        var isAdmin = true;
        var limit = queryData.limit ? queryData.limit : 10;
        var page = queryData.page ? queryData.page : 1;
        var skip = page ? (page - 1) * limit : 0;

        var data = cloneObject(queryData); // Clone so we don't screw up any logic in the callee
        delete data['callback'];
        delete data['_'];
        delete data['limit'];
        delete data['page'];

        new modelClass()
            .query(function (knex) {
                knex.where(data);
                knex.limit(limit).offset(skip);
            })
            .fetchAll({
                columns: isAdmin ? null : columns,
                withRelated: withRelated
            })
            .then(function(models) {
                bookshelf.knex(tableName).count('id as count').where(data).then(function(total) {
                    sendResponse(res, queryData.callback, SUCCESS_CODE, "Success", {
                        'total': total[0].count,
                        'page': page,
                        'count': limit,
                        'items': models.toJSON()
                    });
                });
            })
            .catch(function(error) {
                sendResponse(res, queryData.callback, ERROR_CODE, "Error: " + error);
            });
    };

    var createModel = function(modelClass, data, queryData, req, res, next) {
        var isAdmin = true;
        //if (!req.isAuthenticated()) {
        //    console.log("Authenticated request failed");
        //    sendResponse(res, queryData.callback, ERROR_CODE, "Error");
        //    return;
        //}

        new modelClass(data)
            .save()
            .then(function(model) {
                sendResponse(res, queryData.callback, SUCCESS_CODE, "Success", model.toJSON());
            })
            .catch(function(err) {
                sendResponse(res, queryData.callback, ERROR_CODE, "Error: " + err);
            });
    };

    var updateModel = function(modelClass, data, queryData, req, res, next) {
        var isAdmin = true;

        new modelClass(data)
            .save()
            .then(function(model) {
                sendResponse(res, queryData.callback, SUCCESS_CODE, "Success", model.toJSON());
            })
            .catch(function(err) {
                sendResponse(res, queryData.callback, ERROR_CODE, "Error: " + err);
            });
    };

    var deleteModel = function(modelClass, id, queryData, req, res, next) {
        var isAdmin = true;

        new modelClass({id: id})
            .destroy();
    };

    var SUCCESS_CODE = 10,
        ERROR_CODE = 11;

    // TODO: compiling this list from route definitions would be cleaner
    var api = {
        routes: {
            put: {
                'users': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    updateModel(User, req.body, queryData, req, res, next);
                },
                'pages': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    updateModel(Page, req.body, queryData, req, res, next);
                },
                'memories': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    updateModel(Memory, req.body, queryData, req, res, next);
                },
                'sets': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    updateModel(Set, req.body, queryData, req, res, next);
                },
                'definitions': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    updateModel(Definition, req.body, queryData, req, res, next);
                },
                'lessons': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    updateModel(Lesson, req.body, queryData, req, res, next);
                },
                'plugins': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    updateModel(Plugin, req.body, queryData, req, res, next);
                },
                'lessonSteps': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    updateModel(LessonStep, req.body, queryData, req, res, next);
                }
            },
            delete: {
                'users': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var id = queryData['id'];

                    deleteModel(User, id, queryData, req, res, next);
                },
                'sets': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var id = queryData['id'];

                    deleteModel(Set, id, queryData, req, res, next);
                }
            },
            post: {
                'memories': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    createModel(Memory, req.body, queryData, req, res, next);
                },
                'sets': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    createModel(Set, req.body, queryData, req, res, next);
                },
                'users': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    createModel(User, req.body, queryData, req, res, next);
                },
                'pages': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    createModel(Page, req.body, queryData, req, res, next);
                },
                'definitions': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    createModel(Definition, req.body, queryData, req, res, next);
                },
                'lessons': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    createModel(Lesson, req.body, queryData, req, res, next);
                },
                'plugins': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    createModel(Plugin, req.body, queryData, req, res, next);
                },
                'account/edit': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    createModel(User, req.body, queryData, req, res, next);
                },
                'account/register': function (match, req, res, next) {
                    passport.authenticate('signup', function (err, user) {
                        var queryData = url.parse(req.url, true).query;
                        console.log(err, req.session.notice, req.session.error, req.session.success);

                        if (err) {
                            sendResponse(res, queryData.callback, ERROR_CODE, "Error", {
                                session: req.session
                            });
                            return;
                        }

                        //res.cookie('userid', user.id, {maxAge: 2592000000});

                        req.logIn(user, function (err) {
                            console.log('[Cain] Signed in', user);

                            if (err) {
                                sendResponse(res, queryData.callback, ERROR_CODE, "Error", {
                                    session: req.session,
                                    user: model.toJSON()
                                });
                                return;
                            }

                            var columns = ['id', 'username', 'email', 'fullName', 'location', 'email', 'bio', 'useSpeaker', 'useMicrophone', 'createdAt', 'updatedAt'];
                            var withRelated = [{
                                'achievements': function(knex) {},
                                'followers': function(knex) {}
                            }];

                            var isAdmin = false;

                            new User({id: user.id})
                                .fetch({
                                    columns: isAdmin ? null : columns,
                                    withRelated: withRelated
                                })
                                .then(function(model) {
                                    if (!model) {
                                        sendResponse(res, queryData.callback, ERROR_CODE, "Error: No results found", {
                                            session: req.session
                                        });
                                        return;
                                    }

                                    sendResponse(res, queryData.callback, SUCCESS_CODE, "Success", {
                                        session: req.session,
                                        user: model.toJSON()
                                    });
                                })
                                .catch(function(error) {
                                    sendResponse(res, queryData.callback, ERROR_CODE, "Error: " + error, {
                                        session: req.session
                                    });
                                });
                        });
                    })(req, res, next);
                },
                'account/login': function (match, req, res, next) {
                    passport.authenticate('signin', function (err, user) {
                        var queryData = url.parse(req.url, true).query;
                        console.log('xxx', err, req.session.notice, req.session.error, req.session.success, user);

                        if (err || !user) {
                            sendResponse(res, queryData.callback, ERROR_CODE, "Error", {
                                session: req.session
                            });
                            return;
                        }

                        //res.cookie('userid', user.id, {maxAge: 2592000000});

                        req.logIn(user, function (err) {
                            console.log('[Cain] Signed in', user);

                            if (err) {
                                sendResponse(res, queryData.callback, ERROR_CODE, "Error", {
                                    session: req.session
                                });
                                return;
                            }

                            var columns = ['id', 'username', 'email', 'fullName', 'location', 'email', 'bio', 'useSpeaker', 'useMicrophone', 'createdAt', 'updatedAt'];
                            var withRelated = [{
                                'achievements': function(knex) {},
                                'followers': function(knex) {}
                            }];

                            var isAdmin = false;

                            new User({id: user.id})
                                .fetch({
                                    columns: isAdmin ? null : columns,
                                    withRelated: withRelated
                                })
                                .then(function(model) {
                                    if (!model) {
                                        sendResponse(res, queryData.callback, ERROR_CODE, "Error: No results found", {
                                            session: req.session
                                        });
                                        return;
                                    }

                                    sendResponse(res, queryData.callback, SUCCESS_CODE, "Success", {
                                        session: req.session,
                                        user: model.toJSON()
                                    });
                                })
                                .catch(function(error) {
                                    sendResponse(res, queryData.callback, ERROR_CODE, "Error: " + error, {
                                        session: req.session
                                    });
                                });
                        });
                    })(req, res, next);
                }
            },
            get: {
                'session': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'username', 'email', 'fullName', 'location', 'email', 'bio', 'useSpeaker', 'useMicrophone', 'createdAt', 'updatedAt'];
                    var withRelated = [{
                        'achievements': function(knex) {},
                        'followers': function(knex) {}
                    }];

                    var isAdmin = false;

                    var data = cloneObject(queryData); // Clone so we don't screw up any logic in the callee
                    delete data['callback'];
                    delete data['_'];

                    if (!req.user) {
                        sendResponse(res, queryData.callback, ERROR_CODE, "Error: Unauthenticated");
                        return;
                    }

                    data.id = req.user.id;

                    new User(data)
                        .fetch({
                            columns: isAdmin ? null : columns,
                            withRelated: withRelated // http://stackoverflow.com/questions/22568153/order-bookshelf-js-fetch-by-related-column-value
                        })
                        .then(function(model) {
                            if (!model) {
                                sendResponse(res, queryData.callback, ERROR_CODE, "Error: No results found");
                                return;
                            }

                            sendResponse(res, queryData.callback, SUCCESS_CODE, "Success", {
                                session: req.session,
                                user: model.toJSON()
                            });
                        })
                        .catch(function(error) {
                            sendResponse(res, queryData.callback, ERROR_CODE, "Error: " + error);
                        });
                },
                'account/logout': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;

                    if (!req.user) {
                        sendResponse(res, queryData.callback, ERROR_CODE, "Error: No user logged in");
                        return;
                    }

                    var name = req.user.username;

                    console.log("Logging out " + name);

                    req.logout();
                    //res.clearCookie('userid');
                    //res.redirect('/');
                    req.session.notice = "You have successfully been logged out " + name + "!";

                    sendResponse(res, queryData.callback, SUCCESS_CODE, "Success", {
                        session: req.session
                    });
                },
                'setAmazonPrice/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'data'];
                    var withRelated = [];

                    queryData.setNumber = match[1];

                    new Set(queryData)
                        .fetch({
                            columns: columns
                        })
                        .then(function(model) {
                            if (!model) {
                                sendResponse(res, queryData.callback, ERROR_CODE, "Error: No results found");
                                return;
                            }

                            var amazonPrice = model.attributes.data.retailers['Amazon CA'].price;

                            sendResponse(res, queryData.callback, SUCCESS_CODE, "Success", {price: amazonPrice});
                        })
                        .catch(function(error) {
                            sendResponse(res, queryData.callback, ERROR_CODE, "Error: " + error);
                        });
                },
                'sets/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'description'];
                    var withRelated = [{
                        'author': function(knex) {
                            knex.column('id', 'username', 'fullName', 'usersFollowed', 'usersFollowing');
                        },
                        'ratings': function(knex) {},
                        'comments': function(knex) {}
                    }];

                    queryData.id = match[1];

                    getModel(Set, columns, withRelated, queryData, req, res, next);
                },
                'sets/bySetNumber/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'description'];
                    var withRelated = [{
                        'author': function(knex) {
                            knex.column('id', 'username', 'fullName', 'usersFollowed', 'usersFollowing');
                        },
                        'ratings': function(knex) {},
                        'comments': function(knex) {}
                    }];

                    queryData.setNumber = match[1];

                    getModel(Set, columns, withRelated, queryData, req, res, next);
                },
                'users/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'username', 'email', 'fullName', 'location', 'email', 'bio', 'useSpeaker', 'useMicrophone', 'createdAt', 'updatedAt'];
                    var withRelated = [{
                        'achievements': function(knex) {},
                        'followers': function(knex) {}
                    }];

                    queryData.id = match[1];

                    getModel(User, columns, withRelated, queryData, req, res, next);
                },
                'profile/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'username', 'email', 'fullName', 'location', 'email', 'bio', 'jobTitle', 'slogan', 'usersFollowing', 'usersFollowed', 'createdAt', 'updatedAt'];
                    var withRelated = [{
                        'achievements': function(knex) {},
                        'followers': function(knex) {}
                    }];

                    queryData.id = match[1];

                    getModel(User, columns, withRelated, queryData, req, res, next);
                },
                'pages/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'content', 'path', 'siteId', 'config', 'createdAt', 'updatedAt'];
                    var withRelated = [{
                        'site': function(knex) {
                            knex.column('id', 'title', 'host');
                        }
                    }];

                    queryData.id = match[1];

                    getModel(Page, columns, withRelated, queryData, req, res, next);
                },
                'sites/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'host', 'description', 'keywords', 'config', 'createdAt', 'updatedAt'];
                    var withRelated = null;

                    queryData.id = match[1];

                    getModel(Site, columns, withRelated, queryData, req, res, next);
                },
                'memories/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'userId', 'definitionId', 'createdAt', 'updatedAt'];
                    var withRelated = null;

                    queryData.id = match[1];

                    getModel(Memory, columns, withRelated, queryData, req, res, next);
                },
                'definitions/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'term', 'meaning', 'kana', 'kanji', 'romaji', 'popularity', 'type', 'language', 'createdAt', 'updatedAt'];
                    var withRelated = null;

                    queryData.id = match[1];

                    getModel(Definition, columns, withRelated, queryData, req, res, next);
                },
                'lessons/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'content', 'config', 'createdAt', 'updatedAt'];
                    var withRelated = null;

                    queryData.id = match[1];

                    getModel(Lesson, columns, withRelated, queryData, req, res, next);
                },
                'plugins/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'key', 'config', 'createdAt', 'updatedAt'];
                    var withRelated = null;

                    queryData.id = match[1];

                    getModel(Plugin, columns, withRelated, queryData, req, res, next);
                },
                'lessonSteps/([0-9]+)': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'pluginId', 'config'];
                    var withRelated = null;

                    queryData.id = match[1];

                    getModel(LessonStep, columns, withRelated, queryData, req, res, next);
                },
                'sets': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'description', 'createdAt', 'updatedAt', 'authorId', 'isPublic'];
                    var withRelated = [{
                        'ratings': function(knex) {},
                        'comments': function(knex) {},
                        'followers': function(knex) {}
                    }];

                    getModels(Set, 'sets', columns, withRelated, queryData, req, res, next);
                },
                'contributors': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'contributorId'];
                    var withRelated = [{
                        'contributor': function(knex) {}
                    }];

                    getModels(SetContributor, 'setContributors', columns, withRelated, queryData, req, res, next);
                },
                'users': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'username', 'email', 'fullName', 'location', 'email', 'bio', 'createdAt', 'usersFollowed', 'usersFollowing'];
                    var withRelated = null;

                    getModels(User, 'users', columns, withRelated, queryData, req, res, next);
                },
                'pages': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'content', 'config', 'createdAt', 'updatedAt'];
                    var withRelated = [{
                        'site': function(knex) {
                            knex.column('id', 'title', 'host');
                        }
                    }];

                    getModels(Page, 'pages', columns, withRelated, queryData, req, res, next);
                },
                'memories': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'userId', 'definitionId', 'createdAt', 'updatedAt'];
                    var withRelated = [{
                        'definition': function(knex) {},
                        'user': function(knex) {},
                        'followers': function(knex) {}
                    }];

                    getModels(Memory, 'memories', columns, withRelated, queryData, req, res, next);
                },
                'definitions': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'term', 'meaning', 'kana', 'kanji', 'romaji', 'popularity', 'type', 'language', 'createdAt', 'updatedAt'];
                    var withRelated = null;

                    getModels(Definition, 'definitions', columns, withRelated, queryData, req, res, next);
                },
                'lessons': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'content', 'config', 'createdAt', 'updatedAt'];
                    var withRelated = null;

                    getModels(Lesson, 'lessons', columns, withRelated, queryData, req, res, next);
                },
                'plugins': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'key', 'config', 'createdAt', 'updatedAt'];
                    var withRelated = null;

                    getModels(Plugin, 'plugins', columns, withRelated, queryData, req, res, next);
                },
                'sites': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'host', 'description', 'keywords', 'config', 'createdAt', 'updatedAt'];
                    var withRelated = null;

                    getModels(Site, 'sites', columns, withRelated, queryData, req, res, next);
                },
                'lessonSteps': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'pluginId', 'config'];
                    var withRelated = null;

                    getModels(LessonStep, 'lessonSteps', columns, withRelated, queryData, req, res, next);
                },
                'page': function (match, req, res, next) {
                    var queryData = url.parse(req.url, true).query;
                    var columns = ['id', 'title', 'content', 'path', 'siteId', 'config', 'createdAt', 'updatedAt'];
                    var withRelated = [{
                        'site': function(knex) {
                            knex.column('id', 'title', 'host');
                        }
                    }];

                    getModel(Page, columns, withRelated, queryData, req, res, next);
                }
            }
        }
    };

    return function (req, res, next) {
        // TODO: check if it's a GET request first
        var requestType = req.method.toLowerCase();

        for (var route in api.routes[requestType]) {
            var match = new RegExp("/v1/" + route).exec(req.url);

            if (match) {
                console.log('[Cain] Routing to ' + req.method + ' ' + route, match);

                api.routes[requestType][route](match, req, res, next);

                return; // we'll let the route take it from here
            }
        }

        // there were no matches
        next();
    };
};
