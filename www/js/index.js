/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Device ready');
        setTimeout(app.load, 50);
    },

    load: function(){
        var movies = JSON.parse(window.localStorage.getItem('movies'));
        console.log(movies);
        var ul = document.getElementById('movies');
        if(movies !== null && movies !== undefined){
            for (var movie in movies){
                console.log(movie);
                app.addRow(ul, movies[movie]);
            }    
        }
    },

    addRow: function(ul, data){
        console.log('addRow1');
        var li = document.createElement('li');
        li.className = 'list__item list__item--tappable';

        console.log('addRow2');
        var img = document.createElement('img');
        img.src = data['image'];
        img.className='item-image'; 
        li.appendChild(img);

        console.log('addRow3');
        var span = document.createElement('span');
        span.className = 'item-name';
        var nameLabel = document.createTextNode(data['title']);
        span.appendChild(nameLabel);
        li.appendChild(span);
        
        console.log('addRow4');
        ul.appendChild(li);
    },

    newMovie: function(){
        location.replace('movie_form.html');
    },

    clearMovies: function(){
        console.log('Clearing movies');
        var movies = JSON.parse(window.localStorage.getItem('movies'));
        console.log(movies);
        window.localStorage.removeItem('movies');
        movies = JSON.parse(window.localStorage.getItem('movies'));
        console.log(movies);
        var ul = document.getElementById('movies');
        while(ul.hasChildNodes()){
            ul.removeChild(ul.firstChild);
        }
    },

    editMovie: function(idMovie){
        location.replace('movie_form.html?id=' + idMovie);
    }

};
