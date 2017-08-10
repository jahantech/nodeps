var ps = require('ps-node');
 
// A simple pid lookup 


var i=0;

for(i=0;i<10;i++)
{
	ps.lookup({
	    command: 'sshd',
	    psargs: 'aux'
	    }, function(err, resultList ) {
	    if (err) {
		throw new Error( err );
	    }
	 
	    resultList.forEach(function( process ){
		if( process ){
		    console.log( 'PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
		}
	    });
	});
}
