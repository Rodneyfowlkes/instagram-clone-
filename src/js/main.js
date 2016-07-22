import $ from 'jquery';
import _ from 'lodash';

import angular from 'angular';
import 'angular-ui-router';
import {MainController} from './controllers/main.controller.js'
import {config} from './config.js';
import {server} from './server_obj.js';
import {AddPhotoContoller} from './controllers/addPhoto.controller.js'


    angular
        .module('app', ['ui.router'])
        .constant('SERVER', server)
        .config(config)
        .controller('MainController', MainController)
        .controller('AddPhotoContoller', AddPhotoContoller)
        ;
 