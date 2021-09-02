var md = window.markdownit();

(function () {
    const md_rule = {
        'tab': /\n---\r\n/,
        'section': /----\r\n/,
        'identifier1': /#\s\S+\s/,
        'identifier2': /##\s\S+\s/,
        'title_filter1': /#\s\S+\r\n/,
        'title_filter2': /##\s.+\r\n/,
    }

    function set_tab_display(intro_tag, content_tag, id) {
        var count = $(content_tag).children('div').length
        for (i = 0; i < count; i++) {
            $(content_tag + ' #tab-' + i).css('display', (i == id) ? 'block' : 'none')
            if (i == id) $(intro_tag + ' #tab-button-' + i).addClass('active')
            else $(intro_tag + ' #tab-button-' + i).removeClass('active')
        }
    }

    function article_parser(contents, intro_tag, content_tag) {
        sections = contents.split(md_rule['section'])

        sections.forEach((article, idx) => {
            // headers
            if (idx == 0) {
                content_render(article, intro_tag)
                $(intro_tag).append(
                    $('<div class="tab-button-container"></div>'))
            }
            // articles
            else {
                title = article.match(md_rule['title_filter2'])[0].slice(2, -1);
                tab_btn_container = intro_tag + ' div'
                $(tab_btn_container).append(
                    $('<button class="tab-links"></button>')
                        .on('click', function () { set_tab_display(intro_tag, content_tag, idx - 1) })
                        .attr('id', 'tab-button-' + (idx - 1))
                        .text(title)
                )
                $(content_tag).append(
                    $('<div class="md-container"></div>')
                        .attr('id', 'tab-' + (idx - 1))
                        .append(md.render(article))
                )
            }
        })

        // set default to display
        set_tab_display(intro_tag, content_tag, 0)
    }

    function content_render(content, selector) {
        $(selector).append(md.render(content))
    }

    var tab_handler = {
        '團隊介紹': (contents) => { content_render(contents, '#content-team') },
        '各組介紹': (contents) => {
            sections = contents.split(md_rule['section'])
            // headers

            // acedamic

            // administration

        },
        '活動': function (contents) { article_parser(contents, '#activities-intro', '#activities-articles') },
        '專案計畫': function (contents) { article_parser(contents, '#projects-intro', '#projects-articles') },
        '歷屆作品/商品': (contents) => { article_parser(contents, '#products-intro', '#products-articles') },
        '聯絡我們': (contents) => content_render(contents, '#content-contact')
    }

    $.get('./data/content.md', function (data) {
        var tabs = data.split(md_rule['tab'])
        tabs.forEach((tab_content, idx) => {
            console.log(idx)
            id = tab_content.match(md_rule['identifier1'])[0].slice(2, -1);
            console.log(id)

            try {
                tab_handler[id](tab_content)
            }
            catch (e) {
                console.log(e)
            }
        });
    });
})()

