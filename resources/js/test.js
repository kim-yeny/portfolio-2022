window.onload = function () {
    startLoadFile();
};

function startLoadFile() {
    $.ajax({
        url: 'test.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            createImages(data)
        }
    });
}

function createImages(objImageInfo) {
    var images = objImageInfo.images;
    var strDOM = "";

    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        strDOM += '<div class="image_panel">';

        strDOM += '< img src = "' + image.url + '">';
        strDOM += '<p class="title">' + image.title + '</p>';
        strDOM += '</div>';

        var $imageContainer = $("#image_container");
        $imageContainer.append(strDOM);

    }
}