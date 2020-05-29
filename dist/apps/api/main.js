(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(35), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const typeorm_1 = __webpack_require__(2);
const user_entity_1 = __webpack_require__(10);
const comment_entity_1 = __webpack_require__(9);
const tag_entity_1 = __webpack_require__(12);
let PhotoEntity = class PhotoEntity extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], PhotoEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], PhotoEntity.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], PhotoEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => comment_entity_1.CommentEntity, comment => comment.photo, { eager: true, cascade: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Partial !== "undefined" && Partial) === "function" ? _a : Object)
], PhotoEntity.prototype, "comments", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.photos, { eager: false }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object)
], PhotoEntity.prototype, "user", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], PhotoEntity.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => user_entity_1.UserEntity, user => user.favPhotos),
    tslib_1.__metadata("design:type", Array)
], PhotoEntity.prototype, "favoriteOf", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => tag_entity_1.TagEntity, tag => tag.photo, { eager: true, cascade: true }),
    typeorm_1.JoinColumn(),
    tslib_1.__metadata("design:type", Array)
], PhotoEntity.prototype, "tags", void 0);
PhotoEntity = tslib_1.__decorate([
    typeorm_1.Entity('photos')
], PhotoEntity);
exports.PhotoEntity = PhotoEntity;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const typeorm_1 = __webpack_require__(2);
const user_entity_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const bcrypt = __webpack_require__(21);
let UserRepository = class UserRepository extends typeorm_1.Repository {
    signUp(signUpCredentialsDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { username, password, email, firstName, lastName, gender } = signUpCredentialsDto;
            const user = new user_entity_1.UserEntity();
            user.username = username;
            user.email = email;
            user.firstName = firstName;
            user.lastName = lastName;
            user.gender = gender;
            user.salt = yield bcrypt.genSalt();
            user.password = yield this.hashPassword(password, user.salt);
            try {
                yield user.save();
            }
            catch (error) {
                if (error.code === '23505') {
                    throw new common_1.ConflictException('Username already exists');
                }
                else {
                    throw new common_1.InternalServerErrorException();
                }
            }
            return user;
        });
    }
    getSearchUsers(search) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = this.createQueryBuilder('user');
            if (search) {
                query.where('(user.username LIKE :search OR user.firstName LIKE :search OR user.lastName LIKE :search OR user.description LIKE :search)', { search: `%${search}%` });
            }
            const users = yield query.getMany();
            return users;
        });
    }
    getUserFollowers(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = this.createQueryBuilder('user');
            query
                .leftJoinAndSelect('user.following', 'following')
                .where('following.id = :userId', { userId: id });
            const users = yield query.getMany();
            return users;
        });
    }
    getUserFollowing(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = this.createQueryBuilder('user');
            query
                .where('user.id = :userId', { userId: id })
                .leftJoinAndSelect('user.following', 'following');
            const user = yield query.getOne();
            return user.following;
        });
    }
    followUser(user, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = this.createQueryBuilder('user');
            query
                .where('user.id = :userId', { userId: user.id })
                .leftJoinAndSelect('user.following', 'following');
            const userEntity = yield query.getOne();
            const followingUser = yield this.findOne(id);
            let found = false;
            for (let i = 0; i < userEntity.following.length; i++) {
                if (userEntity.following[i].id === followingUser.id) {
                    found = true;
                    break;
                }
            }
            if (found) {
                userEntity.following = userEntity.following.filter(following => following.id !== followingUser.id);
            }
            else {
                userEntity.following.push(followingUser);
            }
            yield userEntity.save();
            return followingUser;
        });
    }
    hashPassword(password, salt) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return bcrypt.hash(password, salt);
        });
    }
};
UserRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(user_entity_1.UserEntity)
], UserRepository);
exports.UserRepository = UserRepository;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true,
    databaseConfig: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        database: 'napho_dev',
        username: 'davidmartinez',
        password: 'postgres',
        synchronize: true
    },
    server: {
        port: 3333
    },
    jwt: {
        secret: 'pqowieurytlaksjdhf',
        expiresIn: 86400
    }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const typeorm_1 = __webpack_require__(2);
