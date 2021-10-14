var app=new Vue({
    el:"#player",
    data:{
        queary:"",
        musicList:[],
        musicUrl:"",
        picUrl:"",
        commentArr:[],
        isPlaying:false,
        mvUrl:"",
        isShow:false
    },
    methods:{
        searchMusic:function(){
            var that=this;
            axios.get("https://autumnfish.cn/search?keywords="+this.queary).then(function(res){
                // console.log(res);
                that.musicList=res.data.result.songs;
                // console.log(that.musicList);
                
            },function(err){

            })
        },
        playMusic:function(musicId){
            var that=this;
            // console.log(musicId);
            axios.get("https://autumnfish.cn/song/url?id="+musicId).then(function(res){
                // console.log(res);
                that.musicUrl=res.data.data[0].url;
            },function(err){

            });
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId).then(function(res){
                // console.log(res);
                that.picUrl=res.data.songs[0].al.picUrl
            },function(err){

            });
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId).then(function(res){
                // console.log(res);
                that.commentArr=res.data.hotComments
            },function(err){

            });
        },
        play:function(){
            // console.log("播放ing");
            this.isPlaying=true;
        },
        pause:function(){
            // console.log("暂停ing");
            this.isPlaying=false;

        },
        playMv:function(mvId){
            var that=this;
            axios.get("https://autumnfish.cn/mv/url?id="+mvId).then(function(res){
                // console.log(res);
                that.mvUrl=res.data.data.url;
                that.isShow=true;
                that.musicUrl="";
            },function(err){

            })
        },
        closeMv:function(){
            this.mvUrl="";
            this.isShow=false;
        }
    }
})