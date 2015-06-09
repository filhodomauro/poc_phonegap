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
        var table = document.getElementById('movies');
        if(movies !== null && movies !== undefined){
            for (var movie in movies){
                console.log(movie);
                console.log(movie);
                app.addRow(table, movies[movie]);
            }    
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    addRow: function(table, data){
        console.log('addRow1');
        var row = table.insertRow(table.rows.length);
        console.log('addRow2');
        var nameCell = row.insertCell(0);
        var nameLabel = document.createTextNode(data['title']);
        nameCell.appendChild(nameLabel);
        console.log('addRow3');
        var ratingCell = row.insertCell(1);
        var ratingLabel = document.createTextNode(data['rating']);
        ratingCell.appendChild(ratingLabel);
        console.log('addRow4');
    },

    newMovie: function(){
        location.assign('movie_form.html');
    },

    clearMovies: function(){
        var movies = JSON.parse(window.localStorage.getItem('movies'));
        console.log(movies);
        window.localStorage.removeItem('movies');
        movies = JSON.parse(window.localStorage.getItem('movies'));
        console.log(movies);
        var table = document.getElementById('movies');
        var countRows = table.rows.length;
        for(var i = table.rows.length -1; i >= 0; i--){
            table.deleteRow(i);
        }
    },

    editMovie: function(idMovie){
        location.assign('movie_form.html?id=' + idMovie);
    }

};