const data_1 = __webpack_require__(3);
const photo_entity_1 = __webpack_require__(4);
const user_entity_1 = __webpack_require__(10);
let CommentEntity = class CommentEntity extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], CommentEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => photo_entity_1.PhotoEntity, photo => photo.comments, { eager: false }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Partial !== "undefined" && Partial) === "function" ? _a : Object)
], CommentEntity.prototype, "photo", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], CommentEntity.prototype, "photoId", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], CommentEntity.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'enum', enum: data_1.CommentStatus }),
    tslib_1.__metadata("design:type", typeof (_b = typeof data_1.CommentStatus !== "undefined" && data_1.CommentStatus) === "function" ? _b : Object)
], CommentEntity.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity),
    tslib_1.__metadata("design:type", typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object)
], CommentEntity.prototype, "user", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], CommentEntity.prototype, "username", void 0);
CommentEntity = tslib_1.__decorate([
    typeorm_1.Entity('comments')
], CommentEntity);
exports.CommentEntity = CommentEntity;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UserEntity_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const typeorm_1 = __webpack_require__(2);
const bcrypt = __webpack_require__(21);
const photo_entity_1 = __webpack_require__(4);
let UserEntity = UserEntity_1 = class UserEntity extends typeorm_1.BaseEntity {
    validatePassword(password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const hash = yield bcrypt.hash(password, this.salt);
            return hash === this.password;
        });
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ unique: true }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ unique: true }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "gender", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserEntity.prototype, "birthDate", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "profileImgUrl", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => photo_entity_1.PhotoEntity, photo => photo.user, { eager: true }),
    tslib_1.__metadata("design:type", Array)
], UserEntity.prototype, "photos", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => photo_entity_1.PhotoEntity, photo => photo.favoriteOf),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], UserEntity.prototype, "favPhotos", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => UserEntity_1, { cascade: true }),
    typeorm_1.JoinTable({
        joinColumns: [{ name: 'followerId' }],
        inverseJoinColumns: [{ name: 'followingId' }]
    }),
    tslib_1.__metadata("design:type", Array)
], UserEntity.prototype, "following", void 0);
UserEntity = UserEntity_1 = tslib_1.__decorate([
    typeorm_1.Entity('users'),
    typeorm_1.Unique(['username', 'email'])
], UserEntity);
exports.UserEntity = UserEntity;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const typeorm_1 = __webpack_require__(2);
const data_1 = __webpack_require__(3);
const photo_entity_1 = __webpack_require__(4);
let TagEntity = class TagEntity extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], TagEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], TagEntity.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => photo_entity_1.PhotoEntity, photo => photo.tags, { eager: false }),
    tslib_1.__metadata("design:type", typeof (_a = typeof data_1.Photo !== "undefined" && data_1.Photo) === "function" ? _a : Object)
], TagEntity.prototype, "photo", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], TagEntity.prototype, "photoId", void 0);
TagEntity = tslib_1.__decorate([
    typeorm_1.Entity('tags')
], TagEntity);
exports.TagEntity = TagEntity;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const typeorm_1 = __webpack_require__(2);
const photo_entity_1 = __webpack_require__(4);
const tag_entity_1 = __webpack_require__(12);
let PhotoRepository = class PhotoRepository extends typeorm_1.Repository {
    createPhoto(createPhotoDto, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { description, tags, imageUrl } = createPhotoDto;
            const photoTags = [];
            const photo = new photo_entity_1.PhotoEntity();
            photo.description = description;
            photo.imageUrl = imageUrl;
            photo.user = user;
            photo.userId = user.id;
            tags.forEach(tag => {
                const photoTag = new tag_entity_1.TagEntity();
                photoTag.content = tag;
                photoTag.photoId = photo.id;
                photoTags.push(photoTag);
            });
            photo.tags = photoTags;
            yield photo.save();
            return photo;
        });
    }
};
PhotoRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(photo_entity_1.PhotoEntity)
], PhotoRepository);
exports.PhotoRepository = PhotoRepository;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
exports.GetUser = common_1.createParamDecorator((data, req) => {
    return req.user;
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const auth_controller_1 = __webpack_require__(50);
const auth_service_1 = __webpack_require__(22);
const data_1 = __webpack_require__(3);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(23);
const passport_1 = __webpack_require__(6);
const jwt_strategy_1 = __webpack_require__(52);
const environment_1 = __webpack_require__(8);
const user_repository_1 = __webpack_require__(7);
const users_controller_1 = __webpack_require__(54);
const users_service_1 = __webpack_require__(24);
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || environment_1.environment.jwt.secret,
                signOptions: { expiresIn: environment_1.environment.jwt.expiresIn }
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            data_1.UsersModule
        ],
        controllers: [auth_controller_1.AuthController, users_controller_1.UsersController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, user_repository_1.UserRepository, users_service_1.UsersService],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule]
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const data_1 = __webpack_require__(3);
const comment_repository_1 = __webpack_require__(20);
const comment_entity_1 = __webpack_require__(9);
const photo_repository_1 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(2);
let CommentsService = class CommentsService {
    constructor(connection) {
        this.connection = connection;
        this.commentRepository = this.connection.getCustomRepository(comment_repository_1.CommentRepository);
        this.photoRepository = this.connection.getCustomRepository(photo_repository_1.PhotoRepository);
    }
    getComments(filterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.commentRepository.getComments(filterDto);
        });
    }
    getCommentById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const found = yield this.commentRepository.findOne(id);
            if (!found) {
                throw new common_1.NotFoundException(`Comment with ID "${id}" not found`);
            }
            return found;
        });
    }
    createComment(photoId, createCommentDto, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { content } = createCommentDto;
            const photo = yield this.photoRepository.findOne({ id: photoId });
            const comment = new comment_entity_1.CommentEntity();
            comment.content = content;
            comment.photoId = photoId;
            comment.status = data_1.CommentStatus.pending;
            comment.user = user;
            comment.username = user.username;
            photo.comments.push(comment);
            yield photo.save();
            return comment;
        });
    }
    deleteComment(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.commentRepository.delete(id);
            if (!result.affected) {
                throw new common_1.NotFoundException(`Comment with ID "${id}" not found`);
            }
        });
    }
    updateCommentStatus(id, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const comment = yield this.getCommentById(id);
            comment.status = status;
            yield comment.save();
            return comment;
        });
    }
};
CommentsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Connection !== "undefined" && typeorm_1.Connection) === "function" ? _a : Object])
], CommentsService);
exports.CommentsService = CommentsService;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const typeorm_1 = __webpack_require__(2);
const comment_entity_1 = __webpack_require__(9);
let CommentRepository = class CommentRepository extends typeorm_1.Repository {
    getComments(filterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { status, search } = filterDto;
            const query = this.createQueryBuilder('comment');
            if (status) {
                query.andWhere('comment.status = :status', { status });
            }
            if (search) {
                query.andWhere('comment.content LIKE :search', { search: `%${search}%` });
            }
            const comments = yield query.getMany();
            return comments;
        });
    }
};
CommentRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(comment_entity_1.CommentEntity)
], CommentRepository);
exports.CommentRepository = CommentRepository;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(23);
const user_repository_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(2);
let AuthService = class AuthService {
    constructor(jwtService, connection) {
        this.jwtService = jwtService;
        this.connection = connection;
        this.userRepository = this.connection.getCustomRepository(user_repository_1.UserRepository);
    }
    signUp(signUpCredentialsDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userRepository.signUp(signUpCredentialsDto);
        });
    }
    signIn(authCredentialsDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.validateUserPassword(authCredentialsDto);
            if (!user) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const { photos, favPhotos, following } = user, payload = tslib_1.__rest(user, ["photos", "favPhotos", "following"]);
            // const payload = { user };
            const token = yield this.jwtService.sign(payload);
            return Object.assign(Object.assign({}, user), { token });
        });
    }
    validateUserPassword(authCredentialsDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email, password } = authCredentialsDto;
            const user = yield this.userRepository.findOne({
                where: [{ email }]
            });
            if (user && (yield user.validatePassword(password))) {
                return user;
            }
            else {
                return null;
            }
        });
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Connection !== "undefined" && typeorm_1.Connection) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const user_repository_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(2);
let UsersService = class UsersService {
    constructor(connection) {
        this.connection = connection;
        this.userRepository = this.connection.getCustomRepository(user_repository_1.UserRepository);
    }
    getSearchUsers(search) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userRepository.getSearchUsers(search);
        });
    }
    getUserById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const found = yield this.userRepository.findOne({
                where: { id }
            });
            if (!found) {
                throw new common_1.NotFoundException(`User with ID "${id}" not found`);
            }
            return found;
        });
    }
    getUserFollowers(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userRepository.getUserFollowers(id);
        });
    }
    getUserFollowing(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userRepository.getUserFollowing(id);
        });
    }
    followUser(user, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userRepository.followUser(user, id);
        });
    }
    updateUser(user, userBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userEntity = yield this.getUserById(user.id);
            userEntity.firstName = userBody.firstName;
            userEntity.lastName = userBody.lastName;
            userEntity.gender = userBody.gender;
            userEntity.username = userBody.username;
            userEntity.description = userBody.description;
            userEntity.profileImgUrl = userBody.profileImgUrl;
            yield userEntity.save();
            return userEntity;
        });
    }
};
UsersService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Connection !== "undefined" && typeorm_1.Connection) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const photo_repository_1 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(2);
const user_repository_1 = __webpack_require__(7);
let PhotosService = class PhotosService {
    constructor(connection) {
        this.connection = connection;
        this.photoRepository = this.connection.getCustomRepository(photo_repository_1.PhotoRepository);
        this.userRepository = this.connection.getCustomRepository(user_repository_1.UserRepository);
    }
    getUserPhotos(id, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = this.photoRepository.createQueryBuilder('photo');
            const userQuery = this.userRepository.createQueryBuilder('user');
            userQuery
                .where('user.id = :userId', { userId: user.id })
                .leftJoinAndSelect('user.favPhotos', 'favPhotos');
            const userEntity = yield userQuery.getOne();
            query.andWhere('photo.userId = :userId', { userId: id });
            let photos = yield query
                .leftJoinAndSelect('photo.user', 'user')
                .leftJoinAndSelect('photo.comments', 'comment')
                .leftJoinAndSelect('photo.tags', 'tag')
                .leftJoinAndSelect('photo.favoriteOf', 'favoriteOf')
                .getMany();
            photos = photos.map(photo => {
                let found = false;
                for (let i = 0; i < userEntity.favPhotos.length; i++) {
                    if (userEntity.favPhotos[i].id === photo.id) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    photo['favorite'] = true;
                }
                else {
                    photo['favorite'] = false;
                }
                return photo;
            });
            return photos;
        });
    }
    getUserFavPhotos(id, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = this.photoRepository.createQueryBuilder('photo');
            const userQuery = this.userRepository.createQueryBuilder('user');
            userQuery
                .where('user.id = :userId', { userId: user.id })
                .leftJoinAndSelect('user.favPhotos', 'favPhotos');
            const userEntity = yield userQuery.getOne();
            const favPhotos = userEntity.favPhotos.map(favPhoto => favPhoto.id);
            let photos = yield query
                .leftJoinAndSelect('photo.user', 'user')
                .leftJoinAndSelect('photo.comments', 'comment')
                .leftJoinAndSelect('photo.tags', 'tag')
                .leftJoinAndSelect('photo.favoriteOf', 'favoriteOf')
                .getMany();
            photos = photos.filter(photo => {
                if (favPhotos.includes(photo.id)) {
                    return photo;
                }
            });
            photos = photos.filter(photo => {
                const favoriteOf = photo.favoriteOf.map(favOf => favOf.id);
                if (favoriteOf.includes(id)) {
                    return photo;
                }
            });
            photos = photos.map(photo => {
                let found = false;
                for (let i = 0; i < userEntity.favPhotos.length; i++) {
                    if (userEntity.favPhotos[i].id === photo.id) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    photo['favorite'] = true;
                }
                else {
                    photo['favorite'] = false;
                }
                return photo;
            });
            return photos;
        });
    }
    getFeedPhotos(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const photoQuery = this.photoRepository.createQueryBuilder('photo');
            const userQuery = this.userRepository.createQueryBuilder('user');
            userQuery
                .where('user.id = :userId', { userId: user.id })
                .leftJoinAndSelect('user.following', 'following')
                .leftJoinAndSelect('user.favPhotos', 'favPhotos');
            const userEntity = yield userQuery.getOne();
            const following = userEntity.following.map(follow => follow.id);
            let photos = yield photoQuery
                .leftJoinAndSelect('photo.user', 'user')
                .leftJoinAndSelect('photo.comments', 'comment')
                .leftJoinAndSelect('photo.tags', 'tag')
                .leftJoinAndSelect('photo.favoriteOf', 'favoriteOf')
                .getMany();
            photos = photos.filter(photo => {
                if (following.includes(photo.user.id)) {
                    return photo;
                }
            });
            photos = photos.map(photo => {
                let found = false;
                for (let i = 0; i < userEntity.favPhotos.length; i++) {
                    if (userEntity.favPhotos[i].id === photo.id) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    photo['favorite'] = true;
                }
                else {
                    photo['favorite'] = false;
                }
                return photo;
            });
            return photos;
        });
    }
    getSearchPhotos(filterDto, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { search, field } = filterDto;
            const query = this.photoRepository.createQueryBuilder('photo');
            const userQuery = this.userRepository.createQueryBuilder('user');
            userQuery
                .where('user.id = :userId', { userId: user.id })
                .leftJoinAndSelect('user.favPhotos', 'favPhotos');
            const userEntity = yield userQuery.getOne();
            query
                .leftJoinAndSelect('photo.user', 'user')
                .leftJoinAndSelect('photo.comments', 'comment')
                .leftJoinAndSelect('photo.tags', 'tag')
                .leftJoinAndSelect('photo.favoriteOf', 'favoriteOf');
            // let photos = await query.getMany();
            // const tags = [];
            // photos.forEach(photo => photo.tags.forEach(tag => {
            //   tags.push(tag.content)
            // }));
            // console.log(search, tags)
            if (search) {
                query.where('(photo.description LIKE :search OR user.username LIKE :search OR user.firstName LIKE :search OR user.lastName LIKE :search)', { search: `%${search}%` });
            }
            if (field) {
                if (field === 'favoriteOf') {
                    query
                        .addSelect('COUNT(favoriteOf.id) as favoriteCount')
                        .orderBy('favoriteCount', 'DESC');
                }
                else if (field === 'comments') {
                    query
                        .addSelect('COUNT(comment.id) as commentCount')
                        .orderBy('commentCount', 'DESC');
                }
            }
            let photos = yield query
                .groupBy('photo.id')
                .addGroupBy('user.id')
                .addGroupBy('comment.id')
                .addGroupBy('tag.id')
                .addGroupBy('favoriteOf.id')
                .getMany();
            photos = photos.map(photo => {
                let found = false;
                for (let i = 0; i < userEntity.favPhotos.length; i++) {
                    if (userEntity.favPhotos[i].id === photo.id) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    photo['favorite'] = true;
                }
                else {
                    photo['favorite'] = false;
                }
                return photo;
            });
            this.photoRepository.findAndCount();
            return photos;
        });
    }
    getPhotoById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const found = yield this.photoRepository.findOne({
                where: { id }
            });
            if (!found) {
                throw new common_1.NotFoundException(`Photo with ID "${id}" not found`);
            }
            return found;
        });
    }
    createPhoto(createPhotoDto, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.photoRepository.createPhoto(createPhotoDto, user);
        });
    }
    deletePhoto(id, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.photoRepository.delete({ id, userId: user.id });
            if (!result.affected) {
                throw new common_1.NotFoundException(`Photo with ID "${id}" not found`);
            }
        });
    }
    updatePhotoFavorite(id, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = this.userRepository.createQueryBuilder('user');
            query
                .where('user.id = :userId', { userId: user.id })
                .leftJoinAndSelect('user.favPhotos', 'favPhotos');
            const userEntity = yield query.getOne();
            const photo = yield this.getPhotoById(id);
            let found = false;
            for (let i = 0; i < userEntity.favPhotos.length; i++) {
                if (userEntity.favPhotos[i].id === photo.id) {
                    found = true;
                    break;
                }
            }
            if (found) {
                userEntity.favPhotos = userEntity.favPhotos.filter(favPhoto => favPhoto.id !== photo.id);
            }
            else {
                userEntity.favPhotos.push(photo);
            }
            yield userEntity.save();
            yield photo.save();
            return photo;
        });
    }
};
PhotosService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Connection !== "undefined" && typeorm_1.Connection) === "function" ? _a : Object])
], PhotosService);
exports.PhotosService = PhotosService;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(28);
const environment_1 = __webpack_require__(8);
const bodyParser = __webpack_require__(29);
const app_module_1 = __webpack_require__(30);
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe());
        app.enableCors();
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        app.use(bodyParser.json({ limit: '50mb' }));
        app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        const port = process.env.PORT || environment_1.environment.server.port;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(31);
