mainPanel = $('#jobs');

function generateCard(job) {
    var $card = $(`
    <div class='card'>
        <div class='row g-0'>
            <div class="col-md-3 text-center">
                <img id="img" src="https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/absolum/16x9_Absolum_image1600w.jpg" class="img-fluid rounded-start h-100 object-fit-cover">
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <div class="d-flex">
                        <h4 id="name" class="card-title me-auto">Absolum</h4>
                        <h6 id="techs"></h6>
                    </div>
                    <h5 id="year-company" class="card-subtitle mb-2 text-body-secondary">2025 - Dotemu</h5>
                    <h6 id="platforms" class="card-subtitle mb-2 text-body-secondary"></h6>
                    <p class="card-text">
                        <ul id="bulletpoints">
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>` );

    $card.find('#img').attr("src", job.img);

    $card.find('#name').html(job.name);

    var $techs = $card.find('#techs');
    for(var tech of job.techs) {
        var $techBadge =$(`<span class="badge text-bg-secondary">` + tech + `</span>`);
        
        $techs.append($techBadge, " ");
    }

    if(job.company) {
        $card.find('#year-company').html(job.year + " - " + job.company);
    } else {
        $card.find('#year-company').html(job.year);
    }

    $card.find('#platforms').html(job.platforms.join(", "));

    var $bulletpoints = $card.find('#bulletpoints');
    for(var bulletpoint of job.bulletpoints) {
        $bulletpoints.append("<li>"+bulletpoint+"</li>");
    }

    mainPanel.append($card);

    mainPanel.append($("<hr/>"));
}

$.getJSON("portfolio.json", function(json) {
    for(var job of json.jobs) {
        generateCard(job);
    }
});