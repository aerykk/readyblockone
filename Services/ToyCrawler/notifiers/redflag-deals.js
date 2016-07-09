
var redflagLegoDealsReplyCount = 0; // TODO: save in settings JSON

function runRedFlagDealsCheck() {
    var url = 'http://forums.redflagdeals.com/ongoing-deal-discussion-f129/';

    xray(url)
      .use(phantom({timeout: 20000}))
      .prepare({
        trim: function(value) {
            return value.replace(/^\s+|\s+$/g, '');
        }
      })
      .select([{
        $root: '.threadbit',
        title: '.threadtitle',
        replyCount: '.alt .understate'
      }])
      .run(function(err, topics) {
        topics.forEach(function(topic) {
            if (topic.title.toLowerCase().indexOf('lego') > 0) {
                if (topic.replies > redflagLegoDealsReplyCount) {
                    sendMail('Red Flag Deals topic new reply');

                    redflagLegoDealsReplyCount = topic.replyCount;
                }
            }
        });
      });
}
