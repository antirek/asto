var Sequelize = require('sequelize');
var sequelize = new Sequelize('asterisk', 'root', '1234', {dialect: 'mariadb'});


var Sippeer = sequelize.define('sippeers', {
		name: Sequelize.STRING,
		secret: Sequelize.STRING,
	},
	
	Sequelize.Utils._.extend({    	
    	classMethods: {
    		findByName: function(name) {
        		return this.find({where: {name: name}})
      		}
    	}
	})
);


module.exports = Sippeer;