const app_service_1 = __webpack_require__(17);
const comments_module_1 = __webpack_require__(32);
const typeorm_1 = __webpack_require__(15);
const typeorm_config_1 = __webpack_require__(55);
const photos_module_1 = __webpack_require__(56);
const auth_module_1 = __webpack_require__(16);
const serve_static_1 = __webpack_require__(60); // <- INSERT LINE
const path_1 = __webpack_require__(61); // <- INSERT LINE
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'napho-client'),
                exclude: ['/api*']
            }),
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            auth_module_1.AuthModule,
            comments_module_1.CommentsModule,
            photos_module_1.PhotosModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(17);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    common_1.Get('hello'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const comments_controller_1 = __webpack_require__(33);
const comments_service_1 = __webpack_require__(18);
const typeorm_1 = __webpack_require__(15);
const comment_repository_1 = __webpack_require__(20);
const auth_module_1 = __webpack_require__(16);
let CommentsModule = class CommentsModule {
};
CommentsModule = tslib_1.__decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([comment_repository_1.CommentRepository]), auth_module_1.AuthModule],
        controllers: [comments_controller_1.CommentsController],
        providers: [comments_service_1.CommentsService]
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const comments_service_1 = __webpack_require__(18);
const data_1 = __webpack_require__(3);
const create_comment_dto_1 = __webpack_require__(47);
const get_comments_filter_dto_1 = __webpack_require__(48);
const comment_status_validation_pipe_1 = __webpack_require__(49);
const passport_1 = __webpack_require__(6);
const get_user_decorator_1 = __webpack_require__(14);
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    getComments(filterDto) {
        return this.commentsService.getComments(filterDto);
    }
    getCommentById(id) {
        return this.commentsService.getCommentById(id);
    }
    createComment(photoId, createCommentDto, user) {
        return this.commentsService.createComment(photoId, createCommentDto, user);
    }
    deleteComment(id) {
        return this.commentsService.deleteComment(id);
    }
    updateCommentStatus(id, status) {
        return this.commentsService.updateCommentStatus(id, status);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__param(0, common_1.Query(common_1.ValidationPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof get_comments_filter_dto_1.GetCommentsFilterDto !== "undefined" && get_comments_filter_dto_1.GetCommentsFilterDto) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CommentsController.prototype, "getComments", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CommentsController.prototype, "getCommentById", null);
tslib_1.__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    tslib_1.__param(0, common_1.Param('photoId', common_1.ParseIntPipe)),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__param(2, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_d = typeof create_comment_dto_1.CreateCommentDto !== "undefined" && create_comment_dto_1.CreateCommentDto) === "function" ? _d : Object, typeof (_e = typeof Partial !== "undefined" && Partial) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], CommentsController.prototype, "createComment", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CommentsController.prototype, "deleteComment", null);
tslib_1.__decorate([
    common_1.Patch(':id/status'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__param(1, common_1.Body('status', comment_status_validation_pipe_1.CommentStatusValidationPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_h = typeof data_1.CommentStatus !== "undefined" && data_1.CommentStatus) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], CommentsController.prototype, "updateCommentStatus", null);
CommentsController = tslib_1.__decorate([
    common_1.Controller(':photoId/comments'),
    common_1.UseGuards(passport_1.AuthGuard()),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof comments_service_1.CommentsService !== "undefined" && comments_service_1.CommentsService) === "function" ? _k : Object])
], CommentsController);
exports.CommentsController = CommentsController;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const core_1 = __webpack_require__(11);
const common_1 = __webpack_require__(19);
let DataModule = class DataModule {
};
DataModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule]
    })
], DataModule);
exports.DataModule = DataModule;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const core_1 = __webpack_require__(11);
const common_1 = __webpack_require__(19);
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [],
        imports: [
            common_1.CommonModule
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(41), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommentStatus;
(function (CommentStatus) {
    CommentStatus["pending"] = "pending";
    CommentStatus["approved"] = "approved";
    CommentStatus["rejected"] = "rejected";
})(CommentStatus = exports.CommentStatus || (exports.CommentStatus = {}));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(11);
exports.NAPHO_DATA_CONFIGURATION = new core_1.InjectionToken('Napho Data configurations');


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const class_validator_1 = __webpack_require__(5);
class CreateCommentDto {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], CreateCommentDto.prototype, "content", void 0);
exports.CreateCommentDto = CreateCommentDto;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const data_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(5);
class GetCommentsFilterDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsIn([data_1.CommentStatus.pending, data_1.CommentStatus.approved, data_1.CommentStatus.rejected]),
    tslib_1.__metadata("design:type", typeof (_a = typeof data_1.CommentStatus !== "undefined" && data_1.CommentStatus) === "function" ? _a : Object)
], GetCommentsFilterDto.prototype, "status", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], GetCommentsFilterDto.prototype, "search", void 0);
exports.GetCommentsFilterDto = GetCommentsFilterDto;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
const data_1 = __webpack_require__(3);
class CommentStatusValidationPipe {
    constructor() {
        this.allowedStatuses = [
            data_1.CommentStatus.pending,
            data_1.CommentStatus.approved,
            data_1.CommentStatus.rejected
        ];
    }
    transform(value) {
        value = value.toLowerCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`"${value}" is an invalid status`);
        }
        return value;
    }
    isStatusValid(status) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}
