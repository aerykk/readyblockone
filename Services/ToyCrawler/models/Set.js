if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['../database'], function(database) {
    var Set = database.Model.extend({
        tableName: 'sets',
        hasTimestamps: ['createdAt', 'updatedAt'],
        // username
        // password
        // coursesCreated
        // coursesEnrolled
        // coursesFinished
        // email
        // fullName
        // location
        // bio
        // createdAt
        // updatedAt
        // useMicrophone
        // useSpeaker
        // useSoundEffects
        // useVoiceAutoplay
        // role (roleId)
        // has_many badges
        // has_many memories
        // has_many
    });

    return Set;
});
