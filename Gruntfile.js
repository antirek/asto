'use strict';
module.exports = function(grunt){

    grunt.initConfig({
      // Load database config from external JSON (optional)
        db_config: grunt.file.readJSON('config/db.json'),

        db_import: {            
            // "Local" target
            local: {
              "options": {
                  "title": "Local DB",

                  "database": "<%= db_config.local.database %>",
                  "user": "<%= db_config.local.username %>",
                  "pass": "<%= db_config.local.password %>",
                  "host": "<%= db_config.local.host %>",

                  "backup_to": "schemas/mysql/sippeers.sql"
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-mysql-dump-import');

};