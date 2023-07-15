var loadComments = function (elId, serverUrl) {
    Waline.init(
        Object.assign(
            {
                el: elId,
                serverURL: serverUrl,
                pageview: !1,
                comment: !1,
            },
            {
                emoji: [
                    "https://npm.elemecdn.com/@waline/emojis@1.1.0/qq",
                    "https://npm.elemecdn.com/@waline/emojis@1.1.0/bilibili",
                    "https://npm.elemecdn.com/@waline/emojis@1.1.0/weibo",
                    "https://npm.elemecdn.com/@waline/emojis@1.1.0/alus",
                    "https://npm.elemecdn.com/@waline/emojis@1.1.0/tieba",
                ],
            }
        )
    );
}