$(document).ready(function() {
    $("#loader").fadeOut(1000);

    $.ajax({
        type: "GET",
        url: "xml/schemes.xml",
        dataType: "xml",
        success: function(xml) {
            let output = '';
            $(xml).find('scheme').each(function() {
                let title = $(this).find('title').text();
                let description = $(this).find('description').text();

                output += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title text-success">${title}</h5>
                            <p class="card-text">${description}</p>
                        </div>
                    </div>
                </div>`;
            });

            $("#schemesContainer").html(output);
        },
        error: function() {
            $("#schemesContainer").html('<p class="text-danger">Unable to load schemes. Please try again later.</p>');
        }
    });
});