exports.CommentStatusValidationPipe = CommentStatusValidationPipe;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const auth_credentials_dto_1 = __webpack_require__(51);
const auth_service_1 = __webpack_require__(22);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signUp(signUpCredentialsDto) {
        return this.authService.signUp(signUpCredentialsDto);
    }
    signIn(authCredentialsDto) {
        return this.authService.signIn(authCredentialsDto);
    }
};
tslib_1.__decorate([
    common_1.Post('/signup'),
    tslib_1.__param(0, common_1.Body(common_1.ValidationPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_credentials_dto_1.SignUpCredentialsDto !== "undefined" && auth_credentials_dto_1.SignUpCredentialsDto) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthController.prototype, "signUp", null);
tslib_1.__decorate([
    common_1.Post('/signin'),
    tslib_1.__param(0, common_1.Body(common_1.ValidationPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof auth_credentials_dto_1.AuthCredentialsDto !== "undefined" && auth_credentials_dto_1.AuthCredentialsDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "signIn", null);
AuthController = tslib_1.__decorate([
    common_1.Controller('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _e : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const class_validator_1 = __webpack_require__(5);
class AuthCredentialsDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], AuthCredentialsDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(8),
    class_validator_1.MaxLength(20),
    class_validator_1.Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak'
    }),
    tslib_1.__metadata("design:type", String)
], AuthCredentialsDto.prototype, "password", void 0);
exports.AuthCredentialsDto = AuthCredentialsDto;
class SignUpCredentialsDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(4),
    class_validator_1.MaxLength(20),
    tslib_1.__metadata("design:type", String)
], SignUpCredentialsDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], SignUpCredentialsDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], SignUpCredentialsDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], SignUpCredentialsDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], SignUpCredentialsDto.prototype, "gender", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(8),
    class_validator_1.MaxLength(20),
    class_validator_1.Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak'
    }),
    tslib_1.__metadata("design:type", String)
], SignUpCredentialsDto.prototype, "password", void 0);
exports.SignUpCredentialsDto = SignUpCredentialsDto;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(6);
const passport_jwt_1 = __webpack_require__(53);
const user_repository_1 = __webpack_require__(7);
const environment_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(2);
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(connection) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET || environment_1.environment.jwt.secret
        });
        this.connection = connection;
        this.userRepository = this.connection.getCustomRepository(user_repository_1.UserRepository);
    }
    validate(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email } = user;
            const userFromDatabase = yield this.userRepository.findOne({ email });
            if (!userFromDatabase) {
                throw new common_1.UnauthorizedException();
            }
            return user;
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Connection !== "undefined" && typeorm_1.Connection) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const users_service_1 = __webpack_require__(24);
const passport_1 = __webpack_require__(6);
const get_user_decorator_1 = __webpack_require__(14);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getSearchUsers(search) {
        return this.usersService.getSearchUsers(search);
    }
    getUserById(id) {
        return this.usersService.getUserById(id);
    }
    getUserFollowers(id) {
        return this.usersService.getUserFollowers(id);
    }
    getUserFollowing(id) {
        return this.usersService.getUserFollowing(id);
    }
    followUser(id, user) {
        return this.usersService.followUser(user, id);
    }
    updateUser(userBody, user) {
        return this.usersService.updateUser(user, userBody);
    }
};
tslib_1.__decorate([
    common_1.Get('search'),
    tslib_1.__param(0, common_1.Query('search')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], UsersController.prototype, "getSearchUsers", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UsersController.prototype, "getUserById", null);
tslib_1.__decorate([
    common_1.Get(':id/followers'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "getUserFollowers", null);
tslib_1.__decorate([
    common_1.Get(':id/following'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UsersController.prototype, "getUserFollowing", null);
tslib_1.__decorate([
    common_1.Put('follow/:id'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__param(1, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_e = typeof Partial !== "undefined" && Partial) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UsersController.prototype, "followUser", null);
tslib_1.__decorate([
    common_1.Patch(),
    tslib_1.__param(0, common_1.Body('userBody')),
    tslib_1.__param(1, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof Partial !== "undefined" && Partial) === "function" ? _g : Object, typeof (_h = typeof Partial !== "undefined" && Partial) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], UsersController.prototype, "updateUser", null);
UsersController = tslib_1.__decorate([
    common_1.Controller('users'),
    common_1.UseGuards(passport_1.AuthGuard()),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _k : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = __webpack_require__(8);
const user_entity_1 = __webpack_require__(10);
const comment_entity_1 = __webpack_require__(9);
const photo_entity_1 = __webpack_require__(4);
const tag_entity_1 = __webpack_require__(12);
exports.typeOrmConfig = {
    // type: 'postgres',
    // host: 'localhost',
    // port: 5432,
    // username: 'davidmartinez',
    // password: 'postgres',
    // database: 'napho_dev',
    // entities: [UserEntity, CommentEntity, PhotoEntity, TagEntity],
    // synchronize: true
    type: environment_1.environment.databaseConfig.type,
    host: process.env.RDS_HOSTNAME || environment_1.environment.databaseConfig.host,
    port: Number(process.env.RDS_PORT) || environment_1.environment.databaseConfig.port,
    username: process.env.RDS_USERNAME || environment_1.environment.databaseConfig.username,
    password: process.env.RDS_PASSWORD || environment_1.environment.databaseConfig.password,
    database: process.env.RDS_DB_NAME || environment_1.environment.databaseConfig.database,
    entities: [user_entity_1.UserEntity, comment_entity_1.CommentEntity, photo_entity_1.PhotoEntity, tag_entity_1.TagEntity],
    synchronize: Boolean(process.env.TYPEORMSYNC) || environment_1.environment.databaseConfig.synchronize
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const photos_controller_1 = __webpack_require__(57);
const photos_service_1 = __webpack_require__(25);
const photo_repository_1 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(15);
const auth_module_1 = __webpack_require__(16);
let PhotosModule = class PhotosModule {
};
PhotosModule = tslib_1.__decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([photo_repository_1.PhotoRepository]), auth_module_1.AuthModule],
        controllers: [photos_controller_1.PhotosController],
        providers: [photos_service_1.PhotosService]
    })
], PhotosModule);
exports.PhotosModule = PhotosModule;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(6);
const photos_service_1 = __webpack_require__(25);
const get_photos_filter_dto_1 = __webpack_require__(58);
const create_photo_dto_1 = __webpack_require__(59);
const get_user_decorator_1 = __webpack_require__(14);
let PhotosController = class PhotosController {
    constructor(photosService) {
        this.photosService = photosService;
    }
    getUserPhotos(id, user) {
        return this.photosService.getUserPhotos(id, user);
    }
    getUserFavPhotos(id, user) {
        return this.photosService.getUserFavPhotos(id, user);
    }
    getFeedPhotos(user) {
        return this.photosService.getFeedPhotos(user);
    }
    getSearchPhotos(filterDto, user) {
        return this.photosService.getSearchPhotos(filterDto, user);
    }
    getPhotoById(id) {
        return this.photosService.getPhotoById(id);
    }
    createPhoto(createPhotoDto, user) {
        return this.photosService.createPhoto(createPhotoDto, user);
    }
    deletePhoto(id, user) {
        return this.photosService.deletePhoto(id, user);
    }
    updatePhotoFavorite(id, user) {
        return this.photosService.updatePhotoFavorite(id, user);
    }
};
tslib_1.__decorate([
    common_1.Get('user/:id'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__param(1, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_a = typeof Partial !== "undefined" && Partial) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], PhotosController.prototype, "getUserPhotos", null);
tslib_1.__decorate([
    common_1.Get('user-fav/:id'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__param(1, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], PhotosController.prototype, "getUserFavPhotos", null);
tslib_1.__decorate([
    common_1.Get('feed'),
    tslib_1.__param(0, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof Partial !== "undefined" && Partial) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], PhotosController.prototype, "getFeedPhotos", null);
tslib_1.__decorate([
    common_1.Get('search'),
    tslib_1.__param(0, common_1.Query(common_1.ValidationPipe)),
    tslib_1.__param(1, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof get_photos_filter_dto_1.GetPhotosFilterDto !== "undefined" && get_photos_filter_dto_1.GetPhotosFilterDto) === "function" ? _g : Object, typeof (_h = typeof Partial !== "undefined" && Partial) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], PhotosController.prototype, "getSearchPhotos", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], PhotosController.prototype, "getPhotoById", null);
tslib_1.__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    tslib_1.__param(0, common_1.Body('photo')),
    tslib_1.__param(1, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_l = typeof create_photo_dto_1.CreatePhotoDto !== "undefined" && create_photo_dto_1.CreatePhotoDto) === "function" ? _l : Object, typeof (_m = typeof Partial !== "undefined" && Partial) === "function" ? _m : Object]),
    tslib_1.__metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], PhotosController.prototype, "createPhoto", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__param(1, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_p = typeof Partial !== "undefined" && Partial) === "function" ? _p : Object]),
    tslib_1.__metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], PhotosController.prototype, "deletePhoto", null);
