var ps = require('ps-node');
 
// A simple pid lookup 


var i=0;



for(i=0;i<5;i++)
{
	ps.lookup({
	    command: '/usr/sbin/httpd',
	    psargs: 'aux',
	    arguments: '-DFOREGROUND'
	    },function(err) { if (err) {
        				throw new Error( err );
    			       }
   			       else {
        				console.log(process.pid);
    			       }
		}
)

 	/*ps.lookup({
            command: '/usr/sbin/httpd',
            psargs: 'aux',
            arguments: '-DFOREGROUND'
            },console.log)
	*/	
}
