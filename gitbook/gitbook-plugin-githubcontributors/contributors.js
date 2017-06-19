require(['gitbook'], function (gitbook) {

    var githubOwner = "";
    var backgroundColor = $(".book-summary").css("background-color");
    var contributorWidth = "";

    var githubRepository = "";
    var spinner = "<div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div>";


    var changeBackgroundForContributors = function () {
        $(".contributor").each(function (index, element) {
            $(element).css('background-color', backgroundColor);
        });
    };

    function listenForThemeChanges() {
        var $div = $(".book");
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === "class") {
                    backgroundColor = $(".book-summary").css("background-color");
                    changeBackgroundForContributors();
                }
            });
        });
        observer.observe($div[0], {
            attributes: true
        });
    }

    var loadAndShowContributors = function (contributorsSection) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.github.com/repos/" + githubOwner + "/" + githubRepository + "/stats/contributors",
            "method": "GET"
        };

        $.ajax(settings).done(function (response) {
            resetContributorsContent(contributorsSection);

            var users = $(contributorsSection);
            $.each(response, function (index, value) {
                var userContent = createUserContent(value);
                $(users).append(userContent);
            });
            $(users).children().sort(function (a, b) {
                return parseInt(b.children[0].dataset.weight) - parseInt(a.children[0].dataset.weight);
            }).appendTo(contributorsSection);
        });

        listenForThemeChanges();

    };

    var createUserContent = function (githubContribution) {
        var additions = 0;
        var deletions = 0;
        $.each(githubContribution.weeks, function () {
            additions += this.a;
            deletions += this.d;
        });
        return $("<div></div>")
            .css('background-color', backgroundColor)
            .css('width', contributorWidth)
            .css('display', 'inline-block')
            .css('margin', '0px 10px 10px 0px')
            .append("<div class='contributor-avatar' data-weight='" + additions + "'><img src='" + githubContribution.author.avatar_url + "'/></div>")
            .append("<div class='contributor-data'><a href='" + githubContribution.author.html_url + "'>" + githubContribution.author.login + "</a><div class='contributor-additions'> " + format(additions) + " ++</div><div class='contributor-deletions'>" + format(deletions) + " --</div></div>");
    };

    var resetContributorsContent = function (contributorsSection) {
        $(contributorsSection).html("");
    };

    var showSpinner = function (contributorsSection) {
        $(contributorsSection).html(spinner);
    };

    var format = function (number) {
        var fixed = number.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        return fixed.substring(0, fixed.length - 2);
    };

    gitbook.events.bind("page.change", function () {
        var contributorsSection = $("#GitHubContributors");
        if (contributorsSection.length != 0) {
            backgroundColor = $($('.book-summary')[0]).css('backgroundColor');
            showSpinner(contributorsSection);
            loadAndShowContributors(contributorsSection);
        }
    });

    gitbook.events.bind('start', function (e, config) {
        githubOwner = config.githubcontributors.githubOwner;
        githubRepository = config.githubcontributors.githubRepository;
        contributorWidth = config.githubcontributors.contributorWidth;
    });

});