tslib_1.__decorate([
    common_1.Patch(':id/favorite'),
    tslib_1.__param(0, common_1.Param('id', common_1.ParseIntPipe)),
    tslib_1.__param(1, get_user_decorator_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_r = typeof Partial !== "undefined" && Partial) === "function" ? _r : Object]),
    tslib_1.__metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], PhotosController.prototype, "updatePhotoFavorite", null);
PhotosController = tslib_1.__decorate([
    common_1.Controller('photos'),
    common_1.UseGuards(passport_1.AuthGuard()),
    tslib_1.__metadata("design:paramtypes", [typeof (_t = typeof photos_service_1.PhotosService !== "undefined" && photos_service_1.PhotosService) === "function" ? _t : Object])
], PhotosController);
exports.PhotosController = PhotosController;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const class_validator_1 = __webpack_require__(5);
class GetPhotosFilterDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], GetPhotosFilterDto.prototype, "search", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], GetPhotosFilterDto.prototype, "field", void 0);
exports.GetPhotosFilterDto = GetPhotosFilterDto;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const class_validator_1 = __webpack_require__(5);
class CreatePhotoDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], CreatePhotoDto.prototype, "description", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Array)
], CreatePhotoDto.prototype, "tags", void 0);
exports.CreatePhotoDto = CreatePhotoDto;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map