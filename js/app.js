var md = window.markdownit();

(function () {
    const md_rule = {
        'tab': /\n---\r\n/,
        'section': /----\r\n/,
        'identifier1': /#\s\S+\s/,
        'identifier2': /##\s\S+\s/,
        'identifier3': /###\s\S+\s/,
        'title_filter1': /#\s\S+\r\n/,
        'title_filter2': /##\s.+\r\n/,
    }

    function set_tab_display(intro_tag, content_tag, id) {
        /* Set the click event of switching pages

        Args:
            intro_tag: the id of button to be trigger.
            content_tag: the id of content to be show.
            id: the identifying number of the content.
         */
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

    function navigator_generator(nav_tag, content, intro_tag, content_tag) {
        /* Generate the navbar items and bind the clicking event

        Args: 
            nav_tag: the id of the navbar container. The navbar content will be append in it.
            content: the article to be analyzed.
            intro_tag: the tag of the container of the tab header.
            content_tag: the tag of the container of the content.
         */
        btn_title = content.match(md_rule['identifier1'])[0].slice(2, -1);
        var sub_btn = $('<ul></ul>')

        sub_content = content.split(md_rule['section'])
        sub_content.forEach((sub, idx) => {
            console.log(sub)
            sub_title = sub.match(md_rule['title_filter2'])
            if (sub_title != null)
                sub_btn.append(
                    $('<li></li>').append(
                        $('<a></a>')
                            //.attr('href', '#sub-' + get_page_id(sub))
                            .on('click', function () { set_tab_display(intro_tag, content_tag, idx - 1) })
                            .attr('href', '#btn-' + btn_title)
                            .text(sub_title[0].slice(2, -1))
                    )
                )
        })
        $(nav_tag).append(
            $('<li></li>').append(
                $('<div></div>')
                    .append(
                        $('<a></a>')
                            .attr('href', '#btn-' + btn_title)
                            .text(btn_title)
                    )
                    .append(sub_btn)
            )
        )
    }

    function get_page_id(article) {
        return 'btn-' + article.match(md_rule['identifier1'])[0].slice(2, -1)
    }

    var tab_handler = {
        'NCKU': (contents) => { },
        '團隊介紹': (contents) => {
            $('#page-team').attr('id', get_page_id(contents))
            navigator_generator('#navigator-container', contents)
            content_render(contents, '#content-team')
        },
        '各組介紹': (contents) => {
            //$('#content-team').attr('id', contents.match(md_rule['identifier2']))
            sections = contents.split(md_rule['section'])
            // headers

            // acedamic

            // administration

        },
        '活動': function (contents) {
            $('#page-activities').attr('id', get_page_id(contents))
            navigator_generator('#navigator-container', contents, '#activities-intro', '#activities-articles')
            article_parser(contents, '#activities-intro', '#activities-articles')
        },
        '專案計畫': function (contents) {
            $('#page-projects').attr('id', get_page_id(contents))
            navigator_generator('#navigator-container', contents, '#projects-intro', '#projects-articles')
            article_parser(contents, '#projects-intro', '#projects-articles')
        },
        '歷屆作品/商品': (contents) => {
            $('#page-products').attr('id', get_page_id(contents))
            navigator_generator('#navigator-container', contents, '#products-intro', '#products-articles')
            article_parser(contents, '#products-intro', '#products-articles')
        },
        '聯絡我們': (contents) => {
            $('#page-contact').attr('id', get_page_id(contents))
            navigator_generator('#navigator-container', contents)
            content_render(contents, '#content-contact')
        }
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

