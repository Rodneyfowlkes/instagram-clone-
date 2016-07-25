import $ from 'jquery';
import _ from 'lodash';
import angular from 'angular';
import 'angular-ui-router';
import {MainController} from './controllers/main.controller.js'
import {config} from './config.js';
import {server} from './server_obj.js';
import {AddPhotoController} from './controllers/addPhoto.controller.js'
import {singlePost} from './controllers/single_post.controller.js'

    angular
        .module('app', ['ui.router'])
        .config(config)
        .constant('SERVER', server)
        
        .controller('MainController', MainController)
        .controller('AddPhotoController', AddPhotoController)
        .controller('singlePost', singlePost)
        ;
 