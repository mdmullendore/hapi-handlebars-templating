var Hapi = require('hapi'),
	Handlebars = require('handlebars'),
	ghost = require('ghost'),
	path = require('path'),
	server;

server = new Hapi.Server('0.0.0.0', '8000');

server.views({
    engines: {
        html: Handlebars.create()
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: true,
    partialsPath: 'views/partials'
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('home');
    }
});

server.route({
    method: 'GET',
    path: '/about',
    handler: function (request, reply) {
        reply.view('about', { title: 'About'});
    }
});

server.route({
    method: 'GET',
    path: '/contact',
    handler: function (request, reply) {
        reply.view('contact', { title: 'Contact'});
    }
});


/*
//proxy to ghost blog if you would like to
server.route({
	method: 'GET',
	path: '/blog/{p*}',
	handler: {
		proxy: {
			host: '0.0.0.0',
			port: '2368'
		}
	}
});
*/
server.start();
console.log('First Round Consult localhost:8000');
/*
ghost({
	config: path.join(__dirname, 'config.js')
})

*/