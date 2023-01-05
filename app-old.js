// const http = require('node:http');
import { createServer } from 'node:http';


createServer( ( req, res ) => {
    
    res.writeHead( 200, { 'Content-Type': 'application/json' } );

    const persona = {
        id: 1,
        name: 'Jon Doe'
    }

    res.write( JSON.stringify( persona ) );
    res.end();

}).listen( 8000 );

console.log('The server is up in the port: ', 8000);