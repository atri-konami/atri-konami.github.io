$(function(){ 
    var jobs = [
        {
            icon: "PLD",
            job: "ナイト"
        },
        {
            icon: "WAR",
            job: "戦士"
        },
        {
            icon: "DRK",
            job: "暗黒騎士"
        },
        {
            icon: "WHM",
            job: "白魔道士"
        },
        {
            icon: "SCH",
            job: "学者"
        },
        {
            icon: "AST",
            job: "占星術師"
        },
        {
            icon: "MNK",
            job: "モンク"
        },
        {
            icon: "DRG",
            job: "竜騎士"
        },
        {
            icon: "NIN",
            job: "忍者"
        },
        {
            icon: "SAM",
            job: "侍"
        },
        {
            icon: "BRD",
            job: "吟遊詩人"
        },
        {
            icon: "MCH",
            job: "機工士"
        },
        {
            icon: "BLM",
            job: "黒魔道士"
        },
        {
            icon: "SMN",
            job: "召喚士"
        },
        {
            icon: "RDM",
            job: "赤魔道士"
        }
    ];

    $("#start").click(function(){
        var size = jobs.length;
        var idx = Math.floor(Math.random() * size);
        $("#icon").attr("src", "/img/jobs/" + jobs[idx].icon + ".png");
        $("#job").html(jobs[idx].job);
    });
});