app.component('time-card', {
    props: {
        place: {
            type: String
        },
        time: {
            type: String
        },
        image:{
            type: String
        },
        degrees:{
            type: String
        },
        rain:{
            type: String
        },
        wind:{
            type: String
        },
        info:{
            type: String
        },
        uv:{
            type: String
        }
    },
    template:
        /*html*/
        `
    <div class="weather-card mb-5">
    <div class="ms-4 mt-4 space">
        <div class="row">
            <div class="col">
                <h3 class="place-title">{{place}}</h3>
                <p class="time">{{time}}</p>
            </div>
            <div class="col">
                <img v-bind:src="image" alt="weather time">
            </div>
        </div>
        <div class="d-flex align-items-end justify-content-between me-5 pe-5">
            <p class="degrees">{{degrees}}</p>
            <p class="odds">{{rain}}</p>
            <p class="odds">{{wind}}</p>
        </div>
        <p class="info mt-0 pt-0">{{info}}</p>
        <p class="info mt-0 pt-0">{{uv}}</p>
    </div>
</div>
    `
})