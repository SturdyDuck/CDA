// Load json
let features = [];
let features_block = $('.Features-List');
$.getJSON('Features.json', function(data) {
    data.features.forEach(feature => {
        let div = document.createElement('div');
        div.className = 'feature-div';
        
        let img_span = document.createElement('i');
        img_span.className = 'feature-img fa fa-5x ' + feature.image;
        div.append(img_span);
        
        let header_span = document.createElement('span');
        header_span.className = 'feature-header';
        header_span.innerHTML = feature.header;
        div.append(header_span);
        
        let content_span = document.createElement('span');
        content_span.className = 'feature-content';
        content_span.innerHTML = feature.content;
        div.append(content_span);
        
        features_block.append(div);
    });
});
