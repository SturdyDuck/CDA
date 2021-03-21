let wrap = $('.block-3');
let elems = [];

$.getJSON('block-3.json', function(data) {
    let i = 1;
    data.elems.forEach(elem => {
        let div = document.createElement('div');
        div.className = 'block-3_text';

        let dateAndTag = document.createElement('span');
        dateAndTag.className = 'block-3_dateAndTag';
        dateAndTag.innerHTML = elem.date + ' | In ' + elem.tag;
        div.append(dateAndTag);

        let header = document.createElement('p');
        header.className = 'block-3_header';
        header.innerHTML = elem.header;
        div.append(header);

        let content = document.createElement('p');
        content.className = 'block-3_content';
        content.innerHTML = elem.content;
        div.append(content);

        let img = document.createElement('img');
        img.src = 'images/' + elem.image;

        if (i % 2 == 0) {
            wrap.append(img);
            wrap.append(div);
        }
        else {
            wrap.append(div);
            wrap.append(img);
        }

        i++;
    });
})