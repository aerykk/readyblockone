
function runCanadaBrickPickerCheck() {
    var url = 'http://community.brickpicker.com/forum/52-canada/';

    xray(url)
      .use(phantom({timeout: 30000}))
      .prepare({
        trim: function(value) {
            return value.replace(/^\s+|\s+$/g, '');
        }
      })
      .select([{
        $root: '.ipsDataItem',
        lastUserReplied: '.ipsDataItem_withPhoto li:nth-child(2) a'
      }])
      .run(function(err, topics) {
          if (!topics.length) { return; }

          if (topics[0].lastUserReplied !== runCanadaBrickPickerCheck.lastUserReplied) {
            runCanadaBrickPickerCheck.lastUserReplied = topics[0].lastUserReplied;

            // Notify user
            var message = "There's a new reply in the Canada forum";
            console.log(message);
            sendMail(message, {force: true});
          }
      });
}
